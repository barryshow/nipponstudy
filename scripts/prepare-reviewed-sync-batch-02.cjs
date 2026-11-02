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

const universities = data('data/schools/universities.ts').nationalUniversities;
const titech = universities.find((school) => school.id === 'titech');
const nagoya = universities.find((school) => school.id === 'nagoya-u');

if (!titech || !nagoya) {
  throw new Error('Reviewed batch 2 schools are missing from local data.');
}

const quote = (value) => "'" + String(value).replaceAll("'", "''") + "'";
const json = (value) => quote(JSON.stringify(value)) + '::jsonb';

const sql = `-- Reviewed batch 2 for 2027. Applied to the configured Supabase project on 2026-11-02.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- No INSERT, DELETE, public import endpoint, or contact/assessment changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "University" WHERE slug IN ('titech', 'nagoya-u')) <> 2 THEN
    RAISE EXCEPTION 'Expected school records are missing; no updates applied';
  END IF;
END $$;
UPDATE "University" SET
  tuition = ${quote(titech.tuition)},
  "gpaRequirement" = ${quote(titech.gpaRequirement)},
  "japaneseRequirement" = ${quote(titech.japaneseRequirement)},
  "englishRequirement" = ${quote(titech.englishRequirement)},
  highlights = ${quote(titech.highlights)},
  "featuresJson" = ${json(titech.features)},
  "researchStudent" = ${quote(titech.researchStudent)},
  "examFormat" = ${quote(titech.examFormat)},
  website = ${quote(titech.website)}
WHERE slug = 'titech';
UPDATE "University" SET
  tuition = ${quote(nagoya.tuition)},
  "gpaRequirement" = ${quote(nagoya.gpaRequirement)},
  "japaneseRequirement" = ${quote(nagoya.japaneseRequirement)},
  "englishRequirement" = ${quote(nagoya.englishRequirement)},
  highlights = ${quote(nagoya.highlights)},
  "featuresJson" = ${json(nagoya.features)},
  "programsJson" = COALESCE((
    SELECT jsonb_agg(program)
    FROM jsonb_array_elements("programsJson") program
    WHERE program->>'name' NOT IN ('G30汽车工程(学部)', 'G30国际本科', 'G30国际本科项目')
  ), '[]'::jsonb) || ${json(nagoya.programs.find((program) => program.name === 'G30国际本科项目'))},
  "researchStudent" = ${quote(nagoya.researchStudent)},
  "examFormat" = ${quote(nagoya.examFormat)},
  website = ${quote(nagoya.website)}
WHERE slug = 'nagoya-u';
COMMIT;
`;

fs.mkdirSync(path.join(root, 'scripts/reviewed-updates'), { recursive: true });
fs.writeFileSync(path.join(root, 'scripts/reviewed-updates/2027-batch-02.sql'), sql);
console.log('Prepared two-school SQL update; no remote writes performed.');
