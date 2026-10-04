/* ============================================================
   SAFR APP - RATES.JS
   نظام تحديث أسعار الصرف
   المصدر الرسمي: البنك المركزي المصري (CBE) عبر AllRatesToday
   خطة بديلة: مصدر مجاني بدون مفتاح (open.er-api.com)
   التحديث: عند فتح التطبيق + كاش في localStorage
   ============================================================ */

/* ============================================================
   1. GLOBAL VARIABLES
   ============================================================ */
let exchangeRates = {};        // {USD: 1, EGP: 49, SAR: 3.75, ...}
let ratesLastUpdate = null;
let ratesSource = 'fallback';  // cbe | live | cache | fallback

// أسعار احتياطية في حالة فشل الإنترنت (محدثة: مارس 2026)
const fallbackRates = {
  USD: 1,
  EGP: 49.0,
  SAR: 3.75,
  AED: 3.67,
  QAR: 3.64,
  KWD: 0.31,
  BHD: 0.38,
  OMR: 0.385,
  JOD: 0.71,
  LBP: 89500,
  SYP: 13000,
  IQD: 1310,
  MAD: 9.85,
  TND: 3.12,
  DZD: 134.5,
  LYD: 4.85,
  SDG: 601,
  YER: 250.5,
  ILS: 3.65,
  EUR: 0.92,
  GBP: 0.79,
  CHF: 0.88,
  SEK: 10.45,
  NOK: 10.65,
  DKK: 6.85,
  PLN: 4.05,
  CZK: 23.5,
  HUF: 355,
  RON: 4.58,
  BGN: 1.80,
  HRK: 6.93,
  RSD: 108,
  TRY: 34.2,
  RUB: 92.5,
  UAH: 41.2,
  CAD: 1.36,
  MXN: 17.2,
  BRL: 5.05,
  ARS: 1015,
  CLP: 945,
  COP: 4050,
  PEN: 3.75,
  UYU: 41.5,
  VES: 36.5,
  CNY: 7.25,
  JPY: 152.5,
  KRW: 1345,
  INR: 84.5,
  PKR: 278,
  BDT: 119,
  LKR: 295,
  NPR: 135,
  IDR: 15850,
  MYR: 4.45,
  SGD: 1.34,
  THB: 34.5,
  VND: 25400,
  PHP: 57.5,
  TWD: 32.3,
  HKD: 7.78,
  NZD: 1.65,
  AUD: 1.52,
  FJD: 2.25,
  ZAR: 18.2,
  NGN: 1650,
  KES: 129,
  ETB: 125,
  GHS: 15.8,
  TZS: 2650,
  UGX: 3700,
  RWF: 1350,
  XOF: 604,
  XAF: 604,
  MUR: 46.5,
  MZN: 63.5,
  ZMW: 27.5,
  MWK: 1735,
  BWP: 13.6,
  NAD: 18.2,
  MNT: 3450,
  KZT: 495,
  UZS: 12800,
  AZN: 1.70,
  GEL: 2.72,
  AMD: 388,
  BYN: 3.27,
  MDL: 17.8,
  ALL: 92.5,
  MKD: 56.5,
  BAM: 1.80,
  ISK: 138,
  GIP: 0.79,
  FKP: 0.79,
  JEP: 0.79,
  GGP: 0.79,
  IMP: 0.79,
  SHP: 0.79,
  ANG: 1.79,
  AWG: 1.79,
  XCD: 2.70,
  BBD: 2.00,
  BZD: 2.01,
  JMD: 156,
  TTD: 6.78,
  BMD: 1.00,
  KYD: 0.83,
  GYD: 209,
  SRD: 35.5,
  HTG: 131,
  DOP: 60.5,
  CUP: 24.0,
  BND: 1.34,
  MOP: 8.02,
  KHR: 4050,
  LAK: 21800,
  MMK: 2100,
  PGK: 3.85,
  SBD: 8.45,
  VUV: 119,
  WST: 2.75,
  TOP: 2.38,
  XPF: 110,
  KMF: 452,
  DJF: 178,
  SOS: 571,
  MRU: 39.8,
  BOB: 6.91,
  PYG: 7800,
  PAB: 1.00,
  CRC: 510,
  NIO: 36.8,
  HNL: 25.5,
  GTQ: 7.70,
  BSD: 1.00,
  AFN: 68,
  BTN: 84.5,
  MVR: 15.4,
  KGS: 86,
  TJS: 10.9,
  TMT: 3.5,
  KPW: 110,
  ERN: 15,
  BIF: 2900,
  SSP: 4000,
  MGA: 4600,
  SCR: 14.5,
  AOA: 915,
  LSL: 18.2,
  SZL: 18.2,
  CDF: 2850,
  GMD: 71,
  GNF: 8650,
  SLL: 22600,
  LRD: 200,
  CVE: 120,
  STN: 26.6
};

