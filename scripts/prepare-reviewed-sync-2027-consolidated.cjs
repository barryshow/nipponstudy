// Offline SQL artifact only. No database connection or writes occur here.
//
// Batch 15 reviews 20 existing records (18 universities, HAL Tokyo, ISI) in one consolidated
// pass. The remote copy was applied on 2026-11-05 through
// scripts/apply-reviewed-sync-2027-consolidated.cjs over Supabase REST (per-row PATCH with a
// field-by-field read-back), because the direct database connection is still unavailable.
// This script keeps the equivalent, auditable SQL: upserts keyed on slug, never DELETE.
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');

const loadTs = (file) => {
  const code = ts.transpileModule(fs.readFileSync(path.join(root, file), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const m = { exports: {} };
  new Function('exports', 'module', code)(m.exports, m);
  return m.exports;
};

const quote = (value) => "'" + String(value).replaceAll("'", "''") + "'";
const json = (value) => quote(JSON.stringify(value)) + '::jsonb';

// Columns mirror the remote schema order in scripts/schools-schema.sql.
// VocationalSchool has no website column, so HAL's local website field is intentionally not synced.
const TABLES = [
  {
    table: 'University',
    ids: [
      'utokyo', 'hiroshima-u', 'kobe-u', 'hitotsubashi', 'nitech', 'sophia', 'meiji', 'rikkyo',
      'hosei', 'doshisha', 'tus', 'shibaura', 'denki', 'aoyama', 'chuo', 'kinki', 'nihon', 'toyo',
    ],
    rows: () => {
      const u = loadTs('data/schools/universities.ts');
      return [...u.nationalUniversities, ...u.publicUniversities, ...u.privateUniversities];
    },
    values: (s) => ({
      name: s.name, nameJa: s.nameJa, type: s.type, ranking: s.ranking, location: s.location,
      tuition: s.tuition, gpaRequirement: s.gpaRequirement,
      japaneseRequirement: s.japaneseRequirement, englishRequirement: s.englishRequirement,
      highlights: s.highlights, researchStudent: s.researchStudent, examFormat: s.examFormat,
      sguNote: s.sguNote ?? null, website: s.website || null,
      featuresJson: s.features, programsJson: s.programs, suitableForJson: s.suitableFor,
    }),
    jsonColumns: ['featuresJson', 'programsJson', 'suitableForJson'],
  },
  {
    table: 'VocationalSchool',
    ids: ['hal'],
    rows: () => loadTs('data/schools/vocational-schools.ts').vocationalSchools,
    values: (s) => ({
      name: s.name, nameJa: s.nameJa, category: s.category, location: s.location,
      tuition: s.tuition, totalTwoYears: s.totalTwoYears, highlights: s.highlights,
      employmentRate: s.employmentRate, employmentRateDetail: s.employmentRateDetail,
      paymentTerm: s.paymentTerm, degreeAwarded: s.degreeAwarded,
      attendanceRequirement: s.attendanceRequirement,
      featuresJson: s.features, programsJson: s.programs, tuitionBreakdownJson: s.tuitionBreakdown,
      suitableForJson: s.suitableFor, scholarshipsJson: s.scholarships,
    }),
    jsonColumns: ['featuresJson', 'programsJson', 'tuitionBreakdownJson', 'suitableForJson', 'scholarshipsJson'],
  },
  {
    table: 'LanguageSchool',
    ids: ['isi'],
    rows: () => loadTs('data/schools/language-schools.ts').languageSchools,
    values: (s) => ({
      name: s.name, nameJa: s.nameJa, location: s.location, tuition: s.tuition,
      paymentTerm: s.paymentTerm, attendanceRequirement: s.attendanceRequirement,
      duration: s.duration, visaRequirement: s.visaRequirement,
      minimumStudyForVocational: s.minimumStudyForVocational, intake: s.intake,
      highlights: s.highlights, website: s.website || null,
      featuresJson: s.features, programsJson: s.programs,
      tuitionBreakdownJson: s.tuitionBreakdown, suitableForJson: s.suitableFor,
    }),
    jsonColumns: ['featuresJson', 'programsJson', 'tuitionBreakdownJson', 'suitableForJson'],
  },
];

const statements = TABLES.map((def) => {
  const byId = new Map(def.rows().map((s) => [s.id, s]));
  const missing = def.ids.filter((id) => !byId.has(id));
  if (missing.length) throw new Error(`Reviewed records missing from local data: ${missing.join(', ')}`);

  const upserts = def.ids.map((id) => {
    const row = def.values(byId.get(id));
    const columns = Object.keys(row);
    const values = columns.map((key) => {
      if (def.jsonColumns.includes(key)) return json(row[key]);
      return row[key] === null ? 'NULL' : quote(row[key]);
    });
    const updates = columns
      .filter((key) => key !== 'name')
      .map((key) => `"${key}" = EXCLUDED."${key}"`);
    return `
INSERT INTO "${def.table}" (slug, ${columns.map((c) => `"${c}"`).join(', ')}) VALUES (
  ${quote(id)}, ${values.join(', ')}
) ON CONFLICT (slug) DO UPDATE SET ${updates.join(', ')};`;
  });

  const slugList = def.ids.map(quote).join(', ');
  return `
-- ${def.table}: ${def.ids.length} reviewed record(s) — upsert only, no DELETE.
DO $$ BEGIN
  IF (SELECT count(*) FROM "${def.table}" WHERE slug IN (${slugList})) <> ${def.ids.length} THEN
    RAISE EXCEPTION 'Expected reviewed ${def.table} records are missing; no updates applied';
  END IF;
END $$;${upserts.join('')}`;
});

const sql = `-- Reviewed batch 15 for 2027 (universities, vocational school, language school).
-- Applied 2026-11-05 via scripts/apply-reviewed-sync-2027-consolidated.cjs.
-- Kept as the auditable SQL equivalent; running it again is idempotent only against rows that
-- already exist remotely (the guard below aborts if any target slug is missing).
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- Controlled sync: 18 University, 1 VocationalSchool and 1 LanguageSchool record, upsert by slug;
-- no DELETE, bulk import, or schema changes.
BEGIN;${statements.join('')}
COMMIT;
`;

fs.mkdirSync(path.join(root, 'scripts/reviewed-updates'), { recursive: true });
fs.writeFileSync(path.join(root, 'scripts/reviewed-updates/2027-batch-15.sql'), sql);
console.log('Prepared SQL artifact for batch 15 (20 records); remote application was done by apply-reviewed-sync-2027-consolidated.cjs.');
