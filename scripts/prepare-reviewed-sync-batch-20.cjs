// 第二十批：生成最后4条专门学校更新与1条错误聚合记录删除的受控事务SQL。
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
function loadTs(file) {
  const absolute = path.join(root, file);
  const code = ts.transpileModule(fs.readFileSync(absolute, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  const localRequire = (request) => request.startsWith('.') ? loadTs(path.relative(root, path.resolve(path.dirname(absolute), request.endsWith('.ts') ? request : `${request}.ts`))) : require(request);
  new Function('exports', 'module', 'require', code)(m.exports, m, localRequire);
  return m.exports;
}
const updateIds = ['tokyo-seika', 'nippon-photo', 'chuo-kogyo', 'tokyo-hoiku'];
const removeIds = ['sundai'];
const schools = loadTs('data/schools/vocational-schools.ts').vocationalSchools;
const byId = new Map(schools.map((school) => [school.id, school]));
const missing = updateIds.filter((id) => !byId.has(id));
if (missing.length) throw new Error(`本批保留记录缺失：${missing.join(', ')}`);
const quote = (value) => "'" + String(value).replaceAll("'", "''") + "'";
const json = (value) => `${quote(JSON.stringify(value))}::jsonb`;
const columns = ['name', 'nameJa', 'category', 'location', 'tuition', 'totalTwoYears', 'highlights', 'employmentRate', 'employmentRateDetail', 'paymentTerm', 'degreeAwarded', 'attendanceRequirement', 'featuresJson', 'programsJson', 'tuitionBreakdownJson', 'suitableForJson', 'scholarshipsJson'];
const jsonColumns = new Set(['featuresJson', 'programsJson', 'tuitionBreakdownJson', 'suitableForJson', 'scholarshipsJson']);
const row = (s) => ({ name:s.name, nameJa:s.nameJa, category:s.category, location:s.location, tuition:s.tuition, totalTwoYears:s.totalTwoYears, highlights:s.highlights, employmentRate:s.employmentRate ?? null, employmentRateDetail:s.employmentRateDetail, paymentTerm:s.paymentTerm, degreeAwarded:s.degreeAwarded, attendanceRequirement:s.attendanceRequirement, featuresJson:s.features, programsJson:s.programs, tuitionBreakdownJson:s.tuitionBreakdown, suitableForJson:s.suitableFor, scholarshipsJson:s.scholarships });
const upserts = updateIds.map((id) => {
  const values = row(byId.get(id));
  const sqlValues = columns.map((column) => values[column] === null ? 'NULL' : jsonColumns.has(column) ? json(values[column]) : quote(values[column]));
  const updates = columns.filter((column) => column !== 'name').map((column) => `"${column}" = EXCLUDED."${column}"`);
  return `INSERT INTO "VocationalSchool" (slug, ${columns.map((column) => `"${column}"`).join(', ')}) VALUES (${quote(id)}, ${sqlValues.join(', ')}) ON CONFLICT (slug) DO UPDATE SET ${updates.join(', ')};`;
});
const allIds = [...updateIds, ...removeIds];
const sql = `-- 2027资料核对第二十批：最后5条旧候选（保留更新4条、移除错误聚合记录1条）。
-- APPLIED 2026-11-18：4条更新与1条精确删除经服务角色REST应用并逐字段回查。
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "VocationalSchool" WHERE slug IN (${allIds.map(quote).join(', ')})) <> ${allIds.length} THEN
    RAISE EXCEPTION '第二十批目标记录不完整，事务已中止';
  END IF;
END $$;
${upserts.join('\n')}
DELETE FROM "VocationalSchool" WHERE slug IN (${removeIds.map(quote).join(', ')});
COMMIT;
`;
fs.writeFileSync(path.join(root, 'scripts/reviewed-updates/2027-batch-20.sql'), sql);
console.log(`已生成第二十批SQL：更新${updateIds.length}条，删除${removeIds.length}条。`);
