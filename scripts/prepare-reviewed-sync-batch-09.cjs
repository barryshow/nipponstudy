// Offline SQL artifact only. No database connection or writes occur here.
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');

function data(file) {
  const code = ts.transpileModule(fs.readFileSync(path.join(root, file), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const module = { exports: {} };
  new Function('exports', 'module', code)(module.exports, module);
  return module.exports;
}

const languageSchools = data('data/schools/language-schools.ts').languageSchools;
const ids = ['sendagaya', 'kudanjapan', 'unitus', 'meros'];
const schools = Object.fromEntries(ids.map((id) => [id, languageSchools.find((school) => school.id === id)]));

if (Object.values(schools).some((school) => !school)) {
  throw new Error('Reviewed batch 9 schools are missing from local data.');
}

const quote = (value) => "'" + String(value).replaceAll("'", "''") + "'";
const json = (value) => quote(JSON.stringify(value)) + '::jsonb';
const update = (school) => `
UPDATE "LanguageSchool" SET
  name = ${quote(school.name)},
  "nameJa" = ${quote(school.nameJa)},
  location = ${quote(school.location)},
  tuition = ${quote(school.tuition)},
  "paymentTerm" = ${quote(school.paymentTerm)},
  "attendanceRequirement" = ${quote(school.attendanceRequirement)},
  duration = ${quote(school.duration)},
  "visaRequirement" = ${quote(school.visaRequirement)},
  "minimumStudyForVocational" = ${quote(school.minimumStudyForVocational)},
  intake = ${quote(school.intake)},
  highlights = ${quote(school.highlights)},
  website = ${quote(school.website || '')},
  "featuresJson" = ${json(school.features)},
  "programsJson" = ${json(school.programs)},
  "tuitionBreakdownJson" = ${json(school.tuitionBreakdown)},
  "suitableForJson" = ${json(school.suitableFor)}
WHERE slug = ${quote(school.id)};`;

const sql = `-- Reviewed batch 9 for 2027 (language schools). Applied to the configured Supabase project on 2026-11-02.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- Pure UPDATE: no INSERT, DELETE, schema changes, or public import endpoint.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "LanguageSchool" WHERE slug IN ('sendagaya', 'kudanjapan', 'unitus', 'meros')) <> 4 THEN
    RAISE EXCEPTION 'Expected school records are missing; no updates applied';
  END IF;
END $$;${update(schools.sendagaya)}${update(schools.kudanjapan)}${update(schools.unitus)}${update(schools.meros)}
COMMIT;
`;

fs.mkdirSync(path.join(root, 'scripts/reviewed-updates'), { recursive: true });
fs.writeFileSync(path.join(root, 'scripts/reviewed-updates/2027-batch-09.sql'), sql);
console.log('Prepared four-school SQL update; no remote writes performed.');
