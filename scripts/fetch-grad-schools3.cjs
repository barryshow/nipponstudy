const https = require('https');
function fetchUrl(url, redirects = 3) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', 'Accept-Language': 'ja,en;q=0.9' },
      rejectUnauthorized: false, timeout: 15000,
    }, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && redirects > 0)
        return fetchUrl(new URL(res.headers.location, url).href, redirects - 1).then(resolve).catch(reject);
      let d = ''; res.on('data', c => d += c);
      res.on('end', () => resolve({ status: res.statusCode, html: d }));
    });
    req.on('error', e => reject(e)); req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

async function main() {
  const targets = [
    // 北海道大学 ー alternative URLs
    ['Hokudai-en-gr', 'https://www.global.hokudai.ac.jp/admissions/graduate-admissions/'],
    ['Hokudai-gr2', 'https://www.hokudai.ac.jp/en/undergraduate-and-graduate/graduate/'],
    ['Hokudai-JP', 'https://www.hokudai.ac.jp/education/graduate/'],
    ['Hokudai-sch', 'https://www.hokudai.ac.jp/en/education/schools/'],
    // 九州大学 ー try English page
    ['KyushuU-en2', 'https://www.kyushu-u.ac.jp/en/education/graduate/'],
    ['KyushuU-JP', 'https://www.kyushu-u.ac.jp/education/graduate/'],
    // 広島大学
    ['Hiroshima-JP', 'https://www.hiroshima-u.ac.jp/ja/education/graduate'],
    ['Hiroshima-adm', 'https://www.hiroshima-u.ac.jp/en/admissions/graduate'],
    ['Hiroshima-org2', 'https://www.hiroshima-u.ac.jp/en/about/organizations'],
    // 名古屋大学 — detailed info with Japanese page
    ['Nagoya-JP', 'https://www.nagoya-u.ac.jp/academics/graduate/'],
    // 东京科学大学
    ['SciTokyo-gr', 'https://www.isct.ac.jp/en/education/graduate/'],
    ['SciTokyo-JP-gr', 'https://www.isct.ac.jp/ja/education/graduate/'],
    // 东北大学
    ['Tohoku-org', 'https://www.tohoku.ac.jp/en/about/organization/'],
    ['Tohoku-gr2', 'https://www.tohoku.ac.jp/en/education/graduate/'],
  ];

  for (const [name, url] of targets) {
    console.log('\n--- ' + name + ': ' + url + ' ---');
    try {
      const r = await fetchUrl(url);
      console.log('Status:', r.status, 'Size:', r.html.length);
      const plain = r.html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, '\n').replace(/\n{3,}/g, '\n');
      const lines = plain.split('\n').map(l => l.replace(/\s+/g, ' ').trim()).filter(l => l.length > 0 && l.length < 150);
      const hits = lines.filter(l => /(研究科|Graduate School of|学府|大学院|学院|School of [A-Z][a-z]+)/.test(l));
      hits.slice(0, 30).forEach(l => console.log('  ', l));
      if (hits.length === 0) {
        const hints = lines.filter(l => /(Graduate|School|Faculty|研究科|学部|Department)/.test(l));
        hints.slice(0, 10).forEach(l => console.log('  ?', l.substring(0, 120)));
      }
    } catch(e) { console.log('  ERROR:', e.message); }
  }
}
main().catch(e => console.error(e));