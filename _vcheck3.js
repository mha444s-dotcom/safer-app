/* مقارنة تفصيلية للدول اللي فيها اختلاف — مع الملاحظات من ويكيبيديا */
const fs = require('fs');
const wiki = fs.readFileSync('_wiki.txt', 'utf8');
const d = new Function(fs.readFileSync('visa-data.js', 'utf8') + '; return visaData;')();

const EN2 = {
  tr: 'Turkey', ae: 'United Arab Emirates', ma: 'Morocco', tn: 'Tunisia', rs: 'Serbia',
  lk: 'Sri Lanka', bt: 'Bhutan', pk: 'Pakistan', id: 'Indonesia', cu: 'Cuba', co: 'Colombia',
  ve: 'Venezuela', za: 'South Africa', sc: 'Seychelles', gh: 'Ghana', ng: 'Nigeria',
  sy: 'Syria', sd: 'Sudan', ly: 'Libya', tw: 'Taiwan', hk: 'Hong Kong', tl: 'East Timor',
  mo: 'Macau', ci: 'Ivory Coast', ke: 'Kenya', et: 'Ethiopia', my: 'Malaysia', jo: 'Jordan'
};

const chunks = wiki.split(/\n\|-/);
function findRow(en) {
  if (!en) return null;
  return chunks.find(function (c) {
    const f = c.match(/\{\{flag(?:icon|country)?\|([^}|]+)\}\}/);
    return f && f[1].trim().toLowerCase() === en.toLowerCase();
  });
}
function clean(s) {
  return String(s).replace(/<ref[^>]*>[\s\S]*?<\/ref>/g, '').replace(/<ref[^>]*\/>/g, '')
    .replace(/\{\{[^}]*\}\}/g, '').replace(/\s+/g, ' ').trim();
}

const out = [];
['tr', 'ae', 'ma', 'tn', 'rs', 'lk', 'bt', 'pk', 'id', 'cu', 'co', 've', 'za', 'sc', 'gh',
  'ng', 'sy', 'sd', 'ly', 'tw', 'hk', 'tl', 'mo', 'ci'].forEach(function (code) {
    const c = d.countries[code];
    out.push('=== ' + code.toUpperCase() + ' — ' + c.name + ' ===');
    out.push('  التطبيق : ' + c.visaType + (c.conditional ? ' (مشروط)' : '') + ' | ' + c.duration + ' | ' + c.cost);
    out.push('  المصدر  : ' + String(c.source).slice(0, 160));
    out.push('  ملاحظات : ' + String(c.notes).slice(0, 300));
    const row = findRow(EN2[code]);
    out.push('  ويكيبيديا: ' + (row ? clean(row.replace(/\{\{flag(?:icon|country)?\|[^}]*\}\}/, '')).slice(0, 380) : 'مفيش صف'));
    out.push('');
  });

fs.writeFileSync('_vrep.txt', out.join('\n'), 'utf8');
console.log('done');
