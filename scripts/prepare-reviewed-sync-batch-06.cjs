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

const universities = data('data/schools/universities.ts').privateUniversities;
const ids = ['tus', 'shibaura', 'denki', 'kinki'];
const schools = Object.fromEntries(ids.map((id) => [id, universities.find((school) => school.id === id)]));

if (Object.values(schools).some((school) => !school)) {
  throw new Error('Reviewed batch 6 schools are missing from local data.');
}

const quote = (value) => "'" + String(value).replaceAll("'", "''") + "'";
const json = (value) => quote(JSON.stringify(value)) + '::jsonb';
const update = (school) => `
UPDATE "University" SET
  tuition = ${quote(school.tuition)},
  "gpaRequirement" = ${quote(school.gpaRequirement)},
  "japaneseRequirement" = ${quote(school.japaneseRequirement)},
  "englishRequirement" = ${quote(school.englishRequirement)},
  highlights = ${quote(school.highlights)},
  "featuresJson" = ${json(school.features)},
  "programsJson" = ${json(school.programs)},
  "examFormat" = ${quote(school.examFormat)},
  "sguNote" = ${quote(school.sguNote || '')},
  website = ${quote(school.website)}
WHERE slug = ${quote(school.id)};`;

const sql = `-- Reviewed batch 6 for 2027. Applied to the configured Supabase project on 2026-11-02.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- No INSERT, DELETE, public import endpoint, or contact/assessment changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "University" WHERE slug IN ('tus', 'shibaura', 'denki', 'kinki')) <> 4 THEN
    RAISE EXCEPTION 'Expected school records are missing; no updates applied';
  END IF;
END $$;${update(schools.tus)}${update(schools.shibaura)}${update(schools.denki)}${update(schools.kinki)}
COMMIT;
`;

fs.mkdirSync(path.join(root, 'scripts/reviewed-updates'), { recursive: true });
fs.writeFileSync(path.join(root, 'scripts/reviewed-updates/2027-batch-06.sql'), sql);
console.log('Prepared four-school SQL update; no remote writes performed.');
