// Applies the reviewed batch 14 language-school records to the configured Supabase
// project through the REST API using the project's publishable key.
//
// Why REST: this machine cannot resolve/reach db.<project>.supabase.co and the
// DATABASE_URL password is rejected by the pooler, so no transactional SQL path is
// available. The LanguageSchool table has an INSERT-only RLS policy for the
// publishable key, so every row is inserted individually and verified by re-reading
// it. Rows are only added when the slug is absent, so a partial run can be safely
// repeated without creating duplicates.
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const ids = [
  'sendai-jls', 'hokkaido-ir', 'hiroshima-jls', 'okayama-jls',
  'saitama-jls', 'tsukuba-jls', 'kawasaki-jls',
];

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

const env = readEnv('.env.local');
const url = env.NEXT_PUBLIC_SUPABASE_URL;
const key = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!url || !key) throw new Error('Supabase URL or publishable key missing from .env.local.');
const headers = { apikey: key, Authorization: `Bearer ${key}` };

const code = ts.transpileModule(
  fs.readFileSync(path.join(root, 'data/schools/language-schools.ts'), 'utf8'),
  { compilerOptions: { module: ts.ModuleKind.CommonJS } },
).outputText;
const loadedModule = { exports: {} };
new Function('exports', 'module', code)(loadedModule.exports, loadedModule);

const toRow = (school) => ({
  slug: school.id,
  name: school.name,
  nameJa: school.nameJa,
  location: school.location,
  tuition: school.tuition,
  paymentTerm: school.paymentTerm,
  attendanceRequirement: school.attendanceRequirement,
  duration: school.duration,
  visaRequirement: school.visaRequirement,
  minimumStudyForVocational: school.minimumStudyForVocational,
  intake: school.intake,
  highlights: school.highlights,
  website: school.website || null,
  featuresJson: school.features,
  programsJson: school.programs,
  tuitionBreakdownJson: school.tuitionBreakdown,
  suitableForJson: school.suitableFor,
});

const exists = async (slug) => {
  const res = await fetch(`${url}/rest/v1/LanguageSchool?select=slug&slug=eq.${encodeURIComponent(slug)}`, { headers });
  if (!res.ok) throw new Error(`Lookup failed for ${slug}: ${res.status} ${await res.text()}`);
  return (await res.json()).length > 0;
};

const insert = async (row) => {
  const res = await fetch(`${url}/rest/v1/LanguageSchool`, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
    body: JSON.stringify(row),
  });
  if (!res.ok) throw new Error(`Insert failed for ${row.slug}: ${res.status} ${await res.text()}`);
};

const verify = async (slug) => {
  const res = await fetch(
    `${url}/rest/v1/LanguageSchool?select=slug,name,tuition,website,programsJson&slug=eq.${encodeURIComponent(slug)}`,
    { headers },
  );
  if (!res.ok) throw new Error(`Verification failed for ${slug}: ${res.status} ${await res.text()}`);
  const rows = await res.json();
  if (rows.length !== 1) throw new Error(`Verification expected 1 row for ${slug}, got ${rows.length}`);
  return rows[0];
};

(async () => {
  const schools = ids.map((id) => loadedModule.exports.languageSchools.find((s) => s.id === id));
  if (schools.some((s) => !s)) throw new Error('Reviewed batch 14 schools are missing from local data.');

  const report = [];
  for (const school of schools) {
    if (await exists(school.id)) {
      report.push({ slug: school.id, action: 'skipped (already present)' });
      continue;
    }
    await insert(toRow(school));
    const row = await verify(school.id);
    report.push({
      slug: row.slug,
      action: 'inserted',
      name: row.name,
      programs: Array.isArray(row.programsJson) ? row.programsJson.length : 0,
      website: row.website || '(none)',
      tuition: String(row.tuition).slice(0, 50),
    });
  }

  for (const line of report) console.log(JSON.stringify(line));
})().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
