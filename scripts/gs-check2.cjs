const https = require('https');
function fetchUrl(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', 'Accept-Language': 'ja,en;q=0.9' },
      rejectUnauthorized: false, timeout: 20000,
    }, (res) => {
      let d = ''; res.on('data', c => d += c);
      res.on('end', () => resolve({ status: res.statusCode, html: d }));
    });
    req.on('error', e => reject(e)); req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

async function main() {
  const targets = [
    ['UTokyo-edu', 'https://www.u-tokyo.ac.jp/ja/education/graduate_schools.html'],
    ['Kyoto-edu2', 'https://www.kyoto-u.ac.jp/ja/education/graduate/'],
    ['Tohoku-en2', 'https://www.tohoku.ac.jp/en/education/graduate_schools.html'],
    ['Waseda-gs2', 'https://www.waseda.jp/top/en/academics/graduate-schools-2'],
    ['Keio-jp-gs', 'https://www.keio.ac.jp/ja/graduate/'],
  ];
  for (const [name, url] of targets) {
    console.log('\n===== ' + name + ': ' + url + ' =====');
    try {
      const r = await fetchUrl(url);
      console.log('Status:', r.status, 'Size:', r.html.length);
      const text = r.html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, '\n').replace(/\n{3,}/g, '\n');
      const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0 && l.length < 120);
      const hits = lines.filter(l => /研究科/.test(l) && !/^\d/.test(l) && !l.includes('index.html'));
      hits.slice(0, 30).forEach(l => console.log(' ', l));
      if (hits.length===0) {
        lines.filter(l => /(Graduate|Research|Faculty|School)/.test(l)).slice(0,15).forEach(l => console.log(' ?', l.substring(0,100)));
      }
    } catch(e) { console.log(' ERROR:', e.message); }
  }
}
main().catch(e => console.error(e));