/* ============================================================
   2. CENTRAL BANK OF EGYPT (CBE) OFFICIAL RATES
   جلب أسعار الصرف الرسمية من البنك المركزي المصري
   عبر AllRatesToday Central Bank Exchange Rate API

   المصدر: https://allratestoday.com/api/v1/central-bank/cbe/latest
   المفتاح: config.js -> SAFR_CONFIG.ratesApiKey
            (سجّل مجاناً: https://allratestoday.com/register)
   ملاحظة: لو مفيش مفتاح هنستخدم مصدر مجاني بدون مفتاح كخطة بديلة
           عشان التطبيق مايفضلش واقف.
   ============================================================ */

const CBE_ENDPOINT = 'https://allratestoday.com/api/v1/central-bank/cbe/latest';
const FREE_RATES_ENDPOINT = 'https://open.er-api.com/v6/latest/USD';

const RATES_CACHE_KEY = 'safr_rates';
const RATES_CACHE_TIME_KEY = 'safr_rates_time';

/* ------------------------------------------------------------
   2.A استخراج رقم السعر من رد الـ API
   بندوّر في أكتر من شكل ممكن للرد عشان الكود يبقى مقاوم للتغيير
   ------------------------------------------------------------ */
function deepFindRate(node, target, depth) {
  if (!node || typeof node !== 'object' || depth > 6) return 0;

  // أسماء الحقول الأكثر شيوعاً للسعر
  const preferred = ['rate', 'value', 'mid', 'close', 'reference_rate', 'price'];
  for (let i = 0; i < preferred.length; i++) {
    const v = parseFloat(node[preferred[i]]);
    if (isFinite(v) && v > 0) return v;
  }

  // كود العملة الهدف كـ key (زي { EGP: 49.5 })
  if (node[target] !== undefined) {
    const v = parseFloat(node[target]);
    if (isFinite(v) && v > 0) return v;
  }

  // ننزل مستوى أعمق
  const keys = Object.keys(node);
  for (let i = 0; i < keys.length; i++) {
    const child = node[keys[i]];
    if (child && typeof child === 'object') {
      const found = deepFindRate(child, target, depth + 1);
      if (found) return found;
    }
  }
  return 0;
}

function extractRateFromPayload(payload, target) {
  if (!payload) return 0;

  // أشكال مباشرة
  const direct = [
    payload.rate,
    payload.value,
    payload.rates ? payload.rates[target] : undefined
  ];
  for (let i = 0; i < direct.length; i++) {
    const v = parseFloat(direct[i]);
    if (isFinite(v) && v > 0) return v;
  }

  // ندور في العمق
  return deepFindRate(payload, target, 0);
}

/* ------------------------------------------------------------
   2.B نداء CBE لعملة واحدة (source -> EGP)
   ------------------------------------------------------------ */
async function fetchCbeRate(source, target) {
  const apiKey = (typeof getSafrKey === 'function') ? getSafrKey('ratesApiKey') : '';
  if (!apiKey) throw new Error('مفيش مفتاح لـ AllRatesToday');

  const url = CBE_ENDPOINT +
    '?source=' + encodeURIComponent(source) +
    '&target=' + encodeURIComponent(target);

  const payload = await fetchJsonWithTimeout(url, {
    headers: {
      'Authorization': 'Bearer ' + apiKey,
      'Accept': 'application/json'
    },
    cache: 'no-cache'
  });

  const rate = extractRateFromPayload(payload, target);
  if (!rate) throw new Error('مفيش سعر في رد CBE لـ ' + source + '/' + target);

  return rate;
}

