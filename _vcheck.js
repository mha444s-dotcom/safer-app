/* فحص شامل لبيانات التأشيرات في visa-data.js (ملف مؤقت للفحص فقط) */
const fs = require('fs');
const src = fs.readFileSync('visa-data.js', 'utf8');
const d = new Function(src + '; return visaData;')();

const codes = Object.keys(d.countries);
const problems = [];
const warn = [];
const emptyAddr = [];

const ALLOWED = ['schengen', 'visa-free', 'e-visa', 'on-arrival', 'visa-required'];
const REQUIRED_FIELDS = ['code', 'name', 'visaType', 'duration', 'cost', 'processingTime',
  'notes', 'officialLink', 'bestTime', 'currency', 'currencyPerUSD', 'language',
  'timezone', 'emergencyNumber', 'source'];

const seenNames = {};

codes.forEach(function (k) {
  const c = d.countries[k];
  const tag = '[' + k + ']';

  if (c.code !== k) problems.push(tag + ' code غلط: ' + c.code);
  REQUIRED_FIELDS.forEach(function (f) {
    const v = c[f];
    if (v === undefined || v === null) problems.push(tag + ' ناقص: ' + f);
    else if (typeof v === 'string' && !v.trim()) problems.push(tag + ' فاضي: ' + f);
  });
  if (!Array.isArray(c.requirements) || c.requirements.length < 3) {
    problems.push(tag + ' requirements أقل من 3 أو مش مصفوفة');
  } else if (c.requirements.some(function (r) { return !String(r).trim(); })) {
    problems.push(tag + ' requirements فيها عنصر فاضي');
  }
  if (ALLOWED.indexOf(c.visaType) === -1) problems.push(tag + ' visaType غير مسموح: ' + c.visaType);

  const e = c.embassyInEgypt;
  if (!e || typeof e !== 'object') problems.push(tag + ' embassyInEgypt ناقص');
  else {
    ['address', 'website', 'verified'].forEach(function (f) {
      if (e[f] === undefined || e[f] === null) problems.push(tag + ' embassyInEgypt.' + f + ' ناقص');
    });
    if (e.address === '') emptyAddr.push(k);
    if (c.conditional === true && !c.conditionalTip) problems.push(tag + ' conditionalTip ناقص');
    if (typeof e.verified !== 'boolean') problems.push(tag + ' embassyInEgypt.verified مش boolean');
    if (e.phone === undefined) problems.push(tag + ' embassyInEgypt.phone مش موجود (خليه \'\')');
  }

  if (!/^https?:\/\//.test(c.officialLink || '')) problems.push(tag + ' officialLink مش لينك');
  if (e && e.website && !/^https?:\/\//.test(e.website)) problems.push(tag + ' embassy website مش لينك');

  if (seenNames[c.name]) problems.push(tag + ' اسم مكرر: ' + c.name);
  seenNames[c.name] = 1;

  // دول شنغن لازم تستخدم المستندات الموحّدة
  if (c.visaType === 'schengen') {
    if (!Array.isArray(c.requirements) || c.requirements.length !== 8) {
      problems.push(tag + ' شنغن: المستندات مش موحّدة (المفروض 8)');
    }
    if ((c.notes || '').indexOf('شنغن') === -1) problems.push(tag + ' شنغن: الملاحظات مش موحّدة');
  }
  if (c.conditional !== undefined && typeof c.conditional !== 'boolean') {
    problems.push(tag + ' conditional مش boolean');
  }
});

/* مطابقة التصنيفات مع visaType */
const MAP = { visaFree: 'visa-free', eVisa: 'e-visa', onArrival: 'on-arrival', visaRequired: 'visa-required', schengen: 'schengen' };
const inCat = {};
Object.keys(MAP).forEach(function (cat) {
  (d.categories[cat] || []).forEach(function (code) {
    if (!d.countries[code]) problems.push('تصنيف ' + cat + ' فيه كود غير موجود: ' + code);
    else if (d.countries[code].visaType !== MAP[cat]) {
      problems.push('تعارض: ' + code + ' في ' + cat + ' لكن visaType=' + d.countries[code].visaType);
    }
    if (inCat[code]) problems.push('كود مكرر في التصنيفات: ' + code + ' (' + inCat[code] + ' + ' + cat + ')');
    inCat[code] = cat;
  });
});
codes.forEach(function (k) {
  if (!inCat[k]) problems.push('كود مش موجود في أي تصنيف: ' + k);
});

/* إحصاء الأنواع */
const byType = {};
codes.forEach(function (k) { byType[d.countries[k].visaType] = (byType[d.countries[k].visaType] || 0) + 1; });

const verifiedTrue = codes.filter(function (k) { return d.countries[k].embassyInEgypt.verified === true; }).length;

console.log('عدد الدول: ' + codes.length);
console.log('الأنواع: ' + JSON.stringify(byType));
console.log('تصنيفات: ' + Object.keys(MAP).map(function (c) { return c + '=' + (d.categories[c] || []).length; }).join(' '));
console.log('سفارات موثّقة (verified:true): ' + verifiedTrue + ' / ' + codes.length);
console.log('ملفات notes فيها «يحتاج تأكيد»: ' + codes.filter(function (k) { return (d.countries[k].notes || '').indexOf('يحتاج تأكيد') !== -1; }).length);
console.log('');
console.log('سفارات بدون عنوان (مقصود — «الفاضي يفضل فاضي»): ' + emptyAddr.length + ' → ' + emptyAddr.join(', '));
console.log('');
if (problems.length) { console.log('❌ مشاكل (' + problems.length + '):'); problems.forEach(function (p) { console.log('   ' + p); }); process.exit(1); }
console.log('✅ كل الحقول سليمة ومتطابقة');
