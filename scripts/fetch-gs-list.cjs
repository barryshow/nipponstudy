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
    // 东京大学 - 全研究科一覧
    ['UTokyo-gs', 'https://www.u-tokyo.ac.jp/ja/academics/grad_schools.html'],
    ['UTokyo-en', 'https://www.u-tokyo.ac.jp/en/academics/grad_schools.html'],
    // 京都大学
    ['Kyoto-gs', 'https://www.kyoto-u.ac.jp/ja/education-campus/graduate_schools/'],
    ['Kyoto-en', 'https://www.kyoto-u.ac.jp/en/education/graduate_schools/'],
    // 东北大学
    ['Tohoku-gs', 'https://www.tohoku.ac.jp/en/academics/graduate_schools/'],
    ['Tohoku-jp', 'https://www.tohoku.ac.jp/japanese/academics/grad/'],
    // 早稻田大学
    ['Waseda-gs', 'https://www.waseda.jp/top/en/academics/graduate-schools'],
    ['Waseda-jp', 'https://www.waseda.jp/top/academics/graduate-schools'],
    // 庆应义塾大学
    ['Keio-gs', 'https://www.keio.ac.jp/en/academics/graduate/'],
    ['Keio-jp', 'https://www.keio.ac.jp/ja/academics/graduate/'],
  ];

  for (const [name, url] of targets) {
    console.log('\n===== ' + name + ': ' + url + ' =====');
    try {
      const r = await fetchUrl(url);
      console.log('Status:', r.status, 'Size:', r.html.length);
      const plain = r.html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, '\n').replace(/\n{3,}/g, '\n');
      const lines = plain.split('\n').map(l => l.replace(/\s+/g, ' ').trim()).filter(l => l.length > 0 && l.length < 100);

      // 研究科名 or 専攻名
      const gs = lines.filter(l => /(研究科|学府|Graduate School of [A-Z])/.test(l) && !/^(学部|学科|大学院)/.test(l) && l.length < 80);
      gs.slice(0, 40).forEach(l => console.log('  GS:', l));

      if (gs.length === 0) {
        const hints = lines.filter(l => /(研究科|Graduate|School of|Faculty|専攻)/.test(l) && l.length < 80);
        hints.slice(0, 20).forEach(l => console.log('  ?', l));
      }
    } catch(e) { console.log('  ERROR:', e.message); }
  }
}
main().catch(e => console.error(e));