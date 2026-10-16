/* فحص 2: مطابقة دقيقة لكل الأكواد مع جدول ويكيبيديا + مدة الإقامة */
const fs = require('fs');
const d = new Function(fs.readFileSync('visa-data.js', 'utf8') + '; return visaData;')();

/* صفوف ويكيبيديا: بالاسم كما هو مكتوب */
const rows = {};
fs.readFileSync('_rows.txt', 'utf8').split('\n').forEach(function (line) {
  const p = line.split(' | ');
  if (p.length >= 2 && p[0] && !p[0].startsWith('#')) rows[p[0].trim()] = { req: p[1].trim(), stay: (p[2] || '').trim() };
});

const EN = {
  tr: 'Turkey', ae: 'United Arab Emirates', sa: 'Saudi Arabia', jo: 'Jordan', my: 'Malaysia',
  th: 'Thailand', ge: 'Georgia', az: 'Azerbaijan', ma: 'Morocco', tn: 'Tunisia',
  gr: 'Greece', pt: 'Portugal', ch: 'Switzerland', at: 'Austria', be: 'Belgium', ie: 'Ireland',
  nl: 'Netherlands', se: 'Sweden', no: 'Norway', dk: 'Denmark', pl: 'Poland', cz: 'Czech Republic',
  hu: 'Hungary', ro: 'Romania', hr: 'Croatia', rs: 'Serbia', bg: 'Bulgaria', si: 'Slovenia',
  sk: 'Slovakia', ee: 'Estonia', lv: 'Latvia', lt: 'Lithuania', fi: 'Finland', is: 'Iceland',
  lu: 'Luxembourg', mt: 'Malta', cy: 'Cyprus', al: 'Albania', mk: 'North Macedonia',
  ba: 'Bosnia and Herzegovina', in: 'India', lk: 'Sri Lanka', mv: 'Maldives', np: 'Nepal',
  bd: 'Bangladesh', bt: 'Bhutan', pk: 'Pakistan', mm: 'Myanmar', tw: 'Taiwan', hk: 'Hong Kong',
  id: 'Indonesia', sg: 'Singapore', vn: 'Vietnam', ph: 'Philippines', kh: 'Cambodia', la: 'Laos',
  bn: 'Brunei', tl: 'Timor-Leste', mo: 'Macau', kp: 'North Korea', br: 'Brazil', ar: 'Argentina',
  mx: 'Mexico', cu: 'Cuba', cl: 'Chile', co: 'Colombia', pe: 'Peru', ve: 'Venezuela',
  ec: 'Ecuador', uy: 'Uruguay', ke: 'Kenya', za: 'South Africa', et: 'Ethiopia', rw: 'Rwanda',
  sc: 'Seychelles', mu: 'Mauritius', gh: 'Ghana', ng: 'Nigeria', tz: 'Tanzania', ug: 'Uganda',
  zm: 'Zambia', zw: 'Zimbabwe', mz: 'Mozambique', na: 'Namibia', bw: 'Botswana', sn: 'Senegal',
  ci: "Côte d'Ivoire", cm: 'Cameroon', ga: 'Gabon', mg: 'Madagascar', kw: 'Kuwait', qa: 'Qatar',
  bh: 'Bahrain', om: 'Oman', iq: 'Iraq', sy: 'Syria', ye: 'Yemen', sd: 'Sudan', ly: 'Libya',
  mr: 'Mauritania'
};

function expected(req) {
  const r = req.toLowerCase();
  if (/admission refused/.test(r)) return ['visa-required'];
  if (/visa not required/.test(r) && !/evisa|e-visa|visa on arrival/.test(r)) return ['visa-free'];
  if (/free visa on arrival|visa on arrival/.test(r) && /evisa|e-visa/.test(r)) return ['e-visa', 'on-arrival'];
  if (/visa on arrival/.test(r)) return ['on-arrival'];
  if (/evisa|e-visa|eta|electronic border system|online visa/.test(r) && !/visa required/.test(r)) return ['e-visa'];
  if (/visa required|online visa required/.test(r)) return ['visa-required'];
  return ['?' + req];
}

const mismatch = [], condOnly = [], noRow = [], stayBad = [];
Object.keys(EN).forEach(function (code) {
  const c = d.countries[code];
  const row = rows[EN[code]];
  if (!row) { noRow.push(code); return; }
  const exp = expected(row.req);

  let ok = exp.indexOf(c.visaType) !== -1;
  if (c.visaType === 'schengen') ok = /visa required/.test(row.req.toLowerCase());
  const conditional = /conditional/.test(row.req.toLowerCase());

  if (!ok) {
    if (conditional && (c.conditional === true || /مشروط|بشرط|شرط/.test(c.notes))) condOnly.push(code + ' [' + c.visaType + ' vs ' + row.req + ']');
    else mismatch.push('[' + code + '] ' + c.name + ' → التطبيق: ' + c.visaType + (c.conditional ? '(مشروط)' : '') + ' | ويكيبيديا: "' + row.req + '" (المتوقع: ' + exp.join('/') + ')');
  }

  // مدة الإقامة: لازم تظهر نفس الأرقام
  const numsW = (row.stay.match(/\d+/g) || []);
  const durationStr = String(c.duration);
  if (numsW.length && !numsW.some(function (n) { return durationStr.indexOf(n) !== -1; })) {
    stayBad.push('[' + code + '] ' + c.name + ' → التطبيق: "' + c.duration + '" | ويكيبيديا: "' + row.stay + '"');
  }
});

console.log('أكواد اتقارنت: ' + (Object.keys(EN).length - noRow.length) + ' / ' + Object.keys(EN).length);
console.log('');
console.log('### اختلافات تحتاج تعديل (' + mismatch.length + ') ###');
mismatch.forEach(function (m) { console.log('  ' + m); });
console.log('');
console.log('### حالات «مشروط» في ويكيبيديا والتطبيق متعامل معاها في الملاحظات (' + condOnly.length + ') ###');
condOnly.forEach(function (m) { console.log('  ' + m); });
console.log('');
console.log('### مدة الإقامة مختلفة (' + stayBad.length + ') ###');
stayBad.forEach(function (m) { console.log('  ' + m); });
console.log('');
console.log('### مفيش صف في جدول ويكيبيديا ###');
console.log('  ' + (noRow.join(', ') || 'لا يوجد'));
