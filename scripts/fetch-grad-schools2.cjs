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
  // Better URLs for each university
  const targets = [
    // 名古屋大学 - departments list
    ['Nagoya-dept', 'https://www.nagoya-u.ac.jp/about-nu/academic-programs/'],
    ['Nagoya-grad', 'https://www.nagoya-u.ac.jp/en/academics/graduate/'],
    // 北海道大学 - correct URLs
    ['Hokudai-org', 'https://www.hokudai.ac.jp/organization/'],
    ['Hokudai-gr', 'https://www.hokudai.ac.jp/en/education/graduate/'],
    ['Hokudai-lst', 'https://www.hokudai.ac.jp/faculty/graduate/'],
    // 九州大学 - correct URLs
    ['Kyushu-grad', 'https://www.kyushu-u.ac.jp/ja/education/graduate/graduate/'],
    ['Kyushu-org', 'https://www.kyushu-u.ac.jp/ja/university/info/org/'],
    ['Kyushu-fac', 'https://www.kyushu-u.ac.jp/en/education/faculties/'],
    // 筑波大学
    ['Tsukuba-grad', 'https://www.tsukuba.ac.jp/en/academics/graduate/'],
    ['Tsukuba-org', 'https://www.tsukuba.ac.jp/en/about/organization/'],
    // 広島大学
    ['Hiroshima-org', 'https://www.hiroshima-u.ac.jp/en/about/organization'],
    ['Hiroshima-gr', 'https://www.hiroshima-u.ac.jp/en/education/graduate'],
    // 东京科学大学
    ['SciTokyo-org', 'https://www.isct.ac.jp/en/about/organization'],
    ['SciTokyo-dept', 'https://www.isct.ac.jp/en/academics/departments'],
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
      const hits = lines.filter(l => /(研究科|Graduate School of|学府|大学院研究科|学院|専攻)/.test(l));
      hits.slice(0, 30).forEach(l => console.log('  ', l));
      if (hits.length === 0) {
        const hints = lines.filter(l => /(School of|Graduate|Faculty|教育|研究)/.test(l));
        hints.slice(0, 10).forEach(l => console.log('  ?', l.substring(0, 120)));
      }
    } catch(e) { console.log('  ERROR:', e.message); }
  }
}
main().catch(e => console.error(e));