// 第十八批：把专门学校的核对结果写入 Supabase（仅 VocationalSchool 表）。
//
// 逐条按 slug 读取远端记录，只 PATCH 与本地不一致的字段，写入后逐字段回读；
// 重复运行安全，出错立即中止。
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');

const readEnv = (file) => {
  const text = fs.readFileSync(path.join(root, file), 'utf8');
  return Object.fromEntries(
    text.split(/\r?\n/)
      .filter((line) => /^[A-Z_]+=/.test(line))
      .map((line) => {
        const i = line.indexOf('=');
        return [line.slice(0, i), line.slice(i + 1).trim().replace(/^["']|["']$/g, '')];
      }),
  );
};

const loadTs = (file) => {
  const code = ts.transpileModule(fs.readFileSync(path.join(root, file), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const m = { exports: {} };
  new Function('exports', 'module', code)(m.exports, m);
  return m.exports;
};

const env = readEnv('.env.local');
const url = env.NEXT_PUBLIC_SUPABASE_URL;
const key = env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) throw new Error('Supabase URL or secret key missing from .env.local');
const baseHeaders = { apikey: key, Authorization: `Bearer ${key}` };

const canonical = (v) => {
  if (Array.isArray(v)) return v.map(canonical);
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.keys(v).sort().map((k) => [k, canonical(v[k])]));
  }
  return v;
};
const isBlank = (v) => v === null || v === undefined || v === '';
const deepEq = (a, b) => {
  if (isBlank(a) && isBlank(b)) return true;
  return JSON.stringify(canonical(a ?? null)) === JSON.stringify(canonical(b ?? null));
};

const TABLE = 'VocationalSchool';
// 第十八批：2026-11-05 核对的专门学校。
const TARGETS = ['jec', 'nihonkogakuin', 'kobe-denshi', 'bunka-fashion'];

const localRows = () => loadTs('data/schools/vocational-schools.ts').vocationalSchools;

const map = (s) => ({
  slug: s.id, name: s.name, nameJa: s.nameJa, category: s.category, location: s.location,
  tuition: s.tuition, totalTwoYears: s.totalTwoYears, highlights: s.highlights,
  employmentRate: s.employmentRate ?? null, employmentRateDetail: s.employmentRateDetail,
  paymentTerm: s.paymentTerm, degreeAwarded: s.degreeAwarded,
  attendanceRequirement: s.attendanceRequirement, website: s.website || null,
  featuresJson: s.features, programsJson: s.programs,
  tuitionBreakdownJson: s.tuitionBreakdown, suitableForJson: s.suitableFor,
  scholarshipsJson: s.scholarships,
});

const fetchRemote = async (slug) => {
  const res = await fetch(`${url}/rest/v1/${TABLE}?select=*&slug=eq.${encodeURIComponent(slug)}`, {
    headers: baseHeaders,
  });
  if (!res.ok) throw new Error(`读取失败 ${slug}: ${res.status} ${await res.text()}`);
  const rows = await res.json();
  if (rows.length !== 1) throw new Error(`${TABLE}/${slug}: 期望 1 条记录，实际 ${rows.length} 条`);
  return rows[0];
};

const patch = async (slug, delta) => {
  const res = await fetch(`${url}/rest/v1/${TABLE}?slug=eq.${encodeURIComponent(slug)}`, {
    method: 'PATCH',
    headers: { ...baseHeaders, 'Content-Type': 'application/json', Prefer: 'return=representation' },
    body: JSON.stringify(delta),
  });
  if (!res.ok) throw new Error(`写入失败 ${slug}: ${res.status} ${await res.text()}`);
  const rows = await res.json();
  if (rows.length !== 1) throw new Error(`${slug} 被修改 ${rows.length} 条记录，期望 1 条`);
  return rows[0];
};

const verify = async (local) => {
  const remote = await fetchRemote(local.slug);
  const mismatched = Object.keys(local).filter((k) => !deepEq(local[k], remote[k]));
  if (mismatched.length) throw new Error(`回读校验失败 ${local.slug}: ${mismatched.join(', ')}`);
};

(async () => {
  const byId = new Map(localRows().map((s) => [s.id, map(s)]));
  const report = [];
  for (const slug of TARGETS) {
    const local = byId.get(slug);
    if (!local) throw new Error(`本地数据缺少 ${slug}`);
    const remote = await fetchRemote(slug);
    const delta = Object.fromEntries(
      Object.keys(local).filter((k) => !deepEq(local[k], remote[k])).map((k) => [k, local[k]]),
    );
    if (!Object.keys(delta).length) {
      report.push({ slug, action: 'unchanged', fields: 0 });
      continue;
    }
    await patch(slug, delta);
    await verify(local);
    report.push({ slug, action: 'updated', fields: Object.keys(delta).length, changed: Object.keys(delta) });
  }
  for (const line of report) console.log(JSON.stringify(line));
  const counts = report.reduce((acc, r) => ({ ...acc, [r.action]: (acc[r.action] || 0) + 1 }), {});
  console.log('SUMMARY', JSON.stringify(counts));
})().catch((error) => {
  console.error('FAILED:', error.message);
  process.exit(1);
});
