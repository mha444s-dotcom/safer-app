/* ============================================================
   SAFR APP — اختبار PWA / أوفلاين (_pwa_test.js)
   ------------------------------------------------------------------
   بيفحص:
   (1) كل ملفات التطبيق موجودة على الديسك
   (2) manifest.json سليم + الأيقونات موجودة وأبعادها صح
   (3) الصور الـPNG بتتقري فعلاً وفيها الألوان المتوقعة (ذهبي/أبيض/أزرق)
   (4) service-worker.js سليم من ناحية الـsyntax
   (5) index.html / styles.css فيها كل وسوم وحاجات PWA
   (6) السيرفر المحلي بيرجّع 200 لكل الملفات + Content-Type صح
   التشغيل:  node _pwa_test.js
   ============================================================ */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const zlib = require('zlib');
const http = require('http');
const https = require('https');
const { spawn } = require('child_process');

const DIR = __dirname;
const OUT = [];
const problems = [];

function log(s) { OUT.push(s); }
function ok(s) { log('  ✅ ' + s); }
function bad(s) { log('  ❌ ' + s); problems.push(s); }
function head(s) { log('\n' + s); }

/* ---------- (1) الملفات المطلوبة ---------- */
const APP_SHELL = [
  'index.html', 'styles.css', 'config.js', 'rates.js', 'flags.js',
  'data.js', 'map.js', 'app.js', 'manifest.json', 'icon.svg',
  'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'service-worker.js'
];

head('1) ملفات التطبيق (APP SHELL)');
APP_SHELL.forEach(function (f) {
  const p = path.join(DIR, f);
  if (fs.existsSync(p)) ok(f + '  (' + fs.statSync(p).size + ' bytes)');
  else bad('ناقص: ' + f);
});

/* ---------- (2) المانيفست ---------- */
head('2) manifest.json');
let manifest = null;
try {
  manifest = JSON.parse(fs.readFileSync(path.join(DIR, 'manifest.json'), 'utf8'));
  ok('JSON سليم');
} catch (e) {
  bad('JSON غير سليم: ' + e.message);
}

if (manifest) {
  const must = {
    name: 'سافر | بوابتك للعالم',
    short_name: 'سافر',
    display: 'standalone',
    start_url: '.',
    theme_color: '#0B3D91',
    background_color: '#0B3D91',
    lang: 'ar',
    dir: 'rtl',
    orientation: 'portrait'
  };
  Object.keys(must).forEach(function (k) {
    if (manifest[k] === must[k]) ok(k + ' = ' + manifest[k]);
    else bad(k + ' غلط: ' + JSON.stringify(manifest[k]));
  });

  if (Array.isArray(manifest.icons) && manifest.icons.length) {
    const sizes = manifest.icons.map(function (i) { return i.sizes + '/' + i.purpose; });
    ok('icons: ' + sizes.join(' , '));

    let has192 = false, has512 = false, hasMaskable = false;
    manifest.icons.forEach(function (i) {
      const f = path.join(DIR, i.src);
      if (!fs.existsSync(f)) { bad('أيقونة ناقصة على الديسك: ' + i.src); return; }
      if (i.sizes === '192x192') has192 = true;
      if (i.sizes === '512x512') has512 = true;
      if (i.purpose === 'maskable') hasMaskable = true;
    });
    if (!has192) bad('مفيش أيقونة 192x192');
    if (!has512) bad('مفيش أيقونة 512x512');
    if (!hasMaskable) bad('مفيش أيقونة maskable');
    if (has192 && has512 && hasMaskable) ok('192 + 512 + maskable موجودين (شرط التثبيت)');
  } else {
    bad('مفيش icons في المانيفست');
  }
}

/* ---------- (3) فحص بكسلات الأيقونات ---------- */
function decodePNG(file) {
  const buf = fs.readFileSync(file);
  const sig = [0x89, 0x50, 0x4E, 0x47];
  for (let i = 0; i < 4; i++) if (buf[i] !== sig[i]) throw new Error('مش PNG: ' + file);

  let pos = 8, w = 0, h = 0, depth = 0, color = 0, idat = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    const data = buf.slice(pos + 8, pos + 8 + len);
    if (type === 'IHDR') {
      w = data.readUInt32BE(0); h = data.readUInt32BE(4);
      depth = data[8]; color = data[9];
    } else if (type === 'IDAT') { idat.push(data); }
    else if (type === 'IEND') break;
    pos += 12 + len;
  }
  const raw = zlib.inflateSync(Buffer.concat(idat));
  return { w: w, h: h, depth: depth, color: color, raw: raw };
}

