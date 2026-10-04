/* ============================================================
   SAFR APP — SERVICE WORKER
   ------------------------------------------------------------------
   الهدف: التطبيق يشتغل 100% أوفلاين بعد أول زيارة.

   الاستراتيجيات:
   • الملفات الثابتة (نفس الدومين) ....... Cache First + تحديث بالخلفية
   • فتح الصفحة (navigate) .............. Network First + رجوع لـ index.html
   • الـ APIs ............................ Network First (وبعدين الكاش)
   • الأعلام (flag-icons) ............... Cache First + تخزين عند أول طلب
   • خطوط جوجل (Cairo) .................. Cache First + تخزين عند أول طلب
   • خرائط Esri ......................... Cache First + تخزين عند أول طلب
   • مكتبات (Leaflet) .................... مخزّنة وقت التثبيت
   ============================================================ */

const SW_VERSION = 'v1.0.11';  // ← اترفعت لشارة «مشروط» في كروت التأشيرات + ربط زرار «شروط التأشيرة» بصفحة التأشيرات بدل كاش v1.0.10

const STATIC_CACHE = 'safr-static-' + SW_VERSION;   // ملفات التطبيق
const LIB_CACHE    = 'safr-libs-' + SW_VERSION;     // Leaflet وغيرها
const FONT_CACHE   = 'safr-fonts-' + SW_VERSION;    // خطوط جوجل
const FLAG_CACHE   = 'safr-flags-' + SW_VERSION;    // أعلام الدول
const TILE_CACHE   = 'safr-tiles-' + SW_VERSION;    // خرائط Esri
const API_CACHE    = 'safr-api-' + SW_VERSION;      // ردود الـ APIs

const OFFLINE_URL = 'index.html';

/* حدود الكاش (عشان مايتضخمش) */
const MAX_TILE_ENTRIES = 700;
const MAX_FLAG_ENTRIES = 400;
const MAX_API_ENTRIES  = 40;

/* ملفات التطبيق الأساسية — لازم تنجح كلها عشان الأوفلاين */
const APP_SHELL = [
  './',
  'index.html',
  'styles.css',
  'config.js',
  'rates.js',
  'flags.js',
  'data.js',
  'tourism.js',
  'visa-data.js',
  'map.js',
  'app.js',
  'manifest.json',
  'icon.svg',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable-512.png'
];

/* مكتبات خارجية — بنخزّنها وقت التثبيت عشان تشتغل أوفلاين من أول مرة */
const PRE_CACHE_EXTERNAL = [
  'https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

/* الدومينات لكل نوع */
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];
const FLAG_HOSTS = ['cdn.jsdelivr.net'];
const TILE_HOSTS = ['server.arcgisonline.com'];
const API_HOSTS  = ['api.restcountries.com', 'allratestoday.com', 'open.er-api.com'];

/* ============================================================
   1. INSTALL — تجهيز الكاش
   ============================================================ */
self.addEventListener('install', function (event) {
  event.waitUntil((async function () {
    const appCache = await caches.open(STATIC_CACHE);

    // (أ) ملفات التطبيق — لو واحد فشل مانوقعش التثبيت كله
    for (const url of APP_SHELL) {
      try {
        const res = await fetch(new Request(url, { cache: 'reload' }));
        if (res && (res.ok || res.type === 'opaque')) await appCache.put(url, res);
      } catch (e) {
        // نتجاهل ونكمل — التحذير بيظهر في الـ console
        console.warn('[SW] فشل تخزين:', url);
      }
    }

    // (ب) المكتبات الخارجية والخطوط
    const libCache = await caches.open(LIB_CACHE);
    for (const url of PRE_CACHE_EXTERNAL) {
      try {
        const res = await fetch(new Request(url, { mode: 'cors', cache: 'reload' }));
        if (res && (res.ok || res.type === 'opaque')) await libCache.put(url, res);
      } catch (e) {
        console.warn('[SW] فشل تخزين مكتبة:', url);
      }
    }

    await self.skipWaiting();
  })());
});

/* ============================================================
   2. ACTIVATE — مسح نسخ الكاش القديمة
   ============================================================ */
self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    const keys = await caches.keys();
    await Promise.all(keys.map(function (key) {
      const old = key.indexOf('safr-') === 0 && key.indexOf(SW_VERSION) === -1;
      return old ? caches.delete(key) : null;
    }));
    await self.clients.claim();
    console.log('[SW] ✅ جاهز — نسخة', SW_VERSION);
  })());
});

/* ============================================================
   3. MESSAGES — تحكم يدوي من الصفحة
   ============================================================ */
self.addEventListener('message', function (event) {
  const data = event.data || {};

  if (data.type === 'SKIP_WAITING') {
    self.skipWaiting();
    return;
  }

  // مسح كل الكاش (لو المستخدم عايز ينزّل نسخة جديدة)
  if (data.type === 'CLEAR_CACHES') {
    event.waitUntil((async function () {
      const keys = await caches.keys();
      await Promise.all(keys.map(function (k) { return caches.delete(k); }));
    })());
    return;
  }

  // تخزين أعلام الدول مسبقاً (عشان تظهر أوفلاين)
  if (data.type === 'CACHE_URLS' && Array.isArray(data.urls)) {
    event.waitUntil(prefetchUrls(data.urls, data.cacheName || FLAG_CACHE));
  }
});

