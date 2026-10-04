/* ============================================================
   SAFR APP - CONFIG.JS
   1) إعدادات ومفاتيح المصادر الخارجية الموثوقة
   2) أداة شبكة مشتركة (fetch مع مهلة زمنية)

   ✅ ده المكان الوحيد اللي محتاج تحط فيه المفاتيح
   ============================================================ */

const SAFR_CONFIG = {

  /* ------------------------------------------------------------
     1) REST Countries API — بيانات الدول الرسمية
        (الاسم بالعربي، العاصمة، اللغة، العملة، عدد السكان، ورابط علم SVG)
        سجّل مجاناً: https://restcountries.com/sign-up
        المفتاح شكله:  rc_live_xxxxxxxxxxxx
        ⚠️ المفتاح التجريبي "rc_live_demo" بيرجّع بيانات وهمية (كندا لكل حاجة)
           فالكود بيرفضه تلقائياً.
     ------------------------------------------------------------ */
  restCountriesApiKey: '',

  /* ------------------------------------------------------------
     2) AllRatesToday — أسعار البنك المركزي المصري (CBE) الرسمية
        (USD → EGP و EUR → EGP)
        سجّل مجاناً: https://allratestoday.com/register
        المفتاح شكله:  art_live_xxxxxxxxxxxx
     ------------------------------------------------------------ */
  ratesApiKey: '',

  /* ------------------------------------------------------------
     3) الكاش
        REST Countries بتسمح بتخزين الردود لحد 3 أيام حسب شروط الخدمة
     ------------------------------------------------------------ */
  countriesCacheTtlDays: 3,

  /* 4) مهلة الشبكة بالملي ثانية */
  requestTimeoutMs: 15000
};

/* ============================================================
   أداة شبكة مشتركة
   ============================================================ */

/* قراءة مفتاح: من localStorage الأول (عشان تقدر تجرّب من غير تعديل ملفات)
   وبعدين من SAFR_CONFIG */
function getSafrKey(configField) {
  let stored = '';
  try {
    stored = localStorage.getItem('safr_key_' + configField) || '';
  } catch (e) { stored = ''; }

  const fromConfig = (typeof SAFR_CONFIG !== 'undefined' && SAFR_CONFIG)
    ? SAFR_CONFIG[configField]
    : '';

  return String(stored || fromConfig || '').trim();
}

/* المفتاح التجريبي بتاع REST Countries — بنرفضه لأن ردّه وهمي */
const REST_COUNTRIES_DEMO_KEY = 'rc_live_demo';

/* fetch مع مهلة زمنية + التأكد إن الرد JSON */
async function fetchJsonWithTimeout(url, options, timeoutMs) {
  const ms = timeoutMs || (SAFR_CONFIG.requestTimeoutMs || 15000);
  const controller = (typeof AbortController === 'function') ? new AbortController() : null;
  const timer = controller ? setTimeout(function () { controller.abort(); }, ms) : null;

  const opts = Object.assign({}, options || {});
  if (controller) opts.signal = controller.signal;

  try {
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } finally {
    if (timer) clearTimeout(timer);
  }
}

console.log('⚙️ Config module loaded');