head('3) الأيقونات (PNG حقيقية + الألوان)');
[
  { file: 'icon-192.png', size: 192 },
  { file: 'icon-512.png', size: 512 },
  { file: 'icon-maskable-512.png', size: 512 }
].forEach(function (item) {
  try {
    const img = decodePNG(path.join(DIR, item.file));
    if (img.w !== item.size || img.h !== item.size) {
      bad(item.file + ' أبعاده غلط: ' + img.w + 'x' + img.h);
      return;
    }
    if (img.depth !== 8 || img.color !== 6) {
      bad(item.file + ' نوع البكسل غلط: depth=' + img.depth + ' color=' + img.color);
      return;
    }
    const stride = img.w * 4;
    if (img.raw.length !== (stride + 1) * img.h) {
      bad(item.file + ' بيانات الصورة ناقصة');
      return;
    }

    // إحصاء الألوان
    let gold = 0, white = 0, dark = 0, total = 0;
    for (let y = 0; y < img.h; y += 2) {
      for (let x = 0; x < img.w; x += 2) {
        const o = y * (stride + 1) + 1 + x * 4;
        const r = img.raw[o], g = img.raw[o + 1], b = img.raw[o + 2];
        total++;
        if (r > 170 && g > 140 && b < 120) gold++;                    // ذهبي
        else if (r > 225 && g > 225 && b > 225) white++;              // خطوط الكرة الأرضية
        else if (r < 60 && g < 110 && b > 60) dark++;                 // أزرق داكن
      }
    }
    const pg = (gold / total * 100), pw = (white / total * 100), pd = (dark / total * 100);
    log('     ' + item.file + ' ' + img.w + 'x' + img.h +
      ' | ذهبي ' + pg.toFixed(1) + '% | أبيض ' + pw.toFixed(2) + '% | أزرق ' + pd.toFixed(1) + '%');

    if (pg < 1) bad(item.file + ': مفيش ذهبي كفاية (اللوجو مش مرسوم صح)');
    else if (pw < 0.05) bad(item.file + ': خطوط الكرة الأرضية البيضا مش ظاهرة');
    else if (pd < 20) bad(item.file + ': الخلفية الزرقا غلط');
    else ok(item.file + ' = أيقونة سليمة وفيها اللوجو');
  } catch (e) {
    bad(item.file + ': ' + e.message);
  }
});


/* ---------- (4) الـ Service Worker ---------- */
head('4) service-worker.js');
const swSrc = fs.readFileSync(path.join(DIR, 'service-worker.js'), 'utf8');
try {
  new vm.Script(swSrc, { filename: 'service-worker.js' });
  ok('الـsyntax سليم');
} catch (e) {
  bad('خطأ syntax: ' + e.message);
}

[
  ["addEventListener('install'", 'install'],
  ["addEventListener('activate'", 'activate'],
  ["addEventListener('fetch'", 'fetch'],
  ["addEventListener('message'", 'message'],
  ['skipWaiting', 'skipWaiting'],
  ['clients.claim', 'clients.claim'],
  ['caches.delete', 'مسح الكاش القديم'],
  ['CACHE_URLS', 'تخزين الأعلام مسبقاً'],
  ['networkFirst', 'Network First'],
  ['cacheFirst', 'Cache First'],
  ['staleWhileRevalidate', 'Stale While Revalidate'],
  ['trimCache', 'تقليم الكاش'],
  ['fonts.googleapis.com', 'خطوط جوجل'],
  ['fonts.gstatic.com', 'ملفات الخطوط'],
  ['cdn.jsdelivr.net', 'أعلام flag-icons'],
  ['arcgisonline.com', 'خرائط Esri'],
  ['api.restcountries.com', 'REST Countries API'],
  ['allratestoday.com', 'CBE API'],
  ['er-api.com', 'أسعار احتياطية'],
  ['leaflet', 'مكتبة Leaflet']
].forEach(function (p) {
  if (swSrc.indexOf(p[0]) !== -1) ok('موجود: ' + p[1]);
  else bad('ناقص من الـSW: ' + p[1]);
});

/* ---------- (5) تغطية الـSW لملفات التطبيق ---------- */
head('5) تغطية الـSW لملفات التطبيق');
APP_SHELL.forEach(function (f) {
  if (f === 'service-worker.js') return;
  const needle = "'" + f + "'";
  if (swSrc.indexOf(needle) !== -1) ok('متغطّي: ' + f);
  else bad('الـSW مش بيخزّن: ' + f);
});