/* تحميل مجموعة روابط وتخزينها في الكاش (على دفعات) */
async function prefetchUrls(urls, cacheName) {
  const cache = await caches.open(cacheName);
  let ok = 0, fail = 0;

  const BATCH = 8;
  for (let i = 0; i < urls.length; i += BATCH) {
    const batch = urls.slice(i, i + BATCH);
    await Promise.all(batch.map(async function (url) {
      try {
        if (await cache.match(url)) { ok++; return; }        // متخزّن قبل كده
        const res = await fetch(new Request(url, { mode: 'no-cors' }));
        if (res && (res.ok || res.type === 'opaque')) { await cache.put(url, res); ok++; }
        else fail++;
      } catch (e) { fail++; }
    }));
  }

  console.log('[SW] 🚩 Cached:', ok, '| failed:', fail, '=>', cacheName);

  // نبلّغ الصفحة بالنتيجة (اختياري)
  const clientList = await self.clients.matchAll();
  clientList.forEach(function (c) {
    c.postMessage({ type: 'CACHE_URLS_DONE', cacheName: cacheName, ok: ok, fail: fail });
  });
}

/* ============================================================
   4. FETCH — توجيه كل طلب للاستراتيجية المناسبة
   ============================================================ */
self.addEventListener('fetch', function (event) {
  const req = event.request;

  // بنتعامل مع GET بس
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch (e) { return; }

  // نتجاهل أي بروتوكول مش http(s) (chrome-extension, data:, blob:)
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  // (1) فتح التطبيق / تنقّل بين الصفحات
  if (req.mode === 'navigate') {
    event.respondWith(handleNavigate(req));
    return;
  }

  // (2) ردود الـ APIs — Network First
  if (API_HOSTS.indexOf(url.hostname) !== -1) {
    event.respondWith(networkFirst(req, API_CACHE, MAX_API_ENTRIES));
    return;
  }

  // (3) خطوط جوجل (CSS + ملفات woff2) — Cache First
  if (FONT_HOSTS.indexOf(url.hostname) !== -1) {
    event.respondWith(cacheFirst(req, FONT_CACHE));
    return;
  }

  // (4) أعلام الدول من flag-icons — Cache First + تخزين عند أول طلب
  if (FLAG_HOSTS.indexOf(url.hostname) !== -1) {
    event.respondWith(cacheFirst(req, FLAG_CACHE, MAX_FLAG_ENTRIES));
    return;
  }

  // (5) بلاطات خرائط Esri — Cache First + تخزين عند أول طلب
  if (TILE_HOSTS.indexOf(url.hostname) !== -1) {
    event.respondWith(cacheFirst(req, TILE_CACHE, MAX_TILE_ENTRIES));
    return;
  }

  // (6) ملفات التطبيق نفسه — Cache First + تحديث في الخلفية
  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(req, STATIC_CACHE));
    return;
  }

  // (7) أي مكتبة خارجية تانية (unpkg وغيرها) — Cache First
  event.respondWith(cacheFirst(req, LIB_CACHE));
});

/* ============================================================
   5. الاستراتيجيات
   ============================================================ */

/* (أ) فتح الصفحة: الشبكة الأول، ولو فشلت نرجّع index.html من الكاش */
async function handleNavigate(req) {
  try {
    const res = await fetch(req);
    if (res && res.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(req, res.clone());
    }
    return res;
  } catch (e) {
    const cached =
      (await caches.match(req, { ignoreVary: true })) ||
      (await caches.match(OFFLINE_URL)) ||
      (await caches.match('./'));
    if (cached) return cached;
    throw e;   // مفيش كاش خالص (أول زيارة أوفلاين)
  }
}

/* (ب) الكاش الأول: أسرع حاجة + بترجّع الكاش لو النت قطع */
async function cacheFirst(req, cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req, { ignoreVary: true });
  if (cached) return cached;

  // (مفيش كاش) هاتها من الشبكة وخزّنها
  const res = await fetch(req);
  if (res && (res.ok || res.type === 'opaque')) {
    cache.put(req, res.clone());
    if (maxEntries) trimCache(cacheName, maxEntries);
  }
  return res;
  // ملاحظة: لو الشبكة فشلت، الخطأ بيطلع فوق =>
  // الصورة/الملف بيفشل عادي، و onerror بيعمل fallback للعلم المحلي.
}

/* (ج) الشبكة الأول (للـ APIs): نجرب الشبكة، ولو فشلت نرجّع الكاش */
async function networkFirst(req, cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  try {
    const res = await fetch(req);
    if (res && (res.ok || res.type === 'opaque')) {
      cache.put(req, res.clone());
      if (maxEntries) trimCache(cacheName, maxEntries);
    }
    return res;
  } catch (e) {
    const cached = await cache.match(req, { ignoreVary: true });
    if (cached) return cached;

    // مفيش كاش => رجّع رد فاضي بـ 503
    // (الكود هيفشل بأمان ويرجع للبيانات المحلية/أسعار fallback)
    return new Response(JSON.stringify({ error: 'offline', message: 'مفيش نت ومفيش كاش' }), {
      status: 503,
      statusText: 'Offline',
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
  }
}

/* (د) ملفات التطبيق: نرجّع الكاش فوراً ونجدد في الخلفية */
async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req, { ignoreVary: true });

  const network = fetch(req).then(function (res) {
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  }).catch(function () { return null; });

  if (cached) return cached;

  const fresh = await network;
  if (fresh) return fresh;

  const shell = (await caches.match(OFFLINE_URL)) || (await caches.match('./'));
  if (shell) return shell;

  return new Response('', { status: 504, statusText: 'Offline' });
}

/* ============================================================
   6. أدوات مساعدة
   ============================================================ */

/* تقليم الكاش: بنشيل أقدم العناصر لو تعدّينا الحد */
async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= maxEntries) return;
  const extra = keys.length - maxEntries;
  for (let i = 0; i < extra; i++) await cache.delete(keys[i]);
}

console.log('[SW] 📦 Service Worker script loaded —', SW_VERSION);
