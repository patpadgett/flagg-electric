const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const checks = {
  title: /<title>([^<]*)<\/title>/.exec(html)?.[1],
  metaDesc: /<meta name="description" content="([^"]*)"/.exec(html)?.[1],
  ogTags: (html.match(/<meta name="og:(title|description|image|type)"[^>]*>/g) || []).map(s => s.slice(0,80)),
  jsonld: (html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || []).map(s => s.slice(0,120)),
  canonical: /<link rel="canonical"[^>]*>/.exec(html)?.[0],
  lang: /<html lang="([^"]*)"/.exec(html)?.[1],
  viewport: /<meta name="viewport"[^>]*>/.exec(html)?.[0],
  h1count: (html.match(/<h1/g) || []).length,
  h2count: (html.match(/<h2/g) || []).length,
  imgcount: (html.match(/<img/g) || []).length,
  formcount: (html.match(/<form/g) || []).length,
  telcount: (html.match(/tel:/g) || []).length,
  mailtocount: (html.match(/mailto:/g) || []).length,
  hrefs: (html.match(/<a href="([^"]*)"/g) || []).length,
};
console.log(JSON.stringify(checks, null, 2));
console.log('\n=== info links (mailto/tel/https) ===');
const infos = [...new Set(html.match(/href="(mailto:|tel:|https:\/\/[^"]*)"/g) || [])];
console.log(infos.map(s => s.slice(0, 120)).join('\n'));
console.log('\n=== external sameAs ===');
const sameAs = html.match(/"sameAs":\[([\s\S]*?)\]/);
console.log(sameAs ? sameAs[0].slice(0, 400) : 'none');
console.log('\n=== internal links (unique) ===');
const internal = [...new Set(html.match(/href="([^"#][^"]*)"/g) || [])];
console.log(internal.map(s => s.slice(0, 60)).join('\n'));
console.log('\n=== phone link targets ===');
console.log(JSON.stringify([...new Set(html.match(/href="tel:[^"]*"/g) || [])]));
console.log('\n=== schema key blocks (name/address/telephone/areaServed/sameAs) ===');
for (const key of ['name','address','telephone','areaServed','sameAs','openingHours']) {
  const idx = html.indexOf('"'+key+'"');
  if (idx >= 0) {
    const end = html.indexOf('}', idx);
    console.log(key + ' -> ' + html.slice(idx, end+1).slice(0, 200));
  }
}