/* ------------------------------------------------------------
   2.C المصدر الاحتياطي المجاني (بدون مفتاح)
   ------------------------------------------------------------ */
async function fetchFreeRates() {
  const data = await fetchJsonWithTimeout(FREE_RATES_ENDPOINT, { cache: 'no-cache' });
  if (!data || !data.rates) throw new Error('رد فاضي من المصدر الاحتياطي');
  return data.rates;
}
/* ------------------------------------------------------------
   2.D تحميل أسعار الصرف
   الترتيب: CBE الرسمي -> مصدر مجاني -> كاش محفوظ -> قيم ثابتة
   ------------------------------------------------------------ */
async function loadExchangeRates() {
  // (1) ابدأ دايماً بالكاش المحفوظ عشان التطبيق يشتغل قبل ما الشبكة ترد
  const cached = localStorage.getItem(RATES_CACHE_KEY);
  const cachedTime = localStorage.getItem(RATES_CACHE_TIME_KEY);

  if (cached) {
    try {
      exchangeRates = JSON.parse(cached);
      ratesLastUpdate = cachedTime ? new Date(cachedTime) : null;
      ratesSource = 'cache';
      console.log('💾 Loaded cached rates from', ratesLastUpdate);
    } catch (e) {
      exchangeRates = { ...fallbackRates };
    }
  } else {
    exchangeRates = { ...fallbackRates };
  }

  // (2) المصدر الرسمي: البنك المركزي المصري (CBE) عبر AllRatesToday
  const cbeKey = (typeof getSafrKey === 'function') ? getSafrKey('ratesApiKey') : '';

  if (cbeKey) {
    try {
      console.log('🏦 Fetching official CBE rates...');

      const usdToEgp = await fetchCbeRate('USD', 'EGP');
      const eurToEgp = await fetchCbeRate('EUR', 'EGP');

      // exchangeRates بتتخزن كـ "كام وحدة لكل 1 دولار"
      exchangeRates = { ...fallbackRates, ...exchangeRates };
      exchangeRates.USD = 1;
      exchangeRates.EGP = usdToEgp;

      // اليورو لكل دولار = (جنيه لكل دولار) / (جنيه لكل يورو)
      if (eurToEgp && eurToEgp > 0) {
        exchangeRates.EUR = usdToEgp / eurToEgp;
      }

      ratesLastUpdate = new Date();
      ratesSource = 'cbe';

      // احفظ في localStorage
      localStorage.setItem(RATES_CACHE_KEY, JSON.stringify(exchangeRates));
      localStorage.setItem(RATES_CACHE_TIME_KEY, ratesLastUpdate.toISOString());

      console.log('✅ CBE official rates updated');
      console.log('   1 USD =', usdToEgp, 'EGP');
      console.log('   1 EUR =', eurToEgp, 'EGP');
      console.log('📅 Last update:', ratesLastUpdate.toLocaleString('ar-EG'));

      // إعادة رسم الواجهات بالأسعار الجديدة
      if (typeof refreshAllPrices === 'function') {
        refreshAllPrices();
      }

      return true;

    } catch (err) {
      console.warn('⚠️ فشل CBE:', err.message, '— هنروح للمصدر البديل');
    }
  } else {
    console.warn(
      '⚠️ مفيش مفتاح AllRatesToday — مش هنقدر نجيب أسعار البنك المركزي الرسمية.\n' +
      '   سجّل مجاناً من https://allratestoday.com/register وحط المفتاح في config.js'
    );
  }

  // (3) خطة بديلة: مصدر مجاني بدون مفتاح
  try {
    console.log('🌐 Fetching fallback rates...');

    const rates = await fetchFreeRates();

    exchangeRates = { ...fallbackRates, ...rates };
    ratesLastUpdate = new Date();
    ratesSource = 'live';

    localStorage.setItem(RATES_CACHE_KEY, JSON.stringify(exchangeRates));
    localStorage.setItem(RATES_CACHE_TIME_KEY, ratesLastUpdate.toISOString());

    console.log('✅ Fallback rates updated:', rates.EGP, 'EGP per USD');
    console.log('📅 Last update:', ratesLastUpdate.toLocaleString('ar-EG'));

    if (typeof refreshAllPrices === 'function') {
      refreshAllPrices();
    }

    return true;

  } catch (err) {
    console.warn('⚠️ فشل المصدر البديل كمان:', err.message);
  }

  // (4) مفيش نت: نكمل بالكاش أو القيم الثابتة
  if (!cached) ratesSource = 'fallback';
  console.log('🛟 Using', ratesSource, 'rates — عدد العملات:', Object.keys(exchangeRates).length);
  return false;
}



