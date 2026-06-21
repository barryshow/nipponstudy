const https = require('https');
function fetchUrl(url, redirects = 5) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const opts = new URL(url);
    (opts.protocol === 'https:' ? https : require('http')).get(opts.href, {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Accept-Language': 'ja,en;q=0.9' },
      rejectUnauthorized: false, timeout: 15000,
    }, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && redirects > 0) {
        return fetchUrl(new URL(res.headers.location, url).href, redirects - 1).then(resolve).catch(reject);
      }
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve({ status: res.statusCode, html: d }));
    }).on('error', e => reject(e)).on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function extract(text) {
  const clean = text.replace(/<[^>]+>/g, '\n').replace(/\n\s*\n/g, '\n').replace(/&[a-z]+;/g, '').replace(/\s+/g, ' ');
  const matches = [...clean.matchAll(/((?:Graduate School of [A-Z][a-zA-Z &,]+)|(?:[^\s]{2,}研究科))/g)];
  return [...new Set(matches.map(m => m[0].trim()))];
}

async function main() {
  const targets = [
    // Tokyo U - try static pages
    ['UTokyo-edu', 'https://www.u-tokyo.ac.jp/en/education/overview.html'],
    ['UTokyo-fac', 'https://www.u-tokyo.ac.jp/en/about/faculties.html'],
    // Kyoto U
    ['Kyoto-fac', 'https://www.kyoto-u.ac.jp/en/about/faculties/'],
    ['Kyoto-edu', 'https://www.kyoto-u.ac.jp/en/education/'],
    // Osaka U
    ['Osaka-edu', 'https://www.osaka-u.ac.jp/en/education/'],
    ['Osaka-fac', 'https://www.osaka-u.ac.jp/en/education/organization/'],
    // Tohoku
    ['Tohoku-org', 'https://www.tohoku.ac.jp/en/about/organization/'],
    ['Tohoku-edu', 'https://www.tohoku.ac.jp/en/education/'],
  ];

  for (const [name, url] of targets) {
    console.log('--- ' + name + ': ' + url + ' ---');
    try {
      const r = await fetchUrl(url);
      const schools = extract(r.html);
      if (schools.length > 0) {
        schools.forEach(s => console.log('  -', s));
      } else {
        // Show text snippets
        const plain = r.html.replace(/<[^>]+>/g, '\n');
        const lines = plain.split('\n').filter(l => l.trim().length > 3 && l.trim().length < 80 && !/[{}<>]/.test(l)).map(l => l.trim());
        const found = [...new Set(lines.filter(l => /(Graduate|Study|研究|Faculty|School|学部|大学院)/.test(l)))].slice(0, 25);
        found.forEach(l => console.log('  ~', l.substring(0, 80)));
      }
    } catch(e) { console.log('  ERROR:', e.message); }
  }
}
main().catch(e => console.error(e));