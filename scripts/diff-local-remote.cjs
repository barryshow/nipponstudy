// Read-only diff between local data files and the remote Supabase tables.
// Uses the secret key from .env.local if present, else falls back to the publishable key.
// Prints per-slug field differences; performs no writes.
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
const key = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SECRET_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const headers = { apikey: key, Authorization: `Bearer ${key}` };

const norm = (v) => (v === undefined || v === null ? null : v);

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

// Postgres JSONB reorders object keys, so compare structurally with sorted keys.
const canonical = (v) => {
  if (Array.isArray(v)) return v.map(canonical);
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.keys(v).sort().map((k) => [k, canonical(v[k])]));
  }
  return v;
};
// null, undefined and "" all mean "no value" for these nullable text columns.
const isBlank = (v) => v === null || v === undefined || v === '';
const deepEq = (a, b) => {
  if (isBlank(a) && isBlank(b)) return true;
  return JSON.stringify(canonical(a ?? null)) === JSON.stringify(canonical(b ?? null));
};

(async () => {
  const out = {};
  for (const [table, def] of Object.entries(TABLES)) {
    const local = def.rows().map(def.map);
    const res = await fetch(`${url}/rest/v1/${table}?select=*&limit=1000`, { headers });
    if (!res.ok) throw new Error(`${table}: ${res.status} ${await res.text()}`);
    const remote = await res.json();
    const remoteBySlug = new Map(remote.map((r) => [r.slug, r]));
    const localBySlug = new Map(local.map((r) => [r.slug, r]));
    const missing = local.filter((r) => !remoteBySlug.has(r.slug)).map((r) => r.slug);
    const orphan = remote.filter((r) => !localBySlug.has(r.slug)).map((r) => r.slug);
    const changed = [];
    for (const l of local) {
      const r = remoteBySlug.get(l.slug);
      if (!r) continue;
      const fields = Object.keys(l).filter((k) => !deepEq(l[k], r[k]));
      if (fields.length) changed.push({ slug: l.slug, fields });
    }
    out[table] = { localCount: local.length, remoteCount: remote.length, missing, orphan, changed };
  }
  console.log(JSON.stringify(out, null, 2));
})().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
