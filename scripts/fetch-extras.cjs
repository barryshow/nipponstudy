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
    // 北海道大学 — try faculty pages directly
    ['Hokudai-li', 'https://www.global.hokudai.ac.jp/admissions/graduate-admissions/graduate-school-websites/'],
    ['Hokudai-sitemap', 'https://www.global.hokudai.ac.jp/sitemap/'],
    ['Hokudai-ff', 'https://www.hokudai.ac.jp/faculty/graduate_schools/'],
    // 九州大学 — URLs are returning 200 with content, but detecting Shift-JIS
    ['Kyushu-enc', 'https://www.kyushu-u.ac.jp/ja/university/info/'],
    ['Kyushu-adms', 'https://www.kyushu-u.ac.jp/admissions/graduate/'],
    // 広島大学 — try Japanese encoding
    ['Hiroshi-find', 'https://www.hiroshima-u.ac.jp/find/graduate/'],
    ['Hiroshi-org', 'https://www.hiroshima-u.ac.jp/organization/'],
    // 东北大学 (have partial data, need supplement)
    ['Tohoku-list', 'https://www.tohoku.ac.jp/en/prospective_students/graduate_schools.html'],
    ['Tohoku-staff', 'https://www.tohoku.ac.jp/en/research/staff.html'],
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
        const hints = lines.filter(l => /(Graduate|School of|Faculty|研究科|学府|Department|education|academic)/i.test(l));
        hints.slice(0, 15).forEach(l => console.log('  ?', l.substring(0, 120)));
      }
    } catch(e) { console.log('  ERROR:', e.message); }
  }
}
main().catch(e => console.error(e));