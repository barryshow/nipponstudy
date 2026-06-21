const https = require('https');
function fetchUrl(url, redirects = 3) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', 'Accept-Language': 'ja,en;q=0.9' },
      rejectUnauthorized: false, timeout: 20000,
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
    // 北海道大学 — Global site
    ['Hokudai-sch', 'https://www.global.hokudai.ac.jp/about/schools-and-faculties/'],
    // 九州大学
    ['Kyushu-org', 'https://www.kyushu-u.ac.jp/en/university/information/organization_chart/'],
    ['Kyushu-about', 'https://www.kyushu-u.ac.jp/en/about/'],
    // 広島大学
    ['Hiroshima-g2', 'https://www.hiroshima-u.ac.jp/en/education/graduate_schools'],
    ['Hiroshima-ab', 'https://www.hiroshima-u.ac.jp/en/about/abouts'],
    // 东京科学大学
    ['SciTokyo-ab', 'https://www.isct.ac.jp/en/about/schools-and-graduate-schools'],
    ['SciTokyo-adm', 'https://www.isct.ac.jp/en/admissions/graduate/'],
    // 东北大学 — supplement
    ['Tohoku-ab', 'https://www.tohoku.ac.jp/en/about/faculties/'],
    ['Tohoku-gr', 'https://www.tohoku.ac.jp/en/education/graduate_schools/'],
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
      const hits = lines.filter(l => /(研究科|Graduate School of|学府|大学院研究科|学院|School of [A-Z][a-z]+|Faculty of [A-Z][a-z]+)/.test(l));
      hits.slice(0, 40).forEach(l => console.log('  ', l));
      if (hits.length === 0) {
        const hints = lines.filter(l => /(Graduate|School of|Faculty|研究科|学府|Department)/.test(l));
        hints.slice(0, 15).forEach(l => console.log('  ?', l.substring(0, 120)));
      }
    } catch(e) { console.log('  ERROR:', e.message); }
  }
}
main().catch(e => console.error(e));