// Offline SQL artifact only. No database connection or writes occur here.
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const code = ts.transpileModule(
  fs.readFileSync(path.join(root, 'data/schools/language-schools.ts'), 'utf8'),
  { compilerOptions: { module: ts.ModuleKind.CommonJS } },
).outputText;
const loadedModule = { exports: {} };
new Function('exports', 'module', code)(loadedModule.exports, loadedModule);

// Batch 14 reviews the final ten legacy language-school candidates. Three had no
// defensible official identity and were removed locally:
//   sendai-ymca     — 仙台YMCA only operates a hotel vocational college, no Japanese school
//   matsuyama-jls   — 松山東雲学園 runs a university, junior college and schools, no Japanese school
//   takamatsu-jls   — 高松市 has 穴吹ビジネスカレッジ日本語学科, no 高松日本語学院
// The seven below are the verified entities that remain in local data.
const ids = [
  'sendai-jls', 'hokkaido-ir', 'hiroshima-jls', 'okayama-jls',
  'saitama-jls', 'tsukuba-jls', 'kawasaki-jls',
];
const schools = ids.map((id) => loadedModule.exports.languageSchools.find((school) => school.id === id));
if (schools.some((school) => !school)) throw new Error('Reviewed batch 14 schools are missing from local data.');

const quote = (value) => "'" + String(value).replaceAll("'", "''") + "'";
const json = (value) => quote(JSON.stringify(value)) + '::jsonb';
const insert = (school) => `
INSERT INTO "LanguageSchool" (slug, name, "nameJa", location, tuition, "paymentTerm", "attendanceRequirement", duration, "visaRequirement", "minimumStudyForVocational", intake, highlights, website, "featuresJson", "programsJson", "tuitionBreakdownJson", "suitableForJson") VALUES (
  ${quote(school.id)}, ${quote(school.name)}, ${quote(school.nameJa)}, ${quote(school.location)}, ${quote(school.tuition)}, ${quote(school.paymentTerm)}, ${quote(school.attendanceRequirement)}, ${quote(school.duration)}, ${quote(school.visaRequirement)}, ${quote(school.minimumStudyForVocational)}, ${quote(school.intake)}, ${quote(school.highlights)}, ${quote(school.website || '')}, ${json(school.features)}, ${json(school.programs)}, ${json(school.tuitionBreakdown)}, ${json(school.suitableFor)}
);`;

const targets = ids.map(quote).join(', ');
const sql = `-- Reviewed batch 14 for 2027 (language schools). Applied 2026-11-04 via scripts/apply-reviewed-sync-batch-14-rest.cjs.
-- Kept as the auditable SQL equivalent; do not run it against a project that already has these rows
-- (the guard below aborts if any target slug exists).
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- Ten legacy candidates were reviewed; three had no official entity and were removed locally.
-- Controlled sync: explicit inserts for the seven verified entities confirmed absent remotely
-- (remote LanguageSchool had 29 slugs, none of these seven) on 2026-11-04;
-- no DELETE, bulk import, or schema changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "LanguageSchool" WHERE slug IN (${targets})) <> 0 THEN
    RAISE EXCEPTION 'One or more reviewed records already exist; no inserts applied';
  END IF;
END $$;${schools.map(insert).join('')}
COMMIT;
`;

fs.mkdirSync(path.join(root, 'scripts/reviewed-updates'), { recursive: true });
fs.writeFileSync(path.join(root, 'scripts/reviewed-updates/2027-batch-14.sql'), sql);
console.log('Prepared SQL artifact for the verified portion of batch 14; remote application is done by apply-reviewed-sync-batch-14-rest.cjs.');