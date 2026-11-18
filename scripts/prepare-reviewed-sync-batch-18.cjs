// 仅生成离线 SQL 工件，不连接数据库、不写入任何远端数据。
//
// 第十八批核对专门学校（2026-11-05）。远端在
// scripts/apply-reviewed-sync-batch-18.cjs 中通过 Supabase REST 按 slug 差异写入并逐字段回读。
// 本脚本保留等价的可审计 SQL：按 slug upsert，不含 DELETE。
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');

const loadTs = (file) => {
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
};

const quote = (value) => "'" + String(value).replaceAll("'", "''") + "'";
const json = (value) => quote(JSON.stringify(value)) + '::jsonb';

const ids = ['jec', 'nihonkogakuin', 'kobe-denshi', 'bunka-fashion'];

const all = loadTs('data/schools/vocational-schools.ts').vocationalSchools;
const byId = new Map(all.map((s) => [s.id, s]));
const missing = ids.filter((id) => !byId.has(id));
if (missing.length) throw new Error(`本批学校在本地数据中缺失：${missing.join(', ')}`);

const values = (s) => ({
  name: s.name, nameJa: s.nameJa, category: s.category, location: s.location,
  tuition: s.tuition, totalTwoYears: s.totalTwoYears, highlights: s.highlights,
  employmentRate: s.employmentRate ?? null, employmentRateDetail: s.employmentRateDetail,
  paymentTerm: s.paymentTerm, degreeAwarded: s.degreeAwarded,
  attendanceRequirement: s.attendanceRequirement,
  featuresJson: s.features, programsJson: s.programs,
  tuitionBreakdownJson: s.tuitionBreakdown, suitableForJson: s.suitableFor,
  scholarshipsJson: s.scholarships,
});
const jsonColumns = ['featuresJson', 'programsJson', 'tuitionBreakdownJson', 'suitableForJson', 'scholarshipsJson'];

const upserts = ids.map((id) => {
  const row = values(byId.get(id));
  const columns = Object.keys(row);
  const vals = columns.map((key) => {
    if (jsonColumns.includes(key)) return json(row[key]);
    return row[key] === null ? 'NULL' : quote(row[key]);
  });
  const updates = columns.filter((key) => key !== 'name').map((key) => `"${key}" = EXCLUDED."${key}"`);
  return `
INSERT INTO "VocationalSchool" (slug, ${columns.map((c) => `"${c}"`).join(', ')}) VALUES (
  ${quote(id)}, ${vals.join(', ')}
) ON CONFLICT (slug) DO UPDATE SET ${updates.join(', ')};`;
});

const slugList = ids.map(quote).join(', ');
const sql = `-- 2027 资料核对第十八批（专门学校 ${ids.length} 所）。
-- APPLIED 2026-11-18：经 Supabase SQL 事务应用并回查。
-- 保留为等价的可审计 SQL 工件；下方校验在任一 slug 缺失时中止。
-- 来源与限制见 docs/REDESIGN-AND-DATA.md 与 data/school-reviews.ts。
-- 受控同步：仅 ${ids.length} 条 VocationalSchool 记录按 slug upsert；无 DELETE、无批量导入、无表结构变更。
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "VocationalSchool" WHERE slug IN (${slugList})) <> ${ids.length} THEN
    RAISE EXCEPTION '本批目标学校记录缺失，已中止，未应用任何更新';
  END IF;
END $$;${upserts.join('')}
COMMIT;
`;

fs.mkdirSync(path.join(root, 'scripts/reviewed-updates'), { recursive: true });
fs.writeFileSync(path.join(root, 'scripts/reviewed-updates/2027-batch-18.sql'), sql);
console.log(`已生成第十八批 SQL 工件（${ids.length} 条专门学校记录）；远端写入由 apply-reviewed-sync-batch-18.cjs 完成。`);