/* ---------- (6) index.html ---------- */
head('6) index.html');
const html = fs.readFileSync(path.join(DIR, 'index.html'), 'utf8');
[
  ['<link rel="manifest" href="manifest.json">', 'لينك المانيفست'],
  ['<link rel="icon" href="icon.svg"', 'أيقونة favicon'],
  ['rel="apple-touch-icon"', 'أيقونة آيفون'],
  ['name="apple-mobile-web-app-capable" content="yes"', 'meta آيفون'],
  ['name="apple-mobile-web-app-status-bar-style" content="default"', 'شريط الحالة'],
  ['id="offlineBar"', 'الشريط الأصفر'],
  ['id="offlineChip"', 'أيقونة الأوفلاين في الهيدر'],
  ["'serviceWorker' in navigator", 'التسجيل بشرط الدعم'],
  ["register('service-worker.js')", 'تسجيل الـSW'],
  ["addEventListener('offline'", 'حدث offline'],
  ["addEventListener('online'", 'حدث online'],
  ['<html lang="ar" dir="rtl">', 'اتجاه الصفحة عربي']
].forEach(function (p) {
  if (html.indexOf(p[0]) !== -1) ok('موجود: ' + p[1]);
  else bad('ناقص من index.html: ' + p[1]);
});

if (html.split('</body>').length === 2) ok('بنية HTML سليمة (وسم body واحد)');
else bad('مشكلة في وسوم </body>');

/* ---------- (7) styles.css ---------- */
head('7) styles.css');
const css = fs.readFileSync(path.join(DIR, 'styles.css'), 'utf8');
[
  ['.offline-bar{', 'استايل الشريط'],
  ['.offline-bar[hidden]{display:none}', 'إخفاء الشريط لما يكون فيه نت'],
  ['.offline-chip{', 'استايل أيقونة الأوفلاين'],
  ['.offline-chip[hidden]{display:none}', 'إخفاء الأيقونة لما يكون فيه نت'],
  ['@media (display-mode:standalone)', 'وضع التطبيق المثبّت'],
  ['env(safe-area-inset-top', 'احترام النوتش']
].forEach(function (p) {
  if (css.indexOf(p[0]) !== -1) ok('موجود: ' + p[1]);
  else bad('ناقص من styles.css: ' + p[1]);
});

/* ---------- (8) السيرفر المحلي ---------- */
head('8) السيرفر المحلي (http://localhost:5500)');
const srv = spawn(process.execPath, [path.join(DIR, '_server.js')], { cwd: DIR });

function httpGet(url) {
  return new Promise(function (resolve) {
    http.get(url, function (res) {
      let n = 0;
      res.on('data', function (c) { n += c.length; });
      res.on('end', function () {
        resolve({ status: res.statusCode, type: res.headers['content-type'], len: n, cache: res.headers['cache-control'] });
      });
    }).on('error', function (e) { resolve({ status: 0, err: e.message }); });
  });
}

function httpsGet(url) {
  return new Promise(function (resolve) {
    const req = https.request(url, { method: 'GET', timeout: 15000 }, function (res) {
      res.resume();
      resolve({ status: res.statusCode });
    });
    req.on('timeout', function () { req.destroy(); resolve({ status: 0, err: 'timeout' }); });
    req.on('error', function (e) { resolve({ status: 0, err: e.message }); });
    req.end();
  });
}

(async function () {
  await new Promise(function (r) { setTimeout(r, 900); });

  for (const f of APP_SHELL.concat(['/'])) {
    const url = 'http://localhost:5500/' + (f === '/' ? '' : f);
    const res = await httpGet(url);
    const label = (f === '/' ? '/' : f);
    if (res.status === 200) {
      ok(label + '  => 200  [' + res.type + ', ' + res.len + 'B' + (res.cache ? ', ' + res.cache : '') + ']');
    } else {
      bad(label + '  =>  ' + (res.status || res.err));
    }
  }

  head('9) مصادر خارجية (لازم تشتغل عشان الكاش)');
  const ext = [
    'https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/eg.svg',
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/2/1/1',
    'https://open.er-api.com/v6/latest/USD'
  ];
  for (const u of ext) {
    const r = await httpsGet(u);
    if (r.status === 200) ok(u.split('/')[2] + '  => 200');
    else log('  ⚠️ ' + u.split('/')[2] + '  =>  ' + (r.status || r.err) + '  (اتأكد من النت)');
  }

  head('النـتـيـجـة');
  log(problems.length === 0
    ? '🎉 كل حاجة تمام — مفيش مشاكل (' + APP_SHELL.length + ' ملف + المانيفست + الأيقونات + الـSW)'
    : '⚠️ عدد المشاكل: ' + problems.length);
  problems.forEach(function (p) { log('   - ' + p); });

  fs.writeFileSync(path.join(DIR, '_pwa_report.txt'), OUT.join('\n'), 'utf8');
  srv.kill();
  setTimeout(function () { process.exit(problems.length ? 1 : 0); }, 400);
})();
