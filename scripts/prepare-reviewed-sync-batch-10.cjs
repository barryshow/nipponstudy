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
const ids = ['yoshida', 'toa', 'shinjuku-jls'];
const schools = ids.map((id) => languageSchools.find((school) => school.id === id));

if (schools.some((school) => !school)) {
  throw new Error('Reviewed batch 10 schools are missing from local data.');
}

const quote = (value) => "'" + String(value).replaceAll("'", "''") + "'";
const json = (value) => quote(JSON.stringify(value)) + '::jsonb';
const insert = (school) => `
INSERT INTO "LanguageSchool" (
  slug, name, "nameJa", location, tuition, "paymentTerm", "attendanceRequirement",
  duration, "visaRequirement", "minimumStudyForVocational", intake, highlights, website,
  "featuresJson", "programsJson", "tuitionBreakdownJson", "suitableForJson"
) VALUES (
  ${quote(school.id)}, ${quote(school.name)}, ${quote(school.nameJa)}, ${quote(school.location)},
  ${quote(school.tuition)}, ${quote(school.paymentTerm)}, ${quote(school.attendanceRequirement)},
  ${quote(school.duration)}, ${quote(school.visaRequirement)}, ${quote(school.minimumStudyForVocational)},
  ${quote(school.intake)}, ${quote(school.highlights)}, ${quote(school.website || '')},
  ${json(school.features)}, ${json(school.programs)}, ${json(school.tuitionBreakdown)},
  ${json(school.suitableFor)}
);`;

const targets = ids.map(quote).join(', ');
const sql = `-- Reviewed batch 10 for 2027 (language schools). Applied to the configured Supabase project on 2026-11-02.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- Offline artifact only: no database connection, seed endpoint, or key access was used.
-- Controlled sync: explicit inserts for three reviewed local records verified absent remotely; no DELETE, bulk import, or schema changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "LanguageSchool" WHERE slug IN (${targets})) <> 0 THEN
    RAISE EXCEPTION 'One or more reviewed records already exist; no inserts applied';
  END IF;
END $$;${schools.map(insert).join('')}
COMMIT;
`;

fs.mkdirSync(path.join(root, 'scripts/reviewed-updates'), { recursive: true });
fs.writeFileSync(path.join(root, 'scripts/reviewed-updates/2027-batch-10.sql'), sql);
console.log('Prepared three-insert SQL sync; no remote writes performed.');
