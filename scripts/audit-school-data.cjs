const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
function readTs(file) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('exports', 'module', code)(m.exports, m);
  return m.exports;
}
const university = readTs('data/schools/universities.ts');
const language = readTs('data/schools/language-schools.ts').languageSchools;
const vocational = readTs('data/schools/vocational-schools.ts').vocationalSchools;
const universities = [...university.nationalUniversities, ...university.publicUniversities, ...university.privateUniversities];
const reviews = readTs('data/school-reviews.ts').schoolReviews;
const groups = { university: universities, language, vocational };
const inventory = Object.entries(groups).flatMap(([category, rows]) => {
  assert.equal(new Set(rows.map(r => r.id)).size, rows.length, `${category}: duplicate identifiers`);
  return rows.map(row => ({
    category, id: row.id, name: row.name, targetIntake: 2027,
    status: reviews[row.id] ? 'partially-reviewed' : 'pending',
    review: reviews[row.id] || null,
    remaining: ['专业及研究科设置（除已注明项目）', '2027招生条件与截止日期（除已注明项目）', '学费及适用对象（除已注明项目）'],
  }));
});
const tokyo = universities.find(u => u.id === 'utokyo');
assert.match(tokyo.tuition, /642,960/);
assert.match(tokyo.tuition, /535,800/);
assert(!tokyo.programs.some(p => /PEAK/.test(p.name)), 'Closed PEAK must not be an active course');
assert.match(tokyo.sguNote, /2027/);
assert.match(universities.find(u => u.id === 'tohoku').tuition, /900,000/);
assert(!universities.find(u => u.id === 'kyoto-u').highlights.includes('全英文'));
const isi = language.find(s => s.id === 'isi');
assert.match(isi.tuitionBreakdown.totalFirstYear, /101.5.*111.5/);
// Verify official campus totals include application, admission, tuition, materials, facilities.
assert.equal(40000 + 100000 + 720000 + 55000 + 100000, 1015000);
assert.equal(40000 + 100000 + 750000 + 55000 + 170000, 1115000);
for (const review of Object.values(reviews)) {
  assert(review.sources.length > 0);
  for (const source of review.sources) assert.equal(new URL(source.url).protocol, 'https:');
}
if (process.argv.includes('--write')) {
  fs.mkdirSync(path.join(root, 'docs'), { recursive: true });
  fs.writeFileSync(path.join(root, 'docs/school-review-2027.json'), JSON.stringify({ targetIntake: 2027, records: inventory }, null, 2) + '\n');
}
console.log(`Validated ${inventory.length} records; ${Object.keys(reviews).length} partially reviewed; ${inventory.length - Object.keys(reviews).length} awaiting review.`);
