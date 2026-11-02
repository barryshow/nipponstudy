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

// Twenty legacy candidates were reviewed. Nine with no defensible official identity
// were removed locally and are intentionally absent here. Only verified entities insert.
const ids = [
  'yokohama-design', 'kyoto-genki', 'osaka-ecc', 'nagoya-international',
  'nagoya-jls', 'shizuoka-slis', 'fukuoka-jls', 'fukuoka-gaigo',
  'kumamoto-gaigo', 'nagano-jls', 'nishinihon',
];
const schools = ids.map((id) => loadedModule.exports.languageSchools.find((school) => school.id === id));
if (schools.some((school) => !school)) throw new Error('Reviewed batch 13 schools are missing from local data.');

const quote = (value) => "'" + String(value).replaceAll("'", "''") + "'";
const json = (value) => quote(JSON.stringify(value)) + '::jsonb';
const insert = (school) => `
INSERT INTO "LanguageSchool" (slug, name, "nameJa", location, tuition, "paymentTerm", "attendanceRequirement", duration, "visaRequirement", "minimumStudyForVocational", intake, highlights, website, "featuresJson", "programsJson", "tuitionBreakdownJson", "suitableForJson") VALUES (
  ${quote(school.id)}, ${quote(school.name)}, ${quote(school.nameJa)}, ${quote(school.location)}, ${quote(school.tuition)}, ${quote(school.paymentTerm)}, ${quote(school.attendanceRequirement)}, ${quote(school.duration)}, ${quote(school.visaRequirement)}, ${quote(school.minimumStudyForVocational)}, ${quote(school.intake)}, ${quote(school.highlights)}, ${quote(school.website || '')}, ${json(school.features)}, ${json(school.programs)}, ${json(school.tuitionBreakdown)}, ${json(school.suitableFor)}
);`;

const targets = ids.map(quote).join(', ');
const sql = `-- Reviewed batch 13 for 2027 (language schools). Applied to the configured Supabase project on 2026-11-03.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- Twenty legacy candidates were examined. This transaction includes only eleven verified entities.
-- Controlled sync: explicit inserts for records verified absent remotely; no DELETE, bulk import, or schema changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "LanguageSchool" WHERE slug IN (${targets})) <> 0 THEN
    RAISE EXCEPTION 'One or more reviewed records already exist; no inserts applied';
  END IF;
END $$;${schools.map(insert).join('')}
COMMIT;
`;

fs.mkdirSync(path.join(root, 'scripts/reviewed-updates'), { recursive: true });
fs.writeFileSync(path.join(root, 'scripts/reviewed-updates/2027-batch-13.sql'), sql);
console.log('Prepared eleven-insert SQL sync for the verified portion of batch 13; no remote writes performed.');
