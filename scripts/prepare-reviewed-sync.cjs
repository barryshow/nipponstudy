// Offline SQL artifact only. No database connection or writes occur here.
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
function data(file) {
  const code = ts.transpileModule(fs.readFileSync(path.join(root, file), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('exports', 'module', code)(m.exports, m);
  return m.exports;
}
const unis = data('data/schools/universities.ts').nationalUniversities;
const isi = data('data/schools/language-schools.ts').languageSchools.find(s => s.id === 'isi');
const quote = value => "'" + String(value).replaceAll("'", "''") + "'";
const json = value => quote(JSON.stringify(value)) + '::jsonb';
const tokyo = unis.find(s => s.id === 'utokyo');
const kyoto = unis.find(s => s.id === 'kyoto-u');
const tohoku = unis.find(s => s.id === 'tohoku');
const sql = `-- Reviewed batch 1 for 2027. NOT EXECUTED: configured Supabase host is unavailable.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- Run only against the existing project after reviewing and backing up these four rows.
-- No INSERT, DELETE, public import endpoint, or contact/assessment changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "University" WHERE slug IN ('utokyo','kyoto-u','tohoku')) <> 3
     OR (SELECT count(*) FROM "LanguageSchool" WHERE slug = 'isi') <> 1 THEN
    RAISE EXCEPTION 'Expected school records are missing; no updates applied';
  END IF;
END $$;
UPDATE "University" SET tuition = ${quote(tokyo.tuition)}, "sguNote" = ${quote(tokyo.sguNote)},
  "researchStudent" = ${quote(tokyo.researchStudent)},
  "programsJson" = COALESCE((SELECT jsonb_agg(p) FROM jsonb_array_elements("programsJson") p WHERE p->>'name' NOT LIKE 'PEAK%'), '[]'::jsonb)
WHERE slug = 'utokyo';
UPDATE "University" SET tuition = ${quote(tohoku.tuition)} WHERE slug = 'tohoku';
UPDATE "University" SET
  "programsJson" = (SELECT jsonb_agg(CASE WHEN p->>'name' = 'iUP国际本科项目' THEN ${json(kyoto.programs.find(p => p.name === 'iUP国际本科项目'))} ELSE p END) FROM jsonb_array_elements("programsJson") p),
  highlights = ${quote(kyoto.highlights)}, "featuresJson" = ${json(kyoto.features)}, "examFormat" = ${quote(kyoto.examFormat)}
WHERE slug = 'kyoto-u';
UPDATE "LanguageSchool" SET tuition = ${quote(isi.tuition)}, location = ${quote(isi.location)},
  "tuitionBreakdownJson" = ${json(isi.tuitionBreakdown)}, "programsJson" = ${json(isi.programs)},
  highlights = ${quote(isi.highlights)}, website = ${quote(isi.website)}
WHERE slug = 'isi';
COMMIT;
`;
fs.mkdirSync(path.join(root, 'scripts/reviewed-updates'), { recursive: true });
fs.writeFileSync(path.join(root, 'scripts/reviewed-updates/2027-batch-01.sql'), sql);
console.log('Prepared four-school SQL update; no remote writes performed.');
