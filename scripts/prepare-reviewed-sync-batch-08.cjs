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

const insert = (s) => `
INSERT INTO "LanguageSchool" (
  slug, name, "nameJa", location, tuition, "paymentTerm", "attendanceRequirement",
  duration, "visaRequirement", "minimumStudyForVocational", intake, highlights, website,
  "featuresJson", "programsJson", "tuitionBreakdownJson", "suitableForJson"
) VALUES (
  ${quote(s.id)}, ${quote(s.name)}, ${quote(s.nameJa)}, ${quote(s.location)}, ${quote(s.tuition)},
  ${quote(s.paymentTerm)}, ${quote(s.attendanceRequirement)}, ${quote(s.duration)},
  ${quote(s.visaRequirement)}, ${quote(s.minimumStudyForVocational)}, ${quote(s.intake)},
  ${quote(s.highlights)}, ${quote(s.website || '')}, ${json(s.features)}, ${json(s.programs)},
  ${json(s.tuitionBreakdown)}, ${json(s.suitableFor)}
);`;

const sql = `-- Reviewed batch 8 for 2027 (language schools). Applied to the configured Supabase project on 2026-11-02.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- Offline artifact only: no database connection, seed endpoint, or key access was used.
-- Controlled sync: three updates and one explicit insert for a reviewed local record missing remotely; no DELETE or schema changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "LanguageSchool" WHERE slug IN ('human', 'arc', 'kyoshin')) <> 3 THEN
    RAISE EXCEPTION 'Expected existing school records are missing; no updates applied';
  END IF;
  IF (SELECT count(*) FROM "LanguageSchool" WHERE slug = 'shinjuku-gyoen') <> 0 THEN
    RAISE EXCEPTION 'The reviewed missing record already exists; no updates applied';
  END IF;
END $$;${update(schools.human)}${update(schools.arc)}${update(schools.kyoshin)}${insert(schools['shinjuku-gyoen'])}
COMMIT;
`;

fs.mkdirSync(path.join(root, 'scripts/reviewed-updates'), { recursive: true });
fs.writeFileSync(path.join(root, 'scripts/reviewed-updates/2027-batch-08.sql'), sql);
console.log('Prepared three-update, one-insert SQL sync; no remote writes performed.');
