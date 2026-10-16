/* طباعة النص الكامل (بدون مراجع) لصفوف مختارة من جدول ويكيبيديا */
const fs = require('fs');
const out = [];
[['_wiki.txt', 'SECTION 2 — الدول'], ['_wiki3.txt', 'SECTION 3 — المناطق التابعة']].forEach(function (pair) {
  const wiki = fs.readFileSync(pair[0], 'utf8');
  out.push('##### ' + pair[1] + ' #####');
  wiki.split(/\n\|-/).forEach(function (chunk) {
    const flag = chunk.match(/\{\{flag(?:icon|country)?\|([^}|]+)\}\}/);
    if (!flag) return;
    const name = flag[1].trim();
    const clean = chunk
      .replace(/<ref[^>]*>[\s\S]*?<\/ref>/g, '')
      .replace(/<ref[^>]*\/>/g, '')
      .replace(/\{\{Timatic[^}]*\}\}/g, '')
      .replace(/\{\{cite[^}]*\}\}/g, '')
      .replace(/[ \t]+/g, ' ')
      .replace(/\n{2,}/g, '\n')
      .trim();
    out.push('● ' + name + '  >>>  ' + clean.replace(/\n/g, ' ⏎ ').slice(0, 700));
    out.push('');
  });
});
fs.writeFileSync('_raw.txt', out.join('\n'), 'utf8');
console.log('ok');
