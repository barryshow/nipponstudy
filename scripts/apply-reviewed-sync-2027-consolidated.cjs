// Applies the reviewed local corrections to Supabase with the project's secret key.
//
// Writes are limited to rows whose content actually differs from the local data:
//   University        — PATCH the confirmed corrections, INSERT hitotsubashi
//   VocationalSchool  — PATCH hal
//   LanguageSchool    — PATCH isi
// Every write is preceded by a slug-existence guard and followed by a full field-by-field
// re-read, so a partial run can be repeated safely and errors surface immediately.
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');

const readEnv = (file) => {
  const text = fs.readFileSync(path.join(root, file), 'utf8');
  return Object.fromEntries(
    text.split(/\r?\n/)
      .filter((line) => /^[A-Z_]+=/.test(line))
      .map((line) => {
        const i = line.indexOf('=');
        return [line.slice(0, i), line.slice(i + 1).trim().replace(/^["']|["']$/g, '')];
      }),
  );
};

const loadTs = (file) => {
  const code = ts.transpileModule(fs.readFileSync(path.join(root, file), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const m = { exports: {} };
  new Function('exports', 'module', code)(m.exports, m);
  return m.exports;
};

const env = readEnv('.env.local');
const url = env.NEXT_PUBLIC_SUPABASE_URL;
const key = env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) throw new Error('Supabase URL or secret key missing from .env.local');
const baseHeaders = { apikey: key, Authorization: `Bearer ${key}` };

const canonical = (v) => {
  if (Array.isArray(v)) return v.map(canonical);
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.keys(v).sort().map((k) => [k, canonical(v[k])]));
  }
  return v;
};
const isBlank = (v) => v === null || v === undefined || v === '';
const deepEq = (a, b) => {
  if (isBlank(a) && isBlank(b)) return true;
  return JSON.stringify(canonical(a ?? null)) === JSON.stringify(canonical(b ?? null));
};

const UNIVERSITY_COLUMNS = [
  'name', 'nameJa', 'type', 'ranking', 'location', 'tuition', 'gpaRequirement',
  'japaneseRequirement', 'englishRequirement', 'highlights', 'researchStudent', 'examFormat',
  'sguNote', 'website', 'featuresJson', 'programsJson', 'suitableForJson',
];

const TABLES = {
  University: {
    rows: () => {
      const u = loadTs('data/schools/universities.ts');
      return [...u.nationalUniversities, ...u.publicUniversities, ...u.privateUniversities];
    },
    map: (s) => ({
      slug: s.id, name: s.name, nameJa: s.nameJa, type: s.type, ranking: s.ranking,
      location: s.location, tuition: s.tuition, gpaRequirement: s.gpaRequirement,
      japaneseRequirement: s.japaneseRequirement, englishRequirement: s.englishRequirement,
      highlights: s.highlights, researchStudent: s.researchStudent, examFormat: s.examFormat,
      sguNote: s.sguNote, website: s.website || null,
      featuresJson: s.features, programsJson: s.programs, suitableForJson: s.suitableFor,
    }),
  },
  VocationalSchool: {
    rows: () => loadTs('data/schools/vocational-schools.ts').vocationalSchools,
    map: (s) => ({
      slug: s.id, name: s.name, nameJa: s.nameJa, category: s.category, location: s.location,
      tuition: s.tuition, totalTwoYears: s.totalTwoYears, highlights: s.highlights,
      employmentRate: s.employmentRate, employmentRateDetail: s.employmentRateDetail,
      paymentTerm: s.paymentTerm, degreeAwarded: s.degreeAwarded,
      attendanceRequirement: s.attendanceRequirement,
      featuresJson: s.features, programsJson: s.programs, tuitionBreakdownJson: s.tuitionBreakdown,
      suitableForJson: s.suitableFor, scholarshipsJson: s.scholarships,
    }),
  },
  LanguageSchool: {
    rows: () => loadTs('data/schools/language-schools.ts').languageSchools,
    map: (s) => ({
      slug: s.id, name: s.name, nameJa: s.nameJa, location: s.location, tuition: s.tuition,
      paymentTerm: s.paymentTerm, attendanceRequirement: s.attendanceRequirement,
      duration: s.duration, visaRequirement: s.visaRequirement,
      minimumStudyForVocational: s.minimumStudyForVocational, intake: s.intake,
      highlights: s.highlights, website: s.website || null,
      featuresJson: s.features, programsJson: s.programs,
      tuitionBreakdownJson: s.tuitionBreakdown, suitableForJson: s.suitableFor,
    }),
  },
};

// Only rows reviewed in this pass are written.
const TARGETS = {
  University: [
    'utokyo', 'hiroshima-u', 'kobe-u', 'nitech', 'sophia', 'meiji', 'rikkyo', 'hosei',
    'doshisha', 'tus', 'shibaura', 'denki', 'aoyama', 'chuo', 'kinki', 'nihon', 'toyo',
    'hitotsubashi',
  ],
  VocationalSchool: ['hal'],
  LanguageSchool: ['isi'],
};

const fetchRemote = async (table, slug) => {
  const res = await fetch(
    `${url}/rest/v1/${table}?select=*&slug=eq.${encodeURIComponent(slug)}`,
    { headers: baseHeaders },
  );
  if (!res.ok) throw new Error(`Read failed ${table}/${slug}: ${res.status} ${await res.text()}`);
  const rows = await res.json();
  if (rows.length > 1) throw new Error(`${table}/${slug}: expected at most 1 row, got ${rows.length}`);
  return rows[0] || null;
};

const insert = async (table, row) => {
  const res = await fetch(`${url}/rest/v1/${table}`, {
    method: 'POST',
    headers: { ...baseHeaders, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
    body: JSON.stringify(row),
  });
  if (!res.ok) throw new Error(`Insert failed ${table}/${row.slug}: ${res.status} ${await res.text()}`);
};

const patch = async (table, slug, delta) => {
  const res = await fetch(`${url}/rest/v1/${table}?slug=eq.${encodeURIComponent(slug)}`, {
    method: 'PATCH',
    headers: {
      ...baseHeaders, 'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify(delta),
  });
  if (!res.ok) throw new Error(`Patch failed ${table}/${slug}: ${res.status} ${await res.text()}`);
  const rows = await res.json();
  if (rows.length !== 1) throw new Error(`Patch ${table}/${slug} touched ${rows.length} rows, expected 1`);
  return rows[0];
};

const verify = async (table, local) => {
  const remote = await fetchRemote(table, local.slug);
  if (!remote) throw new Error(`Verification failed: ${table}/${local.slug} missing after write`);
  const mismatched = Object.keys(local).filter((k) => !deepEq(local[k], remote[k]));
  if (mismatched.length) {
    throw new Error(`Verification failed ${table}/${local.slug}: ${mismatched.join(', ')}`);
  }
  return remote;
};

(async () => {
  const report = [];
  for (const [table, slugs] of Object.entries(TARGETS)) {
    const def = TABLES[table];
    const localRows = new Map(def.rows().map((s) => [s.id, def.map(s)]));
    for (const slug of slugs) {
      const local = localRows.get(slug);
      if (!local) throw new Error(`${slug} missing from local ${table} data`);
      const remote = await fetchRemote(table, slug);

      if (!remote) {
        await insert(table, local);
        await verify(table, local);
        report.push({ table, slug, action: 'inserted', fields: Object.keys(local).length });
        continue;
      }

      const delta = Object.fromEntries(
        Object.keys(local).filter((k) => !deepEq(local[k], remote[k])).map((k) => [k, local[k]]),
      );
      if (!Object.keys(delta).length) {
        report.push({ table, slug, action: 'unchanged', fields: 0 });
        continue;
      }
      await patch(table, slug, delta);
      await verify(table, local);
      report.push({ table, slug, action: 'updated', fields: Object.keys(delta).length, changed: Object.keys(delta) });
    }
  }

  for (const line of report) console.log(JSON.stringify(line));
  const counts = report.reduce((acc, r) => ({ ...acc, [r.action]: (acc[r.action] || 0) + 1 }), {});
  console.log('SUMMARY', JSON.stringify(counts));
})().catch((error) => {
  console.error('FAILED:', error.message);
  process.exit(1);
});
