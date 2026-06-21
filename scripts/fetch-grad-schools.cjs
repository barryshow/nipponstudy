const https = require('https');
const http = require('http');

function fetchUrl(url, redirects = 3) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const opts = new URL(url);
    const req = proto.get(opts.href, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      rejectUnauthorized: false,
      timeout: 15000,
    }, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && redirects > 0) {
        const next = new URL(res.headers.location, url).href;
        return fetchUrl(next, redirects - 1).then(resolve).catch(reject);
      }
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve({ status: res.statusCode, html: d, finalUrl: url }));
    });
    req.on('error', e => reject(e));
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function extractGradSchools(html) {
  // Remove scripts, styles
  let text = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '\n')
    .replace(/&amp;/g, '&').replace(/&gt;/g, '>').replace(/&lt;/g, '<')
    .replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&nbsp;/g, ' ');

  // Split by lines, clean up
  const lines = text.split(/\n/).map(l => l.replace(/\s+/g, ' ').trim()).filter(l => l.length > 0);

  // Find all lines containing "研究科" or "Graduate School of"
  const results = [];
  for (const line of lines) {
    if ((/(研究科|大学院|Graduate School of)/.test(line)) && line.length < 120) {
      results.push(line);
    }
  }
  return [...new Set(results)];
}

async function main() {
  const targets = [
    ['Tokyo-U', 'https://www.u-tokyo.ac.jp/en/academics/grad_schools.html'],
    ['Kyoto-U', 'https://www.kyoto-u.ac.jp/en/graduate/'],
    ['Waseda', 'https://www.waseda.jp/inst/admission/en/graduate/'],
    ['Keio', 'https://www.keio.ac.jp/en/academics/graduate/'],
    ['Nagoya', 'https://www.nagoya-u.ac.jp/en/academics/'],
    ['Tohoku', 'https://www.tohoku.ac.jp/en/academics/graduate.html'],
  ];

  for (const [name, url] of targets) {
    console.log('\n========== ' + name + ': ' + url + ' ==========');
    try {
      const r = await fetchUrl(url);
      console.log('Status:', r.status, 'Size:', r.html.length);
      const schools = extractGradSchools(r.html);
      schools.slice(0, 30).forEach(s => console.log('  -', s));
      if (schools.length === 0) console.log('  (no matches found)');
    } catch(e) {
      console.log('  ERROR:', e.message);
    }
  }
}

main().catch(e => console.error('FATAL:', e));