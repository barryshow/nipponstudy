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
const ids = ['human', 'arc', 'kyoshin', 'shinjuku-gyoen'];
const schools = Object.fromEntries(ids.map((id) => [id, languageSchools.find((s) => s.id === id)]));

if (Object.values(schools).some((s) => !s)) {
  throw new Error('Reviewed batch 8 schools are missing from local data.');
}

const quote = (value) => "'" + String(value).replaceAll("'", "''") + "'";
const json = (value) => quote(JSON.stringify(value)) + '::jsonb';
const update = (s) => `
UPDATE "LanguageSchool" SET
  name = ${quote(s.name)},
  "nameJa" = ${quote(s.nameJa)},
  location = ${quote(s.location)},
  tuition = ${quote(s.tuition)},
  "paymentTerm" = ${quote(s.paymentTerm)},
  "attendanceRequirement" = ${quote(s.attendanceRequirement)},
  duration = ${quote(s.duration)},
  "visaRequirement" = ${quote(s.visaRequirement)},
  "minimumStudyForVocational" = ${quote(s.minimumStudyForVocational)},
  intake = ${quote(s.intake)},
  highlights = ${quote(s.highlights)},
  website = ${quote(s.website || '')},
  "featuresJson" = ${json(s.features)},
  "programsJson" = ${json(s.programs)},
  "tuitionBreakdownJson" = ${json(s.tuitionBreakdown)},
  "suitableForJson" = ${json(s.suitableFor)}
WHERE slug = ${quote(s.id)};`;

const sql = `-- Reviewed batch 8 for 2027 (language schools). NOT EXECUTED; to be applied by Codex later.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- Offline artifact only: no database connection, seed endpoint, or key access was used.
-- Pure UPDATE: no INSERT, DELETE, or schema changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "LanguageSchool" WHERE slug IN ('human', 'arc', 'kyoshin', 'shinjuku-gyoen')) <> 4 THEN
    RAISE EXCEPTION 'Expected school records are missing; no updates applied';
  END IF;
END $$;${update(schools.human)}${update(schools.arc)}${update(schools.kyoshin)}${update(schools['shinjuku-gyoen'])}
COMMIT;
`;

fs.mkdirSync(path.join(root, 'scripts/reviewed-updates'), { recursive: true });
fs.writeFileSync(path.join(root, 'scripts/reviewed-updates/2027-batch-08.sql'), sql);
console.log('Prepared four-school SQL update; no remote writes performed.');