/* ============================================================
   3. CONVERT CURRENCY TO USD
   تحويل أي عملة إلى الدولار
   ============================================================ */
function toUSD(amount, currencyCode) {
  if (!amount || amount === 0) return 0;
  const rate = exchangeRates[currencyCode] || fallbackRates[currencyCode];
  if (!rate || rate === 0) return 0;
  return amount / rate;
}

/* ============================================================
   4. FORMAT USD DISPLAY
   تنسيق عرض الدولار
   ============================================================ */
function formatUSD(amount) {
  if (amount === 0) return '$0';
  if (amount < 1) return '$' + amount.toFixed(2);
  if (amount < 100) return '$' + Math.round(amount);
  if (amount < 1000) return '$' + Math.round(amount);
  return '$' + Math.round(amount).toLocaleString('en-US');
}

/* ============================================================
   5. FORMAT PRICE RANGE WITH USD
   تنسيق نطاق سعري مع الدولار
   مثال: "2,000 - 6,000 EGP (40$ - 120$)"
   ============================================================ */
function formatPriceRange(min, max, currencyCode, currencySymbol) {
  const minUSD = toUSD(min, currencyCode);
  const maxUSD = toUSD(max, currencyCode);

  const localRange = `${min.toLocaleString('en-US')} - ${max.toLocaleString('en-US')} ${currencySymbol}`;
  const usdRange = `(${formatUSD(minUSD)} - ${formatUSD(maxUSD)})`;

  return `${localRange} ${usdRange}`;
}

/* ============================================================
   6. GET LAST UPDATE TEXT
   نص "آخر تحديث"
   ============================================================ */
function getRatesUpdateText() {
  if (!ratesLastUpdate) return 'أسعار ثابتة';

  const now = new Date();
  const diffMs = now - ratesLastUpdate;
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 1) return 'تم التحديث قبل دقائق';
  if (diffHours < 24) return `تم التحديث قبل ${diffHours} ساعة`;
  if (diffDays < 7) return `تم التحديث قبل ${diffDays} يوم`;

  return 'تم التحديث منذ ' + ratesLastUpdate.toLocaleDateString('ar-EG');
}

/* ============================================================
   7. GET RATE INFO FOR A CURRENCY
   معلومات سعر الصرف لعملة معينة
   ============================================================ */
function getRateInfo(currencyCode) {
  const rate = exchangeRates[currencyCode];
  if (!rate) return null;
  return {
    code: currencyCode,
    perUSD: rate,
    usdPerUnit: 1 / rate
  };
}

/* ============================================================
   7.B GET RATES SOURCE TEXT
   اسم مصدر الأسعار الحالي (بيتعرض في الصفحة الرئيسية)
   ============================================================ */
function getRatesSourceText() {
  if (ratesSource === 'cbe')      return 'البنك المركزي المصري';
  if (ratesSource === 'live')     return 'سوق الصرف';
  if (ratesSource === 'cache')    return 'أسعار محفوظة';
  return 'أسعار ثابتة';
}

/* ============================================================
   8. INITIALIZE
   التهيئة عند تحميل الصفحة
   ============================================================ */
window.addEventListener('load', () => {
  // نبدأ التحميل من غير ما نعطل باقي الصفحة
  loadExchangeRates();
});

// تصدير الدوال للاستخدام العام
console.log('💱 Rates module loaded');