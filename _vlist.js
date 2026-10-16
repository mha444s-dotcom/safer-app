/* استخراج كل صفوف جدولي ويكيبيديا (الدول + المناطق التابعة) */
const fs = require('fs');
const out = [];
['_wiki.txt', '_wiki3.txt'].forEach(function (file) {
  if (!fs.existsSync(file)) return;
  const wiki = fs.readFileSync(file, 'utf8');
  out.push('##### ' + file + ' #####');
  wiki.split(/\n\|-/).forEach(function (chunk) {
    const flag = chunk.match(/\{\{flag(?:icon|country)?\|([^}|]+)\}\}/);
    if (!flag) return;
    const name = flag[1].trim();
    const after = chunk.slice(chunk.indexOf(flag[0]) + flag[0].length);
    const reqM = after.match(/\{\{(yes2|no|yes|yes-no|Optional|partial|maybe|AOR)\|([^}]+)\}\}/);
    const req = reqM ? reqM[2].trim() : '(none)';
    let stay = '';
    if (reqM) {
      const rest = after.slice(after.indexOf(reqM[0]) + reqM[0].length);
      const cells = rest.split(/\n\|/);
      if (cells[1] !== undefined) stay = cells[1].split('\n')[0].trim();
    }
    out.push(name + ' | ' + req + ' | ' + stay);
  });
});
fs.writeFileSync('_rows.txt', out.join('\n'), 'utf8');
console.log('rows written', out.length);
