const https = require('https');
const http = require('http');

function fetchUrl(url, redirects = 3) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const req = proto.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept-Language': 'ja,en;q=0.9',
      },
      rejectUnauthorized: false,
      timeout: 15000,
    }, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && redirects > 0) {
        const next = new URL(res.headers.location, url).href;
        return fetchUrl(next, redirects - 1).then(resolve).catch(reject);
      }
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve({ status: res.statusCode, html: d, url }));
    });
    req.on('error', e => reject(e));
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function extractGradSchools(html, url) {
  // Remove scripts, styles
  let text = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '\n')
    .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>');

  // Split lines
  const lines = text.split(/\n/).map(l => l.replace(/\s+/g, ' ').trim()).filter(l => l.length > 0);

  // Find graduate school related lines
  const schools = [];
  for (const line of lines) {
    // Look for 研究科/学院/学府 names — these indicate graduate schools
    if (/(?:研究科|学院|学府|Graduate School of|大学院)/.test(line) && line.length < 150 && line.length > 4) {
      schools.push(line);
    }
  }
  // Deduplicate
  return [...new Set(schools)];
}

async function main() {
  // Missing universities that need detailed graduate data
  const targets = [
    // 名古屋大学
    ['NagoyaU', 'https://www.nagoya-u.ac.jp/admission/graduate/'],
    ['NagoyaU-en', 'https://en.nagoya-u.ac.jp/admissions/graduate/index.html'],
    ['NagoyaU-org', 'https://www.nagoya-u.ac.jp/about-nu/organization/'],
    ['NagoyaU-acd', 'https://www.nagoya-u.ac.jp/about-nu/academic-chart/'],
    // 北海道大学
    ['HokkaidoU', 'https://www.hokudai.ac.jp/admission/graduate/'],
    ['HokkaidoU-fac', 'https://www.hokudai.ac.jp/faculties/'],
    ['HokkaidoU-en', 'https://www.hokudai.ac.jp/en/admissions/graduate/'],
    // 九州大学
    ['KyushuU', 'https://www.kyushu-u.ac.jp/ja/education/graduate/'],
    ['KyushuU-en', 'https://www.kyushu-u.ac.jp/en/academics/graduate-schools/'],
    // 筑波大学
    ['TsukubaU', 'https://www.tsukuba.ac.jp/en/academics/graduate-schools/'],
    ['TsukubaU-jp', 'https://www.tsukuba.ac.jp/academics/graduate-schools/'],
    // 広島大学
    ['HiroshimaU', 'https://www.hiroshima-u.ac.jp/en/education/graduate-schools'],
    ['HiroshimaU-jp', 'https://www.hiroshima-u.ac.jp/ja/education/graduate-schools'],
    // 东京科学大学 (旧東工大 + 医科歯科)
    ['SciTokyo', 'https://www.isct.ac.jp/en/academics/graduate'],
    ['SciTokyo-jp', 'https://www.isct.ac.jp/ja/academics/graduate'],
    // 东北大学（继续补完）
    ['TohokuU', 'https://www.tohoku.ac.jp/en/academics/graduate_schools/'],
    ['TohokuU-jp', 'https://www.tohoku.ac.jp/japanese/profile/org/04/'],
  ];

  for (const [name, url] of targets) {
    console.log('\n========== ' + name + ': ' + url + ' ==========');
    try {
      const r = await fetchUrl(url);
      console.log('Status:', r.status, 'Size:', r.html.length);
      const schools = extractGradSchools(r.html, url);
      if (schools.length > 0) {
        schools.slice(0, 40).forEach(s => console.log('  -', s.substring(0, 120)));
      } else {
        console.log('  (no matches) — sampling raw text:');
        const plain = r.html.replace(/<[^>]+>/g, '\n').replace(/\n{3,}/g, '\n');
        const lines = plain.split('\n').filter(l => l.trim().length > 10 && !/^\s*[{}]\s*$/.test(l) && l.length < 200);
        const hits = lines.filter(l => /(研究科|Graduate School of|大学院|学府|学院|School|Department|Faculty)/i.test(l));
        hits.slice(0, 15).forEach(l => console.log('  >', l.trim().substring(0, 130)));
      }
    } catch(e) {
      console.log('  ERROR:', e.message);
    }
  }
}

main().catch(e => console.error('FATAL:', e));