/* مطابقة بيانات visa-data.js مع جدول ويكيبيديا (Visa requirements for Egyptian citizens) */
const fs = require('fs');
const wiki = fs.readFileSync('_wiki.txt', 'utf8');
const d = new Function(fs.readFileSync('visa-data.js', 'utf8') + '; return visaData;')();

/* (1) تحليل جدول الويكي: اسم الدولة + نوع التأشيرة + مدة الإقامة */
const rows = {};
wiki.split(/\n\|-/).forEach(function (chunk) {
  const flag = chunk.match(/\{\{flag(?:icon|country)?\|([^}|]+)\}\}/);
  if (!flag) return;
  const name = flag[1].trim();

  // خانة نوع التأشيرة = أول تمبليت ملوّن بعد اسم الدولة
  const after = chunk.slice(chunk.indexOf(flag[0]) + flag[0].length);
  const reqM = after.match(/\{\{(yes2|no|yes|yes-no|Optional|partial|maybe|AOR)\|([^}]+)\}\}/);
  const req = reqM ? reqM[2].trim() : '';

  // مدة الإقامة = الخانة اللي بعدها
  let stay = '';
  if (reqM) {
    const rest = after.slice(after.indexOf(reqM[0]) + reqM[0].length);
    const cells = rest.split(/\n\|/);
    if (cells[1] !== undefined) stay = cells[1].split('\n')[0].trim();
  }
  rows[name] = { req: req, stay: stay };
});

/* (2) أسماء إنجليزي/عربي للأكواد */
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
  bn: 'Brunei', tl: 'East Timor', mo: 'Macau', kp: 'North Korea', br: 'Brazil', ar: 'Argentina',
  mx: 'Mexico', cu: 'Cuba', cl: 'Chile', co: 'Colombia', pe: 'Peru', ve: 'Venezuela',
  ec: 'Ecuador', uy: 'Uruguay', ke: 'Kenya', za: 'South Africa', et: 'Ethiopia', rw: 'Rwanda',
  sc: 'Seychelles', mu: 'Mauritius', gh: 'Ghana', ng: 'Nigeria', tz: 'Tanzania', ug: 'Uganda',
  zm: 'Zambia', zw: 'Zimbabwe', mz: 'Mozambique', na: 'Namibia', bw: 'Botswana', sn: 'Senegal',
  ci: 'Ivory Coast', cm: 'Cameroon', ga: 'Gabon', mg: 'Madagascar', kw: 'Kuwait', qa: 'Qatar',
  bh: 'Bahrain', om: 'Oman', iq: 'Iraq', sy: 'Syria', ye: 'Yemen', sd: 'Sudan', ly: 'Libya',
  mr: 'Mauritania'
};

function norm(s) { return s.toLowerCase().replace(/[^a-z ]/g, '').replace(/\s+/g, ' ').trim(); }
const normRows = {};
Object.keys(rows).forEach(function (k) {
  normRows[norm(k.replace(/ and (territories|Crown dependencies).*/i, ''))] = rows[k];
});

/* (3) القاعدة: نوع التأشيرة المتوقع من نص ويكيبيديا */
function expected(req) {
  const r = req.toLowerCase();
  if (/admission refused|entry permit required/.test(r)) return 'visa-required';
  if (/visa not required/.test(r) && !/conditional/.test(r)) return 'visa-free';
  if (/visa on arrival/.test(r) && /evisa/.test(r)) return 'e-visa|on-arrival';
  if (/visa on arrival/.test(r)) return 'on-arrival';
  if (/evisa|e-visa|online visa required/.test(r)) return 'e-visa';
  if (/visa required/.test(r)) return 'visa-required';
  return '?(' + req + ')';
}

const bad = [];
const noRow = [];
Object.keys(EN).forEach(function (code) {
  const c = d.countries[code];
  if (!c) { bad.push('[' + code + '] مش موجود في visa-data'); return; }
  const row = normRows[norm(EN[code])];
  if (!row) { noRow.push(code + ':' + EN[code]); return; }
  const exp = expected(row.req);
  let ok = false;
  if (exp === 'e-visa|on-arrival') ok = (c.visaType === 'e-visa' || c.visaType === 'on-arrival');
  else if (c.visaType === 'schengen') ok = (row.req.toLowerCase().indexOf('visa required') !== -1);
  else ok = (exp === c.visaType);
  if (!ok) bad.push('[' + code + '] ' + c.name + ' → التطبيق: ' + c.visaType + ' | ويكيبيديا: "' + row.req + '" (' + exp + ')');
});

console.log('صفوف الجدول: ' + Object.keys(rows).length);
console.log('أكواد اتفحصت: ' + Object.keys(EN).length);
console.log('');
if (noRow.length) { console.log('⚠️ مفيش صف في الجدول لـ: ' + noRow.join(', ')); console.log(''); }
if (bad.length) { console.log('❌ اختلافات (' + bad.length + '):'); bad.forEach(function (b) { console.log('   ' + b); }); }
else console.log('✅ كل الأنواع مطابقة للجدول');
