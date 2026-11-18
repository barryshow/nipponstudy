// 第十九批：生成13条专门学校更新与7条失真候选删除的受控事务SQL。
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');

function loadTs(file) {
  const absolute = path.join(root, file);
  const code = ts.transpileModule(fs.readFileSync(absolute, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const m = { exports: {} };
  const localRequire = (request) => {
    if (!request.startsWith('.')) return require(request);
    const target = path.resolve(path.dirname(absolute), request.endsWith('.ts') ? request : `${request}.ts`);
    return loadTs(path.relative(root, target));
  };
  new Function('exports', 'module', 'require', code)(m.exports, m, localRequire);
  return m.exports;
}

const updateIds = ['mode', 'tsuji', 'yamano-beauty', 'hollywood-beauty', 'tokyo-auto', 'esp-music', 'tokyo-tourism', 'tokyo-animal', 'tokyo-design', 'fca', 'ecc', 'seifu', 'yomiuri'];
const removeIds = ['digital-hollywood', 'tokyo-anime', 'yoyogi-anime', 'vantan-game', 'human-academy', 'ohara', 'aso'];
const schools = loadTs('data/schools/vocational-schools.ts').vocationalSchools;
const byId = new Map(schools.map((school) => [school.id, school]));
const missing = updateIds.filter((id) => !byId.has(id));
if (missing.length) throw new Error(`本批保留记录缺失：${missing.join(', ')}`);

const quote = (value) => "'" + String(value).replaceAll("'", "''") + "'";
const json = (value) => `${quote(JSON.stringify(value))}::jsonb`;
const columns = ['name', 'nameJa', 'category', 'location', 'tuition', 'totalTwoYears', 'highlights', 'employmentRate', 'employmentRateDetail', 'paymentTerm', 'degreeAwarded', 'attendanceRequirement', 'featuresJson', 'programsJson', 'tuitionBreakdownJson', 'suitableForJson', 'scholarshipsJson'];
const row = (school) => ({
  name: school.name, nameJa: school.nameJa, category: school.category, location: school.location,
  tuition: school.tuition, totalTwoYears: school.totalTwoYears, highlights: school.highlights,
  employmentRate: school.employmentRate ?? null, employmentRateDetail: school.employmentRateDetail,
  paymentTerm: school.paymentTerm, degreeAwarded: school.degreeAwarded,
  attendanceRequirement: school.attendanceRequirement,
  featuresJson: school.features, programsJson: school.programs,
  tuitionBreakdownJson: school.tuitionBreakdown, suitableForJson: school.suitableFor,
  scholarshipsJson: school.scholarships,
});
const jsonColumns = new Set(['featuresJson', 'programsJson', 'tuitionBreakdownJson', 'suitableForJson', 'scholarshipsJson']);
const upserts = updateIds.map((id) => {
  const values = row(byId.get(id));
  const sqlValues = columns.map((column) => values[column] === null ? 'NULL' : jsonColumns.has(column) ? json(values[column]) : quote(values[column]));
  const updates = columns.filter((column) => column !== 'name').map((column) => `"${column}" = EXCLUDED."${column}"`);
  return `INSERT INTO "VocationalSchool" (slug, ${columns.map((column) => `"${column}"`).join(', ')}) VALUES (${quote(id)}, ${sqlValues.join(', ')}) ON CONFLICT (slug) DO UPDATE SET ${updates.join(', ')};`;
});
const allIds = [...updateIds, ...removeIds];
const sql = `-- 2027资料核对第十九批：20条旧候选（保留更新13条、移除失真/错误归类7条）。
-- APPLIED 2026-11-18：13条更新经Supabase SQL应用，7条精确删除经服务角色REST应用并回查。
-- 删除目标仅限无法对应单一现行专门学校主体的明确slug；事务含目标记录数前置校验。
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "VocationalSchool" WHERE slug IN (${allIds.map(quote).join(', ')})) <> ${allIds.length} THEN
    RAISE EXCEPTION '第十九批目标记录不完整，事务已中止';
  END IF;
END $$;
${upserts.join('\n')}
DELETE FROM "VocationalSchool" WHERE slug IN (${removeIds.map(quote).join(', ')});
COMMIT;
`;
const output = path.join(root, 'scripts/reviewed-updates/2027-batch-19.sql');
fs.writeFileSync(output, sql);
console.log(`已生成第十九批SQL：更新${updateIds.length}条，删除${removeIds.length}条。`);
