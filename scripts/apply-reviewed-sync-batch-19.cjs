// 第十九批远端同步：先按slug幂等更新13条，再精确删除7条失真候选，最后全量回查目标集合。
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');

const env = Object.fromEntries(fs.readFileSync(path.join(root, '.env.local'), 'utf8').split(/\r?\n/)
  .filter((line) => /^[A-Z_]+=/.test(line)).map((line) => {
    const i = line.indexOf('=');
    return [line.slice(0, i), line.slice(i + 1).trim().replace(/^["']|["']$/g, '')];
  }));
const url = env.NEXT_PUBLIC_SUPABASE_URL;
const key = env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) throw new Error('Supabase URL or secret key missing');
const headers = { apikey: key, Authorization: `Bearer ${key}` };

function loadTs(file) {
  const absolute = path.join(root, file);
  const code = ts.transpileModule(fs.readFileSync(absolute, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  const localRequire = (request) => request.startsWith('.')
    ? loadTs(path.relative(root, path.resolve(path.dirname(absolute), request.endsWith('.ts') ? request : `${request}.ts`)))
    : require(request);
  new Function('exports', 'module', 'require', code)(m.exports, m, localRequire);
  return m.exports;
}

const keep = ['mode', 'tsuji', 'yamano-beauty', 'hollywood-beauty', 'tokyo-auto', 'esp-music', 'tokyo-tourism', 'tokyo-animal', 'tokyo-design', 'fca', 'ecc', 'seifu', 'yomiuri'];
const remove = ['digital-hollywood', 'tokyo-anime', 'yoyogi-anime', 'vantan-game', 'human-academy', 'ohara', 'aso'];
const local = new Map(loadTs('data/schools/vocational-schools.ts').vocationalSchools.map((s) => [s.id, {
  slug: s.id, name: s.name, nameJa: s.nameJa, category: s.category, location: s.location,
  tuition: s.tuition, totalTwoYears: s.totalTwoYears, highlights: s.highlights,
  employmentRate: s.employmentRate ?? null, employmentRateDetail: s.employmentRateDetail,
  paymentTerm: s.paymentTerm, degreeAwarded: s.degreeAwarded, attendanceRequirement: s.attendanceRequirement,
  featuresJson: s.features, programsJson: s.programs, tuitionBreakdownJson: s.tuitionBreakdown,
  suitableForJson: s.suitableFor, scholarshipsJson: s.scholarships,
}]));
const canonical = (value) => Array.isArray(value) ? value.map(canonical) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonical(value[key])])) : value;
const equal = (a, b) => JSON.stringify(canonical(a ?? null)) === JSON.stringify(canonical(b ?? null));

async function rows(slugs) {
  const list = `(${slugs.map((slug) => `"${slug}"`).join(',')})`;
  const response = await fetch(`${url}/rest/v1/VocationalSchool?select=*&slug=in.${encodeURIComponent(list)}`, { headers });
  if (!response.ok) throw new Error(`读取失败: ${response.status} ${await response.text()}`);
  return response.json();
}
async function patch(slug, body) {
  const response = await fetch(`${url}/rest/v1/VocationalSchool?slug=eq.${encodeURIComponent(slug)}`, {
    method: 'PATCH', headers: { ...headers, 'Content-Type': 'application/json', Prefer: 'return=representation' }, body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error(`更新${slug}失败: ${response.status} ${await response.text()}`);
  const changed = await response.json();
  if (changed.length !== 1) throw new Error(`更新${slug}影响${changed.length}条`);
}

(async () => {
  const before = await rows([...keep, ...remove]);
  if (before.length !== 20) throw new Error(`前置校验失败：期望20条，实际${before.length}条`);
  const remote = new Map(before.map((row) => [row.slug, row]));
  for (const slug of keep) {
    const expected = local.get(slug);
    if (!expected) throw new Error(`本地缺少${slug}`);
    const delta = Object.fromEntries(Object.entries(expected).filter(([key, value]) => !equal(value, remote.get(slug)[key])));
    if (Object.keys(delta).length) await patch(slug, delta);
  }
  const deletion = await fetch(`${url}/rest/v1/VocationalSchool?slug=in.${encodeURIComponent(`(${remove.map((slug) => `"${slug}"`).join(',')})`)}`, {
    method: 'DELETE', headers: { ...headers, Prefer: 'return=representation' },
  });
  if (!deletion.ok) throw new Error(`删除失败: ${deletion.status} ${await deletion.text()}`);
  const deleted = await deletion.json();
  if (deleted.length !== remove.length) throw new Error(`删除数量异常：期望${remove.length}，实际${deleted.length}`);
  const kept = await rows(keep);
  const leftovers = await rows(remove);
  if (kept.length !== keep.length || leftovers.length !== 0) throw new Error(`回查失败：保留${kept.length}，残留${leftovers.length}`);
  for (const row of kept) {
    const expected = local.get(row.slug);
    const mismatch = Object.keys(expected).filter((key) => !equal(expected[key], row[key]));
    if (mismatch.length) throw new Error(`${row.slug}回查不一致: ${mismatch.join(',')}`);
  }
  console.log(JSON.stringify({ updatedAndVerified: keep.length, deletedAndVerified: deleted.length }));
})().catch((error) => { console.error(`FAILED: ${error.message}`); process.exit(1); });
