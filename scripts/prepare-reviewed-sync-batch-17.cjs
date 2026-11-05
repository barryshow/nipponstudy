// 仅生成离线 SQL 工件，不连接数据库、不写入任何远端数据。
//
// 第十七批核对 19 所公立·私立大学（2026-11-05）。远端已在
// scripts/apply-reviewed-sync-batch-17.cjs 中通过 Supabase REST 按 slug 差异写入并逐字段回读。
// 本脚本保留等价的可审计 SQL：按 slug upsert，不含 DELETE。
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');

const loadTs = (file) => {
  const code = ts.transpileModule(fs.readFileSync(path.join(root, file), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const m = { exports: {} };
  new Function('exports', 'module', code)(m.exports, m);
  return m.exports;
};

const quote = (value) => "'" + String(value).replaceAll("'", "''") + "'";
const json = (value) => quote(JSON.stringify(value)) + '::jsonb';

const ids = [
  'omu', 'tmu', 'yokohama-city', 'nagoya-city', 'sapporo-medical', 'wakayama-medical',
  'hyogo', 'shizuoka-pu', 'toyama-pu', 'hama-med', 'shiga-medical', 'kansai', 'kwansei',
  'tokyo-medical', 'jikei', 'juntendo', 'nms', 'fujita', 'aichi-medical',
];

const u = loadTs('data/schools/universities.ts');
const all = [...u.nationalUniversities, ...u.publicUniversities, ...u.privateUniversities];
const byId = new Map(all.map((s) => [s.id, s]));
const missing = ids.filter((id) => !byId.has(id));
if (missing.length) throw new Error(`本批学校在本地数据中缺失：${missing.join(', ')}`);

const values = (s) => ({
  name: s.name, nameJa: s.nameJa, type: s.type, ranking: s.ranking, location: s.location,
  tuition: s.tuition, gpaRequirement: s.gpaRequirement,
  japaneseRequirement: s.japaneseRequirement, englishRequirement: s.englishRequirement,
  highlights: s.highlights, researchStudent: s.researchStudent, examFormat: s.examFormat,
  sguNote: s.sguNote ?? null, website: s.website || null,
  featuresJson: s.features, programsJson: s.programs, suitableForJson: s.suitableFor,
});
const jsonColumns = ['featuresJson', 'programsJson', 'suitableForJson'];

const upserts = ids.map((id) => {
  const row = values(byId.get(id));
  const columns = Object.keys(row);
  const vals = columns.map((key) => {
    if (jsonColumns.includes(key)) return json(row[key]);
    return row[key] === null ? 'NULL' : quote(row[key]);
  });
  const updates = columns.filter((key) => key !== 'name').map((key) => `"${key}" = EXCLUDED."${key}"`);
  return `
INSERT INTO "University" (slug, ${columns.map((c) => `"${c}"`).join(', ')}) VALUES (
  ${quote(id)}, ${vals.join(', ')}
) ON CONFLICT (slug) DO UPDATE SET ${updates.join(', ')};`;
});

const slugList = ids.map(quote).join(', ');
const sql = `-- 2027 资料核对第十七批（公立·私立大学 19 所）。
-- 已于 2026-11-05 通过 scripts/apply-reviewed-sync-batch-17.cjs 经 Supabase REST 应用。
-- 保留为等价的可审计 SQL 工件；下方校验在任一 slug 缺失时中止。
-- 来源与限制见 docs/REDESIGN-AND-DATA.md 与 data/school-reviews.ts。
-- 受控同步：仅 19 条 University 记录按 slug upsert；无 DELETE、无批量导入、无表结构变更。
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "University" WHERE slug IN (${slugList})) <> ${ids.length} THEN
    RAISE EXCEPTION '本批目标学校记录缺失，已中止，未应用任何更新';
  END IF;
END $$;${upserts.join('')}
COMMIT;
`;

fs.mkdirSync(path.join(root, 'scripts/reviewed-updates'), { recursive: true });
fs.writeFileSync(path.join(root, 'scripts/reviewed-updates/2027-batch-17.sql'), sql);
console.log('已生成第十七批 SQL 工件（19 条大学记录）；远端写入由 apply-reviewed-sync-batch-17.cjs 完成。');
