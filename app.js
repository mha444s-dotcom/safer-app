/* ============================================================
   SAFR APP - APP.JS
   منطق التطبيق: المفضلة، الصفحات، المنشورات، التنقل
   ============================================================ */

/* ============================================================
   1. FAVORITES SYSTEM
   نظام المفضلة (يُحفظ في localStorage)
   ============================================================ */
let favorites = JSON.parse(localStorage.getItem('safr_favorites') || '[]');

function isFavorite(name) {
  return favorites.includes(name);
}

function toggleFavorite(name) {
  if (isFavorite(name)) {
    favorites = favorites.filter(f => f !== name);
    showToast('تم إزالة ' + name + ' من المفضلة');
  } else {
    favorites.push(name);
    showToast('تم حفظ ' + name + ' في المفضلة ⭐');
  }
  localStorage.setItem('safr_favorites', JSON.stringify(favorites));

  // تحديث الواجهات
  renderCountries();
  renderHomeFavorites();
  renderMapMarkers();
  updateFavButtonInDetail(name);
}

function toggleFavoriteFromDetail() {
  const name = document.getElementById('detailName').textContent;
  toggleFavorite(name);
}

function updateFavButtonInDetail(name) {
  const btnText = document.getElementById('favBtnText');
  if (btnText) btnText.textContent = isFavorite(name) ? 'محفوظة ✓' : 'حفظ';
}

/* ============================================================
   2. HELPERS
   دوال مساعدة عامة
   ============================================================ */
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
}

/* ============================================================
   2.B FLAG IMAGE HELPER
   العلم من مكتبة flag-icons الرسمية (4:3 SVG) كأولوية،
   و flags.js المحلي (getFlag) كـ fallback لو النت قطع.
   أي علم راجع من الـ API بيتجاهل.
   ============================================================ */
function flagImgTag(country, size, altText) {
  const code = country ? country.code : '';
  const external = (typeof flagUrl === 'function') ? flagUrl(code) : '';
  const local = (typeof getFlag === 'function') ? getFlag(code) : '';
  const safeAlt = String(altText || '').replace(/"/g, '&quot;');
  if (!external) return `<img src="${local}" alt="${safeAlt}" loading="lazy">`;
  return `<img src="${external}" onerror="this.onerror=null;this.src='${local}'" alt="${safeAlt}" loading="lazy">`;
}

/* ============================================================
   3. HOME PAGE - CONTINENTS TABS
   تابات القارات في الصفحة الرئيسية
   ============================================================ */
function renderHomeContinents() {
  const container = document.getElementById('homeContinents');
  if (!container) return;

  const counts = {};
  countries.forEach(c => {
    counts[c.continent] = (counts[c.continent] || 0) + 1;
  });

  container.innerHTML = Object.keys(continentInfo).map(key => {
    const info = continentInfo[key];
    return `
      <button class="cont-tab" onclick="gotoContinent('${key}')">
        <span>${info.icon}</span>
        ${info.name}
        <span class="count">${counts[key] || 0}</span>
      </button>
    `;
  }).join('');
}

function gotoContinent(key) {
  switchPage('explore');
  setTimeout(() => {
    const btn = document.querySelector(`.cont-tab[data-cont="${key}"]`);
    if (btn) setContinent(key, btn);
  }, 200);
}

/* ============================================================
   4. HOME PAGE - FAVORITES
   عرض الدول المفضلة في الصفحة الرئيسية
   ============================================================ */
function renderHomeFavorites() {
  const container = document.getElementById('homeFavorites');
  if (!container) return;

  const favCountries = countries.filter(c => isFavorite(c.name));

  if (favCountries.length === 0) {
    container.innerHTML = `
      <div style="background:#fff;border-radius:18px;padding:24px 20px;text-align:center;border:1px dashed var(--border);box-shadow:var(--shadow-sm)">
        <div style="font-size:40px;margin-bottom:8px">⭐</div>
        <p style="font-size:13px;color:var(--muted);font-weight:600">لسه مفيش دول في المفضلة</p>
        <p style="font-size:11px;color:var(--muted);margin-top:4px">دوس على ⭐ في أي دولة عشان تحفظها</p>
      </div>
    `;
    return;
  }

  container.innerHTML = favCountries.map(c => `
    <div class="country-card" style="margin-bottom:12px" onclick="openCountryDetail('${c.name}')">
      <div class="flag-wrap">
        ${flagImgTag(c, 'w160', c.name)}
      </div>
      <h4>${c.name}</h4>
      <div class="card-meta">
        <div class="capital">📍 ${c.capital}</div>
        ${buildCardUSDPrice(c)}
      </div>
      <button class="fav-btn active" onclick="event.stopPropagation();toggleFavorite('${c.name}')">
        <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </button>
    </div>
  `).join('');
}

/* ============================================================
   5. EXPLORE PAGE - COUNTRIES GRID
   عرض كروت الدول في صفحة الاستكشاف
   ============================================================ */
let currentContinent = 'all';
let currentSearch = '';

function renderCountries() {
  const container = document.getElementById('countriesContainer');
  if (!container) return;

  let filtered = countries;

  // فلترة حسب القارة
  if (currentContinent !== 'all') {
    filtered = filtered.filter(c => c.continent === currentContinent);
  }

  // فلترة حسب البحث
  if (currentSearch.trim()) {
    const q = currentSearch.trim().toLowerCase();
    filtered = filtered.filter(c =>
      String(c.name || '').toLowerCase().includes(q) ||
      String(c.capital || '').toLowerCase().includes(q)
    );
  }

  // لا نتائج
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="continent-section">
        <div class="empty-state">
          <svg viewBox="0 0 24 24" stroke-linecap="round">
            <circle cx="11" cy="11" r="7"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
          <p>مفيش نتائج مطابقة</p>
        </div>
      </div>
    `;
    return;
  }

  // تجميع حسب القارة
  const grouped = {};
  filtered.forEach(c => {
    if (!grouped[c.continent]) grouped[c.continent] = [];
    grouped[c.continent].push(c);
  });

  // بناء HTML
  let html = '';
  Object.keys(grouped).forEach(contKey => {
    const info = continentInfo[contKey];
    const list = grouped[contKey];

    html += `
      <div class="continent-section">
        <div class="continent-title">
          <div class="icon">${info.icon}</div>
          <h3>${info.name}</h3>
          <span class="num">${list.length} دولة</span>
        </div>
        <div class="countries-grid">
          ${list.map(c => `
            <div class="country-card" onclick="openCountryDetail('${c.name}')">
              ${c.popular ? '<div class="popular-badge">🔥 مميزة</div>' : ''}
              <button class="fav-btn ${isFavorite(c.name) ? 'active' : ''}" onclick="event.stopPropagation();toggleFavorite('${c.name}')">
                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </button>
              <div class="flag-wrap">
                ${flagImgTag(c, 'w160', c.name)}
              </div>
              <h4>${c.name}</h4>
              <div class="card-meta">
                <div class="capital">
                  <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  ${c.capital}
                </div>
                ${buildCardUSDPrice(c)}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function filterCountries(val) {
  currentSearch = val;
  renderCountries();
}

function setContinent(cont, btn) {
  currentContinent = cont;

  // تحديث التابات
  document.querySelectorAll('.cont-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');

  renderCountries();

  // الطيران للقارة على الخريطة
  flyToContinent(cont);
}

function updateCounts() {
  const counts = {};
  countries.forEach(c => {
    counts[c.continent] = (counts[c.continent] || 0) + 1;
  });

  const allEl = document.getElementById('count-all');
  if (allEl) allEl.textContent = countries.length;

  Object.keys(continentInfo).forEach(key => {
    const el = document.getElementById('count-' + key);
    if (el) el.textContent = counts[key] || 0;
  });
}

/* ============================================================
   5.B PRICE PARSING + USD EQUIVALENT
   استخراج الأرقام من نصوص الأسعار وإضافة المكافئ بالدولار
   (بيستخدم rates.js: toUSD / formatUSD / getRateInfo)
   ============================================================ */

/* رموز العملات زي ما بتظهر في نصوص data.js */
const PRICE_SYMBOLS = {
  '€': 'EUR',
  '£': 'GBP',
  '$': 'USD',
  '₺': 'TRY',
  '﷼': 'SAR',
  '¥': 'JPY',
  '₹': 'INR'
};

/* كود العملة من حقل currency زي "يورو (EUR)" */
function getCountryCurrencyCode(country) {
  const raw = (country && country.currency) ? country.currency : '';
  const m = raw.match(/\(([A-Z]{3})\)/);
  return m ? m[1] : null;
}

/* نص سعر زي "€300 - €800/شهر" -> { min, max, code } */
function parsePriceString(str, fallbackCode) {
  if (typeof str !== 'string') return null;

  const numbers = str.match(/\d[\d,]*/g);
  if (!numbers || numbers.length === 0) return null;

  const toNumber = (s) => parseFloat(s.replace(/,/g, ''));
  const min = toNumber(numbers[0]);
  const max = numbers.length > 1 ? toNumber(numbers[1]) : min;
  if (!isFinite(min) || !isFinite(max)) return null;

  // 1) الرمز ($ € £) هو الأدق — بعض الدول بتسعّر بالدولار مش بعملتها
  let code = null;
  for (const symbol in PRICE_SYMBOLS) {
    if (str.indexOf(symbol) !== -1) { code = PRICE_SYMBOLS[symbol]; break; }
  }

  // 2) كود عملة مكتوب صريح زي CHF / SYP / MAD
  if (!code) {
    const m = str.match(/\b([A-Z]{3})\b/);
    if (m) code = m[1];
  }

  // 3) كود عملة الدولة كخطة أخيرة
  if (!code) code = fallbackCode;
  if (!code) return null;

  return { min: min, max: max, code: code };
}

/* المكافئ بالدولار كنص زي "≈ $327 - $871" (فاضي لو العملة مش معروفة) */
function usdEquivalent(priceString, country) {
  if (typeof toUSD !== 'function' ||
      typeof formatUSD !== 'function' ||
      typeof getRateInfo !== 'function') {
    return '';
  }

  const p = parsePriceString(priceString, getCountryCurrencyCode(country));
  if (!p) return '';
  if (!getRateInfo(p.code)) return '';   // عملة مش مدعومة في rates.js

  const minUSD = toUSD(p.min, p.code);
  const maxUSD = toUSD(p.max, p.code);

  return '≈ ' + formatUSD(minUSD) + ' - ' + formatUSD(maxUSD);
}

/* سطر المكافئ بالدولار داخل كروت الدول */
function buildCardUSDPrice(country) {
  if (!country) return '';
  const usd = usdEquivalent(country.total, country);
  if (!usd) return '';
  return `<div class="usd-price">${usd}/شهر</div>`;
}

/* صف في صفحة التفاصيل: السعر المحلي + المكافئ بالدولار */
function setDetailPrice(elId, priceString, country) {
  const el = document.getElementById(elId);
  if (!el) return;

  const usd = usdEquivalent(priceString, country);
  el.innerHTML = usd
    ? `${priceString} <span class="usd-eq">(${usd})</span>`
    : priceString;
}

/* كل أسعار صفحة التفاصيل */
function updateDetailPrices(country) {
  if (!country) return;
  setDetailPrice('detailFees',    country.fees,    country);
  setDetailPrice('detailHousing', country.housing, country);
  setDetailPrice('detailLiving',  country.living,  country);
  setDetailPrice('detailTotal',   country.total,   country);
}

/* ============================================================
   6. COUNTRY DETAIL PAGE
   صفحة تفاصيل الدولة
   ============================================================ */
/* كود الدولة المعروضة حاليًا في صفحة التفاصيل (يُستخدم في تبويبات السياحة وغيرها) */
let currentDetailCode = null;

function openCountryDetail(name) {
  const c = countries.find(x => x.name === name);
  if (!c) return;

  // احفظ كود الدولة الحالية للتبويبات
  currentDetailCode = c.code;

  // الصورة والعنوان
  document.getElementById('detailFlag').innerHTML = flagImgTag(c, 'w320', c.name);
  document.getElementById('detailName').textContent = c.name;

  // القارة
  const contKey = (continentInfo[c.continent]) ? c.continent : 'europe';
  document.getElementById('detailContinent').innerHTML = `
    <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20"/>
    </svg>
    ${continentInfo[contKey].name}
  `;

  // المعلومات الأساسية
  document.getElementById('detailCapital').textContent = c.capital;
  document.getElementById('detailLanguage').textContent = c.language;
  document.getElementById('detailCurrency').textContent = c.currency;
  document.getElementById('detailPopulation').textContent = c.population;

  // التأشيرات
  const visas = Array.isArray(c.visas) ? c.visas : [];
  document.getElementById('detailVisas').innerHTML = visas.length
    ? visas.map(v => `<span class="visa-tag">${v}</span>`).join('')
    : '<span class="visa-tag">تتحدد حسب الدولة</span>';

  // الدراسة
  document.getElementById('detailUnis').textContent = c.unis;
  document.getElementById('detailScholarships').textContent = c.scholarships;

  // الأسعار + المكافئ بالدولار (من rates.js)
  updateDetailPrices(c);

  // زرار المفضلة
  document.getElementById('favBtnText').textContent = isFavorite(name) ? 'محفوظة ✓' : 'حفظ';

  // رجّع التبويب الافتراضي (معلومات) عند فتح أي دولة
  switchDetailTab('info');

  // الانتقال للصفحة
  switchPage('detail');
}

/* تبديل تبويبات صفحة تفاصيل الدولة: معلومات / السياحة / الدراسة / العلاج / السفارات */
function switchDetailTab(tabName) {
  // غير الأزرار
  document.querySelectorAll('.dtab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  // غير المحتوى
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.toggle('active', content.id === 'tab-' + tabName);
  });
  // بيانات السياحة تُبنى عند الطلب حسب الدولة المفتوحة حاليًا
  if (tabName === 'tourism') renderTourism(currentDetailCode);
}

/* ============================================================
   تبويب السياحة - بناء المدن والمعالم من tourism.js
   ============================================================ */

/* صورة بديلة تظهر عند غياب صورة المعلم/المدينة أو تعذّر تحميلها */
const TOURISM_PLACEHOLDER = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 90'%3E%3Crect width='120' height='90' fill='%23eef3fa'/%3E%3Ccircle cx='34' cy='28' r='9' fill='%23bac9dd'/%3E%3Cpath d='M0 90 L40 46 L68 74 L86 56 L120 90 Z' fill='%23bac9dd'/%3E%3C/svg%3E";

/* لو فشل تحميل الصورة نستبدلها بالمكان الفارغ */
function tourismImgFallback(img) {
  img.onerror = null;
  img.src = TOURISM_PLACEHOLDER;
}

/* تهريب النص قبل إدخاله داخل HTML */
function tourismEsc(value) {
  return String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

/* كارت معلم واحد */
function buildLandmarkHTML(lm) {
  return `
    <div class="landmark-item">
      <img class="landmark-thumb" src="${tourismEsc(lm.image) || TOURISM_PLACEHOLDER}" alt="${tourismEsc(lm.name)}" loading="lazy" onerror="tourismImgFallback(this)">
      <div class="landmark-body">
        <div class="landmark-name">${tourismEsc(lm.name)}</div>
        <div class="landmark-address">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>${tourismEsc(lm.address)}</span>
        </div>
        <p class="landmark-desc">${tourismEsc(lm.description)}</p>
        <div class="landmark-meta">
          <span class="lm-chip">🎟️ ${tourismEsc(lm.ticket)}</span>
          <span class="lm-chip">🗓️ ${tourismEsc(lm.bestTime)}</span>
        </div>
      </div>
    </div>
  `;
}

/* كارت مدينة واحدة مع قائمة معالمها */
function buildCityHTML(city) {
  const landmarks = Array.isArray(city.landmarks) ? city.landmarks : [];
  return `
    <div class="city-card">
      <div class="city-image">
        <img src="${tourismEsc(city.image) || TOURISM_PLACEHOLDER}" alt="${tourismEsc(city.name)}" loading="lazy" onerror="tourismImgFallback(this)">
      </div>
      <div class="city-head">
        <h4 class="city-name">${tourismEsc(city.name)}</h4>
        <p class="city-desc">${tourismEsc(city.description)}</p>
      </div>
      <div class="landmark-list">
        ${landmarks.map(buildLandmarkHTML).join('')}
      </div>
    </div>
  `;
}

/* عرض محتوى تبويب السياحة للدولة الحالية (أو رسالة فارغة لو مفيش بيانات) */
function renderTourism(code) {
  const wrap = document.getElementById('tab-tourism');
  if (!wrap) return;

  const data = (typeof tourismData !== 'undefined') ? tourismData[code] : null;

  if (!data || !Array.isArray(data.cities) || data.cities.length === 0) {
    wrap.innerHTML = `
      <div class="empty-tab">
        <div class="empty-icon">✈️</div>
        <h4>بيانات السياحة</h4>
        <p>جاري إضافة معلومات المدن والمعالم السياحية لهذه الدولة...</p>
      </div>
    `;
    return;
  }

  wrap.innerHTML = data.cities.map(buildCityHTML).join('');
}

/* ============================================================
   7. COMMUNITY PAGE - POSTS
   نظام منشورات تفاعلي كامل:
   نشر / إعجاب / تعليق / حفظ / مشاركة / حذف / تعديل / رفع صور
   البيانات تُحفظ في localStorage تحت المفتاح: safr_posts
   ============================================================ */
const POSTS_KEY       = 'safr_posts';        // كل المنشورات
const SAVED_POSTS_KEY = 'safr_saved_posts';  // معرّفات المنشورات المحفوظة
const USER_KEY        = 'safr_user';         // بيانات المستخدم (تُكتب في initAuth)
const GUEST_KEY       = 'safr_guest_id';     // معرّف ثابت للزائر (لو الدخول متعطّل)

/* منشورات مبدئية (Seed) — تظهر أول مرة بس، لو مفيش بيانات محفوظة */
const SEED_POSTS = [
  {
    id:'seed_1', author:'أحمد محمود', authorId:'seed_user_1', authorAvatar:'أ',
    authorCountry:'ألمانيا', authorCountryCode:'de', verified:true, feed:'friends',
    content:'الحمد لله وصلت برلين 🇩🇪 وأول خطوة كانت فتح حساب بنكي. لو حد محتاج مساعدة في إجراءات ألمانيا أنا موجود! #ألمانيا #دراسة_بالخارج',
    image:null, createdAt: Date.now() - 2 * 60 * 60 * 1000,
    likes:['seed_l1','seed_l2','seed_l3','seed_l4','seed_l5'],
    comments:[
      { id:'seed_c1', author:'سارة علي', authorId:'seed_user_2', authorAvatar:'س', content:'بالتوفيق يا أحمد 👏 أنا كمان في برلين!', createdAt: Date.now() - 60 * 60 * 1000 }
    ],
    shares:5
  },
  {
    id:'seed_2', author:'سارة علي', authorId:'seed_user_2', authorAvatar:'س',
    authorCountry:'كندا', authorCountryCode:'ca', verified:true, feed:'friends',
    content:'قدمت على منحة Vanier الكندية واتقبلت الحمد لله 🎉 لو حد محتاج تفاصيل عن المنحة والـ requirements، ممكن أشارك تجربتي كاملة. #منح_كندا',
    image:null, createdAt: Date.now() - 5 * 60 * 60 * 1000,
    likes:['seed_l1','seed_l2','seed_l6','seed_l7'],
    comments:[],
    shares:9
  },
  {
    id:'seed_3', author:'محمد حسن', authorId:'seed_user_3', authorAvatar:'م',
    authorCountry:'تركيا', authorCountryCode:'tr', verified:false, feed:'groups',
    content:'نصيحة لكل اللي مسافر تركيا: اعمل الإقامة الطلابية من أول أسبوع بعد ما توصل، عشان الإجراءات بتاخد وقت. #تركيا',
    image:null, createdAt: Date.now() - 24 * 60 * 60 * 1000,
    likes:['seed_l3','seed_l8'],
    comments:[],
    shares:2
  },
  {
    id:'seed_4', author:'نور الهدى', authorId:'seed_user_4', authorAvatar:'ن',
    authorCountry:'السعودية', authorCountryCode:'sa', verified:true, feed:'groups',
    content:'اشتغلت في السعودية سنتين ودي أهم حاجة اتعلمتها: الإقامة والجواز لازم يكونوا ساريين دايماً قبل أي إجراء. #السعودية',
    image:null, createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
    likes:['seed_l4','seed_l9','seed_l10'],
    comments:[],
    shares:4
  }
];

/* --- الحالة (State) --- */
let posts             = [];        // كل المنشورات
let savedPosts        = [];        // معرّفات المنشورات المحفوظة
let currentPostFilter = 'all';     // فلتر التابات: all | friends | groups
let pendingPostImage  = null;      // الصورة المختارة في المودال (Base64)
let editingPostId     = null;      // لو بنعدّل منشور موجود
let moreMenuEl        = null;      // عنصر قائمة "⋯" المفتوحة
const expandedComments = {};       // حالة فتح/غلق التعليقات لكل منشور

/* ============================================================
   (1) التخزين المحلي (localStorage)
   ============================================================ */
/* معرّف فريد */
function uid(prefix) {
  return (prefix || 'id') + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

/* تطبيع التعليق — يضمن وجود كل الحقول */
function normalizeComment(c) {
  c = c || {};
  return {
    id: c.id || uid('c'),
    author: c.author || 'مستخدم',
    authorId: c.authorId || '',
    authorAvatar: c.authorAvatar || (c.author ? String(c.author).charAt(0) : 'م'),
    content: c.content || '',
    createdAt: c.createdAt || Date.now()
  };
}

/* تطبيع المنشور — يضمن وجود كل الحقول حتى لو البيانات قديمة */
function normalizePost(p) {
  p = p || {};

  var likes = p.likes;
  if (!Array.isArray(likes)) {
    // توافق مع أي بيانات قديمة كانت بتخزّن رقم بدل مصفوفة
    var count = (typeof p.likes === 'number') ? p.likes : 0;
    likes = [];
    for (var i = 0; i < count; i++) likes.push('legacy_like_' + i);
  }

  var comments = Array.isArray(p.comments) ? p.comments : [];

  return {
    id: p.id || uid('p'),
    author: p.author || 'مستخدم',
    authorId: p.authorId || '',
    authorAvatar: p.authorAvatar || (p.author ? String(p.author).charAt(0) : 'م'),
    authorCountry: p.authorCountry || '',
    authorCountryCode: p.authorCountryCode || '',
    verified: !!p.verified,
    feed: p.feed || 'friends',
    content: p.content || '',
    image: p.image || null,
    createdAt: p.createdAt || Date.now(),
    editedAt: p.editedAt || null,
    likes: likes.slice(),
    comments: comments.map(normalizeComment),
    shares: (typeof p.shares === 'number') ? p.shares : 0
  };
}

/* قراءة المنشورات من localStorage (وبنحط بيانات مبدئية أول مرة) */
function loadPosts() {
  var raw = null;
  try { raw = localStorage.getItem(POSTS_KEY); } catch (e) { raw = null; }

  var list = null;
  if (raw) {
    try { list = JSON.parse(raw); } catch (e) { list = null; }
  }

  if (!Array.isArray(list) || list.length === 0) {
    list = SEED_POSTS.slice();
    try { localStorage.setItem(POSTS_KEY, JSON.stringify(list)); } catch (e) {}
  }

  return list.map(normalizePost);
}

/* كتابة المنشورات في localStorage */
function savePosts() {
  try {
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
  } catch (e) {
    showToast('⚠️ مساحة التخزين مليانة — امسح منشورات قديمة');
  }
}

/* المنشورات المحفوظة */
function loadSavedPosts() {
  var raw = null;
  try { raw = localStorage.getItem(SAVED_POSTS_KEY); } catch (e) { raw = null; }

  var list = null;
  if (raw) {
    try { list = JSON.parse(raw); } catch (e) { list = null; }
  }
  return Array.isArray(list) ? list : [];
}

function saveSavedPosts() {
  try { localStorage.setItem(SAVED_POSTS_KEY, JSON.stringify(savedPosts)); } catch (e) {}
}

/* ============================================================
   (2) المستخدم الحالي
   ============================================================ */
function getGuestId() {
  var id = null;
  try { id = localStorage.getItem(GUEST_KEY); } catch (e) { id = null; }
  if (!id) {
    id = uid('guest');
    try { localStorage.setItem(GUEST_KEY, id); } catch (e) {}
  }
  return id;
}

/* بيانات المستخدم الحالي: من safr_user (Clerk) أو من window.Clerk أو زائر */
function getCurrentUser() {
  var saved = null;
  try { saved = JSON.parse(localStorage.getItem(USER_KEY) || 'null'); } catch (e) { saved = null; }
  if (saved && saved.id) return saved;

  if (window.Clerk && window.Clerk.user) {
    var u = window.Clerk.user;
    var name = u.fullName || u.firstName || 'مستخدم';
    return {
      id: u.id,
      name: name,
      email: (u.primaryEmailAddress && u.primaryEmailAddress.emailAddress) || '',
      initials: name.charAt(0) || 'م'
    };
  }

  return { id: getGuestId(), name: 'زائر', email: '', initials: 'ز' };
}

/* هل المنشور بتاع المستخدم الحالي؟ */
function isOwnPost(p) {
  var me = getCurrentUser();
  return !!p.authorId && p.authorId === me.id;
}

/* ============================================================
   (3) أدوات العرض
   ============================================================ */
function escapeHTML(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* نص آمن + إبراز الـ hashtags + احترام الأسطر الجديدة */
function formatPostContent(str) {
  return escapeHTML(str)
    .replace(/\n/g, '<br>')
    .replace(/(#[\u0600-\u06FF0-9A-Za-z_]+)/g, '<span class="hashtag">$1</span>');
}

/* "منذ 5 دقائق" */
function timeAgo(ts) {
  var diff = Date.now() - (ts || 0);
  if (diff < 0) diff = 0;

  var mins = Math.floor(diff / 60000);
  if (mins < 1) return 'الآن';
  if (mins === 1) return 'منذ دقيقة';
  if (mins < 60) return 'منذ ' + mins + ' دقيقة';

  var hrs = Math.floor(mins / 60);
  if (hrs === 1) return 'منذ ساعة';
  if (hrs < 24) return 'منذ ' + hrs + ' ساعات';

  var days = Math.floor(hrs / 24);
  if (days === 1) return 'منذ يوم';
  if (days < 30) return 'منذ ' + days + ' أيام';

  return new Date(ts).toLocaleDateString('ar-EG');
}

/* كود الدولة من اسمها */
function countryCodeFromName(name) {
  if (typeof countries !== 'undefined' && Array.isArray(countries)) {
    var c = countries.find(function (x) { return x.name === name; });
    if (c && c.code) return c.code;
  }
  return 'eg';
}

/* تعديل نص عنصر بالمعرّف */
function setElText(id, text) {
  var el = document.getElementById(id);
  if (el) el.textContent = text;
}

/* ============================================================
   (4) إنشاء / تعديل / حذف منشور
   ============================================================ */
function createPost(content, image, country) {
  var me = getCurrentUser();
  var cName = country || me.country || 'مصر';

  var post = {
    id: uid('p'),
    author: me.name || 'مستخدم',
    authorId: me.id,
    authorAvatar: me.initials || 'م',
    authorCountry: cName,
    authorCountryCode: countryCodeFromName(cName),
    verified: false,
    feed: currentPostFilter === 'groups' ? 'groups' : 'friends',
    content: content || '',
    image: image || null,
    createdAt: Date.now(),
    editedAt: null,
    likes: [],
    comments: [],
    shares: 0
  };

  posts.unshift(post);   // المنشور الجديد يظهر فوق خالص
  savePosts();
  renderPosts();
  return post;
}

function deletePost(postId) {
  var p = posts.find(function (x) { return x.id === postId; });
  if (!p) return;
  if (!isOwnPost(p)) { showToast('مش ممكن تحذف منشور حد تاني'); return; }
  if (!window.confirm('متأكد إنك عايز تحذف المنشور ده؟')) return;

  posts = posts.filter(function (x) { return x.id !== postId; });
  savedPosts = savedPosts.filter(function (id) { return id !== postId; });
  savePosts();
  saveSavedPosts();
  hideMoreMenu();
  renderPosts();
  showToast('تم حذف المنشور 🗑️');
}

/* تعديل منشور — بيفتح نفس المودال في وضع التعديل */
function editPost(postId) {
  var p = posts.find(function (x) { return x.id === postId; });
  if (!p) return;
  if (!isOwnPost(p)) { showToast('مش ممكن تعدّل منشور حد تاني'); return; }

  hideMoreMenu();
  editingPostId = postId;
  pendingPostImage = p.image || null;

  openPostModal();
  setElText('postModalTitle', 'تعديل المنشور');
  setElText('postSubmitBtn', 'حفظ التعديل');

  var ta = document.getElementById('postContent');
  if (ta) { ta.value = p.content || ''; ta.focus(); }
  renderImagePreview();
}

/* ============================================================
   (5) الإعجاب / الحفظ / المشاركة
   ============================================================ */
function toggleLike(postId, btn) {
  var p = posts.find(function (x) { return x.id === postId; });
  if (!p) return;

  var me = getCurrentUser();
  var idx = p.likes.indexOf(me.id);
  var liked;

  if (idx === -1) { p.likes.push(me.id); liked = true; }   // إعجاب
  else { p.likes.splice(idx, 1); liked = false; }          // إلغاء الإعجاب

  savePosts();   // ← الإعجاب يتخزّن فوراً في localStorage

  if (btn) {
    btn.classList.toggle('liked', liked);
    var lbl = btn.querySelector('span');
    if (lbl) lbl.textContent = liked ? 'أعجبني' : 'إعجاب';
  }

  var counter = document.getElementById('likes-' + postId);
  if (counter) {
    counter.textContent = p.likes.length > 0 ? (p.likes.length + ' شخص') : 'لا يوجد إعجابات';
  }
}

/* حفظ / إلغاء حفظ المنشور في قائمة المحفوظات */
function savePost(postId, btn) {
  var idx = savedPosts.indexOf(postId);
  var added = idx === -1;

  if (added) savedPosts.push(postId);
  else savedPosts.splice(idx, 1);

  saveSavedPosts();

  if (btn) {
    btn.classList.toggle('saved', added);
    var lbl = btn.querySelector('span');
    if (lbl) lbl.textContent = added ? 'محفوظ' : 'حفظ';
  }
  showToast(added ? 'تم حفظ المنشور 🔖' : 'تم إزالة المنشور من المحفوظات');
}

/* مشاركة: navigator.share لو متاح، وإلا نسخ النص + الرابط */
async function sharePost(postId) {
  var p = posts.find(function (x) { return x.id === postId; });
  if (!p) return;

  p.shares = (p.shares || 0) + 1;
  savePosts();

  var sharesEl = document.getElementById('shares-' + postId);
  if (sharesEl) sharesEl.textContent = p.shares + ' مشاركة';

  var text = p.content ? p.content.slice(0, 120) : 'منشور من مجتمع سافر';
  var url = window.location.origin + window.location.pathname + '#community-' + p.id;

  if (navigator.share) {
    try {
      await navigator.share({ title: 'مجتمع سافر', text: text, url: url });
      showToast('تمت المشاركة ✅');
      return;
    } catch (err) {
      if (err && err.name === 'AbortError') return;   // المستخدم ألغى المشاركة
    }
  }

  copyToClipboard(text + '\n' + url);
}

function copyToClipboard(str) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(str).then(
      function () { showToast('تم نسخ المنشور والرابط ✅'); },
      function () { legacyCopy(str); }
    );
    return;
  }
  legacyCopy(str);
}

/* طريقة قديمة للنسخ (fallback للمتصفحات القديمة) */
function legacyCopy(str) {
  try {
    var ta = document.createElement('textarea');
    ta.value = str;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '-1000px';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('تم نسخ المنشور والرابط ✅');
  } catch (e) {
    showToast('تعذّر النسخ');
  }
}

/* ============================================================
   (6) التعليقات
   ============================================================ */
function toggleComments(postId) {
  var box = document.getElementById('comments-' + postId);
  if (!box) return;

  expandedComments[postId] = !expandedComments[postId];
  box.style.display = expandedComments[postId] ? 'block' : 'none';

  if (expandedComments[postId]) {
    var inp = document.getElementById('commentInput-' + postId);
    if (inp) inp.focus();
  }
}

/* Enter يرسل التعليق (و Shift+Enter سطر جديد) */
function handleComment(event, postId) {
  if (event && event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    submitComment(postId);
  }
}

function submitComment(postId) {
  var input = document.getElementById('commentInput-' + postId);
  if (!input) return;

  var text = (input.value || '').trim();
  if (!text) { showToast('اكتب تعليق الأول ✍️'); input.focus(); return; }

  var p = posts.find(function (x) { return x.id === postId; });
  if (!p) return;

  var me = getCurrentUser();
  p.comments.push({
    id: uid('c'),
    author: me.name || 'مستخدم',
    authorId: me.id,
    authorAvatar: me.initials || 'م',
    content: text,
    createdAt: Date.now()
  });

  expandedComments[postId] = true;
  savePosts();
  renderPosts();

  var box = document.getElementById('comments-' + postId);
  if (box) box.style.display = 'block';
  var inp = document.getElementById('commentInput-' + postId);
  if (inp) inp.focus();

  showToast('تم إضافة التعليق 💬');
}

function deleteComment(postId, commentId) {
  var p = posts.find(function (x) { return x.id === postId; });
  if (!p) return;

  var c = p.comments.find(function (x) { return x.id === commentId; });
  if (!c) return;

  var me = getCurrentUser();
  if (c.authorId !== me.id) { showToast('مش ممكن تحذف تعليق حد تاني'); return; }
  if (!window.confirm('تحذف التعليق ده؟')) return;

  p.comments = p.comments.filter(function (x) { return x.id !== commentId; });
  expandedComments[postId] = true;
  savePosts();
  renderPosts();

  var box = document.getElementById('comments-' + postId);
  if (box) box.style.display = 'block';
  showToast('تم حذف التعليق');
}

/* ============================================================
   (7) المودال (إنشاء / تعديل منشور)
   ============================================================ */
function openPostModal(mode) {
  var modal = document.getElementById('postModal');
  if (!modal) return;

  var me = getCurrentUser();

  if (!editingPostId) {
    // فتح جديد → تفريغ كل حاجة
    pendingPostImage = null;
    var ta0 = document.getElementById('postContent');
    if (ta0) ta0.value = '';
    renderImagePreview();
    setElText('postModalTitle', 'إنشاء منشور');
    setElText('postSubmitBtn', 'نشر');
  }

  setElText('modalAvatar', me.initials || 'م');
  setElText('modalAuthor', me.name || 'مستخدم');
  setElText('modalAuthorMeta', 'سيُنشر للعامة');

  modal.classList.add('show');
  document.body.classList.add('modal-open');

  if (mode === 'image') {
    setTimeout(function () {
      var f = document.getElementById('postImage');
      if (f) f.click();
    }, 160);
  } else if (!editingPostId) {
    setTimeout(function () {
      var ta = document.getElementById('postContent');
      if (ta) ta.focus();
    }, 120);
  }
}

function closePostModal() {
  var modal = document.getElementById('postModal');
  if (modal) modal.classList.remove('show');
  document.body.classList.remove('modal-open');

  editingPostId = null;
  pendingPostImage = null;

  var ta = document.getElementById('postContent');
  if (ta) ta.value = '';
  var file = document.getElementById('postImage');
  if (file) file.value = '';

  renderImagePreview();
  setElText('postModalTitle', 'إنشاء منشور');
  setElText('postSubmitBtn', 'نشر');
}

function submitPost() {
  var ta = document.getElementById('postContent');
  var text = ta ? (ta.value || '').trim() : '';
  var image = pendingPostImage;

  if (!text && !image) { showToast('اكتب حاجة أو ضيف صورة الأول ✍️'); return; }

  // ---- وضع التعديل ----
  if (editingPostId) {
    var p = posts.find(function (x) { return x.id === editingPostId; });
    if (p) {
      p.content = text;
      p.image = image;
      p.editedAt = Date.now();
      savePosts();
      showToast('تم تعديل المنشور ✅');
    }
    closePostModal();
    renderPosts();
    return;
  }

  // ---- وضع النشر الجديد ----
  var me = getCurrentUser();
  createPost(text, image, me.country || 'مصر');
  closePostModal();
  showToast('تم نشر منشورك 🎉');

  var c = document.getElementById('postsContainer');
  if (c && c.scrollIntoView && currentPostFilter === 'all') {
    try { c.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {}
  }
}

/* --- رفع الصور: FileReader → Base64 → ضغط --- */
function handleImageUpload(input) {
  var file = input && input.files && input.files[0];
  if (!file) return;

  if (!/^image\//.test(file.type)) { showToast('اختار صورة صحيحة'); input.value = ''; return; }
  if (file.size > 12 * 1024 * 1024) { showToast('الصورة كبيرة جداً (الحد 12MB)'); input.value = ''; return; }

  var reader = new FileReader();
  reader.onload = function (e) {
    compressImage(e.target.result, function (out) {
      pendingPostImage = out;
      renderImagePreview();
      showToast('تم إضافة الصورة 🖼️');
    });
  };
  reader.onerror = function () { showToast('تعذّر قراءة الصورة'); };
  reader.readAsDataURL(file);
}

/* ضغط/تصغير الصورة قبل الحفظ عشان localStorage ما يتملاش */
function compressImage(dataUrl, cb) {
  try {
    var img = new Image();
    img.onload = function () {
      try {
        var MAX = 1280;
        var w = img.width || MAX;
        var h = img.height || MAX;
        var scale = Math.min(1, MAX / Math.max(w, h));
        var cw = Math.max(1, Math.round(w * scale));
        var ch = Math.max(1, Math.round(h * scale));

        var cv = document.createElement('canvas');
        cv.width = cw;
        cv.height = ch;
        var ctx = cv.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, cw, ch);
        ctx.drawImage(img, 0, 0, cw, ch);

        cb(cv.toDataURL('image/jpeg', 0.82));
      } catch (err) { cb(dataUrl); }
    };
    img.onerror = function () { cb(dataUrl); };
    img.src = dataUrl;
  } catch (err) { cb(dataUrl); }
}

/* معاينة الصورة داخل المودال */
function renderImagePreview() {
  var box = document.getElementById('imagePreview');
  if (!box) return;

  if (!pendingPostImage) {
    box.innerHTML = '';
    box.style.display = 'none';
    return;
  }

  box.style.display = 'block';
  box.innerHTML =
    '<div class="fb-preview-wrap">' +
      '<img src="' + pendingPostImage + '" alt="معاينة الصورة">' +
      '<button type="button" class="fb-preview-remove" onclick="removePendingImage()" title="إزالة الصورة">✕</button>' +
    '</div>';
}

function removePendingImage() {
  pendingPostImage = null;
  renderImagePreview();
  var f = document.getElementById('postImage');
  if (f) f.value = '';
}

/* ============================================================
   (8) قائمة "⋯" (تعديل / حذف لصاحب المنشور فقط)
   ============================================================ */
function showMoreMenu(postId, event) {
  if (event && event.stopPropagation) event.stopPropagation();   // مايقفلش القائمة فوراً
  hideMoreMenu();

  var p = posts.find(function (x) { return x.id === postId; });
  if (!p) return;

  var mine = isOwnPost(p);

  var menu = document.createElement('div');
  menu.className = 'fb-more-menu';
  menu.id = 'fbMoreMenu';

  if (mine) {
    menu.innerHTML =
      '<button type="button" onclick="editPost(\'' + postId + '\')">' +
        '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/></svg>' +
        '<span>تعديل المنشور</span>' +
      '</button>' +
      '<button type="button" class="danger" onclick="deletePost(\'' + postId + '\')">' +
        '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>' +
        '<span>حذف المنشور</span>' +
      '</button>';
  } else {
    menu.innerHTML =
      '<div class="fb-more-note">المنشور ده مش بتاعك 👀</div>' +
      '<button type="button" onclick="hidePost(\'' + postId + '\')">' +
        '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><path d="M1 1l22 22"/></svg>' +
        '<span>إخفاء المنشور</span>' +
      '</button>';
  }

  document.body.appendChild(menu);

  // نحدّد موضع القائمة تحت زرار "⋯" نفسه (position:absolute → إحداثيات الصفحة)
  var rect = (event && event.currentTarget) ? event.currentTarget.getBoundingClientRect() : null;
  if (rect) {
    var sx = window.pageXOffset || document.documentElement.scrollLeft || 0;
    var sy = window.pageYOffset || document.documentElement.scrollTop || 0;
    menu.style.top = (rect.bottom + sy + 6) + 'px';
    var left = rect.right + sx - menu.offsetWidth;
    if (left < 8) left = 8;
    menu.style.left = left + 'px';
  }

  moreMenuEl = menu;

  // أي كليك أو سكرول برّه يقفل القائمة
  setTimeout(function () {
    document.addEventListener('click', hideMoreMenu, { once: true });
    window.addEventListener('scroll', hideMoreMenu, { once: true, passive: true });
  }, 0);
}

function hideMoreMenu() {
  if (moreMenuEl && moreMenuEl.parentNode) moreMenuEl.parentNode.removeChild(moreMenuEl);
  moreMenuEl = null;

  var stray = document.getElementById('fbMoreMenu');
  if (stray && stray.parentNode) stray.parentNode.removeChild(stray);
}

/* إخفاء منشور حد تاني من العرض بتاعك (محلي بس) */
function hidePost(postId) {
  hideMoreMenu();
  posts = posts.filter(function (x) { return x.id !== postId; });
  savePosts();
  renderPosts();
  showToast('تم إخفاء المنشور');
}

/* ============================================================
   (9) عرض المنشورات (Render)
   ============================================================ */
const VERIFIED_SVG = '<svg class="fb-verified" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1.5l2.4 1.9 3-.4 1.2 2.9 2.9 1.2-.4 3 1.9 2.4-1.9 2.4.4 3-2.9 1.2-1.2 2.9-3-.4L12 22.5l-2.4-1.9-3 .4-1.2-2.9-2.9-1.2.4-3L1 12l1.9-2.4-.4-3 2.9-1.2 1.2-2.9 3 .4L12 1.5z" fill="#1877F2"/><path d="M9.2 12.3l1.8 1.8 3.9-4.2" fill="none" stroke="#fff" stroke-width="2"/></svg>';

function renderPosts() {
  const container = document.getElementById('postsContainer');
  if (!container) return;

  const me = getCurrentUser();

  // بنعرض: منشورات التاب الحالي + كل منشوراتك (في أي تاب)
  const visible = posts.filter(function (p) {
    return currentPostFilter === 'all'
      || p.feed === currentPostFilter
      || (p.authorId && p.authorId === me.id);
  });

  if (visible.length === 0) {
    container.innerHTML = `
      <div class="fb-empty">
        <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <p>مفيش منشورات هنا لسه 👀</p>
        <p class="fb-empty-sub">كن أول واحد يشارك تجربته!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = visible.map(function (p) {
    return buildPostHTML(p, me);
  }).join('');
}

/* بناء HTML لمنشور واحد */
function buildPostHTML(p, me) {
  var liked = p.likes.indexOf(me.id) !== -1;
  var saved = savedPosts.indexOf(p.id) !== -1;
  var mine = isOwnPost(p);
  var likesCount = p.likes.length;
  var commentsCount = p.comments.length;
  var open = !!expandedComments[p.id];

  var flagImg = p.authorCountryCode
    ? '<img class="fb-meta-flag" src="' + flagUrl(p.authorCountryCode, 'w40') +
      '" onerror="this.onerror=null;this.src=\'' + getFlag(p.authorCountryCode) +
      '\'" alt="' + escapeHTML(p.authorCountry) + '">'
    : '';

  var commentsHTML = (commentsCount === 0)
    ? '<div class="fb-no-comments">كن أول من يعلّق 💬</div>'
    : p.comments.map(function (c) { return buildCommentHTML(p.id, c, me); }).join('');

  return `
    <div class="fb-post" id="post-${p.id}">
      <div class="fb-post-head">
        <div class="fb-avatar">${escapeHTML(p.authorAvatar)}</div>
        <div class="fb-post-info">
          <div class="fb-post-author">
            <h4>${escapeHTML(p.author)}${mine ? ' <span class="fb-you">(أنت)</span>' : ''}</h4>
            ${p.verified ? VERIFIED_SVG : ''}
          </div>
          <div class="fb-post-meta">
            ${flagImg}
            ${p.authorCountry ? '<span>' + escapeHTML(p.authorCountry) + '</span><span>·</span>' : ''}
            <span>${timeAgo(p.createdAt)}</span>
            ${p.editedAt ? '<span>·</span><span>تم التعديل</span>' : ''}
            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
        </div>
        <button class="fb-more-btn" onclick="showMoreMenu('${p.id}', event)" title="خيارات المنشور">⋯</button>
      </div>

      ${p.content ? '<div class="fb-post-content"><p>' + formatPostContent(p.content) + '</p></div>' : ''}

      ${p.image ? '<div class="fb-post-media" onclick="openImageViewer(this.querySelector(\'img\').src)"><img src="' + p.image + '" alt="صورة المنشور" loading="lazy"></div>' : ''}

      <div class="fb-post-stats">
        <div class="fb-post-likes">
          <span class="fb-like-icon">&#10084;</span>
          <span id="likes-${p.id}">${likesCount > 0 ? likesCount + ' شخص' : 'لا يوجد إعجابات'}</span>
        </div>
        <div class="fb-post-comments">
          <span class="fb-stat-link" onclick="toggleComments('${p.id}')">${commentsCount} تعليق</span>
          <span>·</span>
          <span id="shares-${p.id}">${p.shares || 0} مشاركة</span>
        </div>
      </div>

      <div class="fb-post-actions">
        <button class="fb-action ${liked ? 'liked' : ''}" onclick="toggleLike('${p.id}', this)">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span>${liked ? 'أعجبني' : 'إعجاب'}</span>
        </button>
        <button class="fb-action" onclick="toggleComments('${p.id}')">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <span>تعليق</span>
        </button>
        <button class="fb-action" onclick="sharePost('${p.id}')">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <path d="M16 6l-4-4-4 4"/>
            <path d="M12 2v13"/>
          </svg>
          <span>مشاركة</span>
        </button>
        <button class="fb-action ${saved ? 'saved' : ''}" onclick="savePost('${p.id}', this)">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
          <span>${saved ? 'محفوظ' : 'حفظ'}</span>
        </button>
      </div>

      <div class="fb-post-comments-section" id="comments-${p.id}" style="display:${open ? 'block' : 'none'}">
        <div class="fb-comments-list">${commentsHTML}</div>
        <div class="fb-comment-input-wrap">
          <div class="fb-avatar small">${escapeHTML(me.initials || 'م')}</div>
          <input class="fb-comment-input" id="commentInput-${p.id}" placeholder="اكتب تعليق..." onkeydown="handleComment(event, '${p.id}')">
          <button type="button" class="fb-comment-send" onclick="submitComment('${p.id}')">إرسال</button>
        </div>
      </div>
    </div>
  `;
}

/* بناء HTML لتعليق واحد */
function buildCommentHTML(postId, c, me) {
  var mine = c.authorId && c.authorId === me.id;

  return `
    <div class="fb-comment-item">
      <div class="fb-avatar small">${escapeHTML(c.authorAvatar || 'م')}</div>
      <div class="fb-comment-bubble">
        <div class="fb-comment-top">
          <h5>${escapeHTML(c.author)}${mine ? ' (أنت)' : ''}</h5>
          <span class="fb-comment-time">${timeAgo(c.createdAt)}</span>
        </div>
        <p>${formatPostContent(c.content)}</p>
      </div>
      ${mine ? '<button type="button" class="fb-comment-del" onclick="deleteComment(\'' + postId + '\',\'' + c.id + '\')" title="حذف التعليق">🗑</button>' : ''}
    </div>
  `;
}

/* --- تحميل البيانات المحفوظة عند بدء التطبيق --- */
posts = loadPosts();
savedPosts = loadSavedPosts();

/* تبويبات المجتمع: الرئيسية / أصدقاء / مجتمعات */
function filterPosts(filter, btn) {
  currentPostFilter = filter || 'all';
  document.querySelectorAll('.fb-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderPosts();
}

/* ملاحظة: دالة toggleLike بقيت فوق في قسم المجتمع (بتشتغل بالـ id مش بالفهرس) */

/* ============================================================
   7.C COMMUNITY EXTRA PAGES
   عرض الصور / القصص / الإشعارات / الرسائل / الأصدقاء / المجتمعات
   كل البيانات بتتخزّن في localStorage.
   ============================================================ */

/* مفاتيح التخزين */
const NOTIFICATIONS_KEY = 'safr_notifications';
const CONVERSATIONS_KEY = 'safr_conversations';
const FRIENDS_KEY       = 'safr_friends';
const GROUPS_KEY        = 'safr_groups';

/* قراءة/كتابة JSON بشكل آمن */
function loadJSON(key, fallback) {
  try {
    var raw = localStorage.getItem(key);
    if (!raw) return fallback;
    var val = JSON.parse(raw);
    return (val === null || val === undefined) ? fallback : val;
  } catch (e) { return fallback; }
}

function saveJSON(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); return true; }
  catch (e) { showToast('⚠️ مساحة التخزين مليانة'); return false; }
}

/* نفكّ قفل السكرول بس لما مفيش أي نافذة مفتوحة */
function releaseModalLock() {
  var anyOpen = document.querySelector('.fb-modal.show, .fb-image-viewer.show, .fb-story-viewer.show');
  if (!anyOpen) document.body.classList.remove('modal-open');
}

/* ---------- (7.C.1) عارض الصور Full-Screen ---------- */
function openImageViewer(src) {
  if (!src) return;

  var viewer = document.getElementById('imageViewer');
  var img = document.getElementById('imageViewerImg');
  if (!viewer || !img) return;

  img.src = src;
  viewer.classList.add('show');
  document.body.classList.add('modal-open');
}

function closeImageViewer() {
  var viewer = document.getElementById('imageViewer');
  if (viewer) viewer.classList.remove('show');

  var img = document.getElementById('imageViewerImg');
  if (img) img.removeAttribute('src');

  releaseModalLock();
}

/* سحب لأسفل على الموبايل → يقفل عارض الصور */
(function enableImageViewerSwipe() {
  var startY = 0, startX = 0, dragging = false;

  document.addEventListener('touchstart', function (e) {
    var viewer = document.getElementById('imageViewer');
    if (!viewer || !viewer.classList.contains('show')) return;
    var t = e.touches[0];
    if (!t) return;
    startY = t.clientY;
    startX = t.clientX;
    dragging = true;
  }, { passive: true });

  document.addEventListener('touchmove', function (e) {
    if (!dragging) return;
    var t = e.touches[0];
    if (!t) return;
    var dy = t.clientY - startY;
    if (dy > 90 && Math.abs(t.clientX - startX) < 80) {
      dragging = false;
      closeImageViewer();
    }
  }, { passive: true });

  document.addEventListener('touchend', function () { dragging = false; }, { passive: true });
})();

/* ---------- (7.C.2) عارض القصص Full-Screen ---------- */
const STORY_DURATION = 5000;   // 5 ثواني لكل قصة

const STORIES = [
  { id:'story_1', user:'أحمد محمود', avatar:'أ', timeText:'منذ ساعتين',
    gradient:'linear-gradient(160deg,#1877F2,#0A4FB5)', emoji:'🇩🇪',
    caption:'وصلت برلين الحمد لله!', image:null },
  { id:'story_2', user:'سارة علي', avatar:'س', timeText:'منذ 3 ساعات',
    gradient:'linear-gradient(160deg,#10B981,#059669)', emoji:'🎓',
    caption:'اتقبلت في منحة كندا 🎉', image:null },
  { id:'story_3', user:'محمد حسن', avatar:'م', timeText:'منذ 5 ساعات',
    gradient:'linear-gradient(160deg,#F59E0B,#D97706)', emoji:'✈️',
    caption:'رحلة عمل قصيرة لتركيا', image:null },
  { id:'story_4', user:'نور الهدى', avatar:'ن', timeText:'منذ 8 ساعات',
    gradient:'linear-gradient(160deg,#8B5CF6,#6D28D9)', emoji:'💱',
    caption:'أول تحويل من السعودية 🇸🇦', image:null },
  { id:'story_5', user:'ليلى عبد الله', avatar:'ل', timeText:'منذ 12 ساعة',
    gradient:'linear-gradient(160deg,#F33E58,#C2185B)', emoji:'📚',
    caption:'نصايح مذاكرة الطب في الخارج', image:null }
];

let currentStoryIndex = -1;
let storyTimer = null;

function openStoryViewer(storyIndex) {
  var viewer = document.getElementById('storyViewer');
  if (!viewer) return;

  if (typeof storyIndex !== 'number' || isNaN(storyIndex) || storyIndex < 0) storyIndex = 0;
  if (storyIndex >= STORIES.length) storyIndex = STORIES.length - 1;

  viewer.classList.add('show');
  document.body.classList.add('modal-open');
  showStory(storyIndex);
}

/* عرض قصة معيّنة + إعادة تشغيل شريط التقدم */
function showStory(index) {
  if (index < 0) index = 0;
  if (index >= STORIES.length) { closeStoryViewer(); return; }

  currentStoryIndex = index;
  var s = STORIES[index];

  setElText('storyAvatar', s.avatar || 'أ');
  setElText('storyName', s.user || 'مستخدم');
  setElText('storyTime', s.timeText || 'الآن');

  var visual = document.getElementById('storyVisual');
  if (visual) {
    if (s.image) {
      visual.style.background = '#000';
      visual.innerHTML = '<img src="' + s.image + '" alt="قصة">';
    } else {
      visual.style.background = s.gradient || 'linear-gradient(160deg,#1877F2,#0A4FB5)';
      visual.innerHTML =
        '<span class="fb-story-emoji">' + (s.emoji || '✨') + '</span>' +
        '<span class="fb-story-caption">' + escapeHTML(s.caption || '') + '</span>';
    }
  }

  restartStoryBar();
}

/* شريط التقدم: نعيد الأنيميشن من الأول + مؤقّت للانتقال التلقائي */
function restartStoryBar() {
  var bar = document.getElementById('storyBar');
  if (bar) {
    bar.style.animation = 'none';
    void bar.offsetWidth;   // إجبار المتصفح يعيد التشغيل من الصفر
    bar.style.animation = 'fbStoryBar ' + (STORY_DURATION / 1000) + 's linear forwards';
  }

  if (storyTimer) clearTimeout(storyTimer);
  storyTimer = setTimeout(function () { nextStory(); }, STORY_DURATION);
}

function closeStoryViewer() {
  var viewer = document.getElementById('storyViewer');
  if (viewer) viewer.classList.remove('show');

  if (storyTimer) { clearTimeout(storyTimer); storyTimer = null; }
  currentStoryIndex = -1;
  releaseModalLock();
}

function nextStory() {
  if (currentStoryIndex < 0) return;
  showStory(currentStoryIndex + 1);
}

function prevStory() {
  if (currentStoryIndex < 0) return;
  showStory(currentStoryIndex - 1);
}

/* ---------- (7.C.3) الإشعارات ---------- */
const NOTIF_TYPES = {
  like:    { icon:'❤️', cls:'like' },
  comment: { icon:'💬', cls:'comment' },
  follow:  { icon:'👤', cls:'follow' },
  share:   { icon:'↗️', cls:'share' }
};

/* 5 إشعارات افتراضية — تظهر أول مرة بس */
function seedNotifications() {
  var now = Date.now(), MIN = 60 * 1000, H = 60 * MIN;
  return [
    { id:'notif_1', type:'like',    userId:'user_1', userAvatar:'أ', userName:'أحمد محمود',   postId:'seed_1', content:'عجب بمنشورك',      createdAt: now - 5 * MIN,  read:false },
    { id:'notif_2', type:'comment', userId:'user_2', userAvatar:'س', userName:'سارة علي',     postId:'seed_1', content:'علّقت على منشورك', createdAt: now - 25 * MIN, read:false },
    { id:'notif_3', type:'follow',  userId:'user_3', userAvatar:'م', userName:'محمد حسن',     postId:null,     content:'بدأ يتابعك',       createdAt: now - 2 * H,    read:false },
    { id:'notif_4', type:'share',   userId:'user_4', userAvatar:'ن', userName:'نور الهدى',    postId:'seed_2', content:'شارك منشورك',      createdAt: now - 6 * H,    read:true  },
    { id:'notif_5', type:'like',    userId:'user_5', userAvatar:'ل', userName:'ليلى عبد الله', postId:'seed_2', content:'عجب بمنشورك',      createdAt: now - 26 * H,   read:true  }
  ];
}

let notifications = [];

function loadNotifications() {
  var list = loadJSON(NOTIFICATIONS_KEY, null);

  if (!Array.isArray(list) || list.length === 0) {
    list = seedNotifications();
    saveJSON(NOTIFICATIONS_KEY, list);
  }

  notifications = list.map(function (n) {
    n = n || {};
    return {
      id: n.id || uid('notif'),
      type: NOTIF_TYPES[n.type] ? n.type : 'like',
      userId: n.userId || '',
      userAvatar: n.userAvatar || (n.userName ? String(n.userName).charAt(0) : 'م'),
      userName: n.userName || 'مستخدم',
      postId: n.postId || null,
      content: n.content || 'تفاعل مع منشورك',
      createdAt: n.createdAt || Date.now(),
      read: !!n.read
    };
  });
}

function saveNotifications() { saveJSON(NOTIFICATIONS_KEY, notifications); }

function unreadNotificationsCount() {
  return notifications.filter(function (n) { return !n.read; }).length;
}

/* شارات الهيدر: 🔔 الإشعارات غير المقروءة + 💬 الرسائل غير المقروءة */
function updateNotificationsBadge() {
  var count = unreadNotificationsCount();
  var badge = document.getElementById('notifBadge');
  if (badge) {
    badge.textContent = count > 99 ? '99+' : String(count);
    badge.hidden = (count === 0);
  }

  var unreadMsgs = conversations.reduce(function (a, c) { return a + (c.unread || 0); }, 0);
  var msgBadge = document.getElementById('msgBadge');
  if (msgBadge) {
    msgBadge.textContent = unreadMsgs > 99 ? '99+' : String(unreadMsgs);
    msgBadge.hidden = (unreadMsgs === 0);
  }
}

function renderNotifications() {
  var box = document.getElementById('notificationsList');
  if (!box) return;

  if (!notifications.length) {
    box.innerHTML =
      '<div class="fb-empty">' +
        '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>' +
        '<p>مفيش إشعارات</p>' +
      '</div>';
    updateNotificationsBadge();
    return;
  }

  box.innerHTML = notifications.map(function (n) {
    var t = NOTIF_TYPES[n.type] || NOTIF_TYPES.like;
    return '' +
      '<div class="fb-notification-item' + (n.read ? '' : ' unread') + '" onclick="markAsRead(\'' + n.id + '\')">' +
        '<div class="fb-avatar">' + escapeHTML(n.userAvatar) + '</div>' +
        '<div class="fb-notif-body">' +
          '<p class="fb-notif-text"><b>' + escapeHTML(n.userName) + '</b> ' + escapeHTML(n.content) + '</p>' +
          '<span class="fb-notif-time">' + timeAgo(n.createdAt) + '</span>' +
        '</div>' +
        '<span class="fb-notification-icon ' + t.cls + '">' + t.icon + '</span>' +
      '</div>';
  }).join('');

  updateNotificationsBadge();
}

/* ضغط على إشعار → يتحدد كمقروء والعدّاد يقل */
function markAsRead(notifId) {
  var n = notifications.find(function (x) { return x.id === notifId; });
  if (!n) return;

  if (!n.read) {
    n.read = true;
    saveNotifications();
  }

  // لو الإشعار مرتبط بمنشور → نوديه للمنشور
  if (n.postId) {
    var p = posts.find(function (x) { return x.id === n.postId; });
    if (p) {
      var onCommunity = document.getElementById('page-community');
      if (!onCommunity || !onCommunity.classList.contains('active')) switchPage('community');
      expandedComments[n.postId] = true;
      renderPosts();
      var el = document.getElementById('post-' + n.postId);
      if (el && el.scrollIntoView) {
        try { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) {}
      }
      updateNotificationsBadge();
      return;
    }
  }

  renderNotifications();
}

function markAllAsRead() {
  var changed = false;
  notifications.forEach(function (n) { if (!n.read) { n.read = true; changed = true; } });

  if (changed) saveNotifications();
  renderNotifications();
  updateNotificationsBadge();
  showToast('تم تحديد كل الإشعارات كمقروءة ✅');
}

/* ---------- (7.C.4) الرسائل + المحادثة ---------- */
/* 5 محادثات افتراضية — تظهر أول مرة بس */
function seedConversations() {
  var now = Date.now(), MIN = 60 * 1000;
  function m(id, sender, text, minsAgo) {
    return { id: id, sender: sender, text: text, time: now - minsAgo * MIN };
  }
  return [
    { id:'conv_1', withUser:'أحمد محمود', withUserId:'user_1', avatar:'أ',
      messages:[
        m('m1','them','أهلاً! سمعت إنك مسافر برلين؟', 180),
        m('m2','me','أيوه الحمد لله 🇩🇪', 175),
        m('m3','them','لو محتاج مساعدة في السكن كلمني', 170),
        m('m4','them','عندي شقة فاضية قريبة من الجامعة', 12)
      ],
      unread:2, lastMessage:'عندي شقة فاضية قريبة من الجامعة', lastTime: now - 12 * MIN },

    { id:'conv_2', withUser:'سارة علي', withUserId:'user_2', avatar:'س',
      messages:[
        m('m1','them','مبروك على المنحة 🎉', 400),
        m('m2','me','الله يبارك فيك 🙏', 395),
        m('m3','them','لو عايزة نصايح للتحضير قوليلي', 90)
      ],
      unread:0, lastMessage:'لو عايزة نصايح للتحضير قوليلي', lastTime: now - 90 * MIN },

    { id:'conv_3', withUser:'محمد حسن', withUserId:'user_3', avatar:'م',
      messages:[
        m('m1','them','الإقامة الطلابية في تركيا بتاخد وقت', 700),
        m('m2','them','ابدأ الإجراءات من أول أسبوع', 60)
      ],
      unread:1, lastMessage:'ابدأ الإجراءات من أول أسبوع', lastTime: now - 60 * MIN },

    { id:'conv_4', withUser:'نور الهدى', withUserId:'user_4', avatar:'ن',
      messages:[
        m('m1','me','إيه أفضل طريقة للتحويل من السعودية؟', 1500),
        m('m2','them','جربت أكثر من تطبيق، هبعتلك التفاصيل', 1440)
      ],
      unread:0, lastMessage:'جربت أكثر من تطبيق، هبعتلك التفاصيل', lastTime: now - 24 * 60 * MIN },

    { id:'conv_5', withUser:'ليلى عبد الله', withUserId:'user_5', avatar:'ل',
      messages:[
        m('m1','them','نصايح مذاكرة الطب في الخارج؟', 2900),
        m('m2','them','خاصة أول سنة، بتفرق كتير', 2880),
        m('m3','them','رد عليّا لما تفضى 🙏', 2870)
      ],
      unread:3, lastMessage:'رد عليّا لما تفضى 🙏', lastTime: now - 2870 * MIN }
  ];
}

let conversations = [];
let currentConversationId = null;

function normalizeConversation(c) {
  c = c || {};
  return {
    id: c.id || uid('conv'),
    withUser: c.withUser || 'مستخدم',
    withUserId: c.withUserId || '',
    avatar: c.avatar || String(c.withUser || 'م').charAt(0),
    messages: Array.isArray(c.messages) ? c.messages.map(function (m) {
      m = m || {};
      return {
        id: m.id || uid('m'),
        sender: (m.sender === 'me') ? 'me' : 'them',
        text: m.text || '',
        time: m.time || Date.now()
      };
    }) : [],
    unread: (typeof c.unread === 'number') ? c.unread : 0,
    lastMessage: c.lastMessage || '',
    lastTime: c.lastTime || Date.now()
  };
}

function loadConversations() {
  var list = loadJSON(CONVERSATIONS_KEY, null);

  if (!Array.isArray(list) || list.length === 0) {
    list = seedConversations();
    saveJSON(CONVERSATIONS_KEY, list);
  }

  conversations = list.map(normalizeConversation);
}

function saveConversations() { saveJSON(CONVERSATIONS_KEY, conversations); }

function unreadMessagesCount() {
  return conversations.reduce(function (a, c) { return a + (c.unread || 0); }, 0);
}

/* قايمة المحادثات */
function renderMessagesPage() {
  var box = document.getElementById('conversationsList');
  if (!box) return;

  if (!conversations.length) {
    box.innerHTML =
      '<div class="fb-empty">' +
        '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
        '<p>مفيش محادثات — ابدأ محادثة جديدة</p>' +
      '</div>';
    updateNotificationsBadge();
    return;
  }

  var sorted = conversations.slice().sort(function (a, b) { return (b.lastTime || 0) - (a.lastTime || 0); });

  box.innerHTML = sorted.map(function (c) {
    return '' +
      '<div class="fb-conversation-item" onclick="openChat(\'' + c.id + '\')">' +
        '<div class="fb-avatar">' + escapeHTML(c.avatar) + '</div>' +
        '<div class="fb-conv-body">' +
          '<div class="fb-conv-top">' +
            '<h4>' + escapeHTML(c.withUser) + '</h4>' +
            '<span class="fb-conv-time">' + timeAgo(c.lastTime) + '</span>' +
          '</div>' +
          '<p class="fb-conv-last">' + escapeHTML(c.lastMessage || 'ابدأ المحادثة 💬') + '</p>' +
        '</div>' +
        (c.unread > 0 ? '<span class="fb-conv-unread">' + c.unread + '</span>' : '') +
      '</div>';
  }).join('');

  updateNotificationsBadge();
}

/* فتح محادثة واحدة */
function openChat(convId) {
  var c = conversations.find(function (x) { return x.id === convId; });
  if (!c) return;

  currentConversationId = convId;

  if (c.unread > 0) { c.unread = 0; saveConversations(); }

  switchPage('chat');
}

/* رسم رسائل المحادثة الحالية */
function renderChat() {
  var box = document.getElementById('chatMessages');
  if (!box) return;

  var c = conversations.find(function (x) { return x.id === currentConversationId; });

  if (!c) {
    box.innerHTML = '<div class="fb-empty"><p>اختار محادثة الأول</p></div>';
    return;
  }

  setElText('chatAvatar', c.avatar);
  setElText('chatTitle', c.withUser);
  setElText('chatStatus', 'متصل الآن');

  if (!c.messages.length) {
    box.innerHTML = '<div class="fb-chat-empty">ابدأ المحادثة مع ' + escapeHTML(c.withUser) + ' 💬</div>';
    return;
  }

  box.innerHTML = c.messages.map(function (m) {
    var mine = (m.sender === 'me');
    return '' +
      '<div class="fb-message-row' + (mine ? ' me' : '') + '">' +
        '<div class="fb-message-bubble' + (mine ? ' me' : '') + '">' +
          '<p>' + formatPostContent(m.text) + '</p>' +
          '<span class="fb-message-time">' + timeAgo(m.time) + '</span>' +
        '</div>' +
      '</div>';
  }).join('');

  // ننزل لآخر رسالة
  setTimeout(function () { box.scrollTop = box.scrollHeight; }, 30);
}

/* إرسال رسالة */
function sendMessage() {
  var input = document.getElementById('chatInput');
  if (!input) return;

  var text = (input.value || '').trim();
  if (!text) { showToast('اكتب رسالة الأول ✍️'); input.focus(); return; }

  var c = conversations.find(function (x) { return x.id === currentConversationId; });
  if (!c) { showToast('اختار محادثة الأول'); return; }

  c.messages.push({ id: uid('m'), sender: 'me', text: text, time: Date.now() });
  c.lastMessage = text;
  c.lastTime = Date.now();
  c.unread = 0;

  saveConversations();

  input.value = '';
  renderChat();
  input.focus();
}

/* محادثة جديدة: نفتح واحدة مع أول صديق لسه مفيش بينا محادثة */
function newConversation() {
  var existingIds = conversations.map(function (c) { return c.withUserId; });

  var candidate = friends.find(function (f) { return existingIds.indexOf(f.id) === -1; });
  if (!candidate) { showToast('كل أصدقائك عندهم محادثات بالفعل 😄'); return; }

  var conv = normalizeConversation({
    id: uid('conv'),
    withUser: candidate.name,
    withUserId: candidate.id,
    avatar: candidate.avatar,
    messages: [],
    unread: 0,
    lastMessage: 'ابدأ المحادثة 💬',
    lastTime: Date.now()
  });

  conversations.unshift(conv);
  saveConversations();

  showToast('تم إنشاء محادثة مع ' + candidate.name);
  openChat(conv.id);
}

/* ---------- (7.C.5) الأصدقاء ---------- */
/* 10 أصدقاء افتراضيين — أول مرة بس */
function seedFriends() {
  return [
    { id:'user_1',  name:'أحمد محمود',    avatar:'أ', country:'ألمانيا',   countryCode:'de', isFollowing:true,  isFollower:true,  followers:156, following:24,  isFriend:true },
    { id:'user_2',  name:'سارة علي',      avatar:'س', country:'كندا',      countryCode:'ca', isFollowing:true,  isFollower:true,  followers:842, following:120, isFriend:true },
    { id:'user_3',  name:'محمد حسن',      avatar:'م', country:'تركيا',     countryCode:'tr', isFollowing:false, isFollower:true,  followers:64,  following:210, isFriend:true },
    { id:'user_4',  name:'نور الهدى',     avatar:'ن', country:'السعودية',  countryCode:'sa', isFollowing:true,  isFollower:false, followers:390, following:88,  isFriend:true },
    { id:'user_5',  name:'ليلى عبد الله', avatar:'ل', country:'بريطانيا',  countryCode:'gb', isFollowing:false, isFollower:false, followers:27,  following:45,  isFriend:true },
    { id:'user_6',  name:'خالد إبراهيم',  avatar:'خ', country:'الإمارات',  countryCode:'ae', isFollowing:true,  isFollower:true,  followers:901, following:67,  isFriend:true },
    { id:'user_7',  name:'منى صالح',      avatar:'م', country:'فرنسا',     countryCode:'fr', isFollowing:false, isFollower:true,  followers:233, following:150, isFriend:true },
    { id:'user_8',  name:'عمر فؤاد',      avatar:'ع', country:'أمريكا',    countryCode:'us', isFollowing:true,  isFollower:false, followers:512, following:33,  isFriend:true },
    { id:'user_9',  name:'هبة رمضان',     avatar:'ه', country:'إيطاليا',   countryCode:'it', isFollowing:false, isFollower:false, followers:118, following:96,  isFriend:true },
    { id:'user_10', name:'يوسف الشريف',   avatar:'ي', country:'قطر',       countryCode:'qa', isFollowing:true,  isFollower:true,  followers:274, following:58,  isFriend:true }
  ];
}

/* اقتراحات لزر «إضافة صديق» */
const FRIEND_SUGGESTIONS = [
  { id:'user_11', name:'دينا مصطفى', avatar:'د', country:'إسبانيا',  countryCode:'es', isFollowing:false, isFollower:false, followers:87,  following:141, isFriend:true },
  { id:'user_12', name:'طارق عماد',  avatar:'ط', country:'هولندا',   countryCode:'nl', isFollowing:false, isFollower:false, followers:203, following:77,  isFriend:true },
  { id:'user_13', name:'رنا وليد',   avatar:'ر', country:'السويد',   countryCode:'se', isFollowing:false, isFollower:false, followers:341, following:29,  isFriend:true }
];

let friends = [];
let currentFriendFilter = 'all';

function normalizeFriend(f) {
  f = f || {};
  return {
    id: f.id || uid('user'),
    name: f.name || 'مستخدم',
    avatar: f.avatar || String(f.name || 'م').charAt(0),
    country: f.country || '',
    countryCode: f.countryCode || '',
    isFollowing: !!f.isFollowing,
    isFollower: !!f.isFollower,
    followers: (typeof f.followers === 'number') ? f.followers : 0,
    following: (typeof f.following === 'number') ? f.following : 0,
    isFriend: f.isFriend !== false
  };
}

function loadFriends() {
  var list = loadJSON(FRIENDS_KEY, null);

  if (!Array.isArray(list) || list.length === 0) {
    list = seedFriends();
    saveJSON(FRIENDS_KEY, list);
  }

  friends = list.map(normalizeFriend);
}

function saveFriends() { saveJSON(FRIENDS_KEY, friends); }

/* ---------- عرض صفحة الأصدقاء ---------- */
function friendFlagHTML(f) {
  if (!f.countryCode) return '';
  return '<img class="fb-meta-flag" src="' + flagUrl(f.countryCode, 'w40') +
    '" onerror="this.onerror=null;this.src=\'' + getFlag(f.countryCode) + '\'" alt="' + escapeHTML(f.country) + '">';
}

function renderFriendsPage() {
  var box = document.getElementById('friendsList');
  if (!box) return;

  var list = friends;
  if (currentFriendFilter === 'followers') list = friends.filter(function (f) { return f.isFollower; });
  if (currentFriendFilter === 'following') list = friends.filter(function (f) { return f.isFollowing; });

  if (!friends.length) {
    box.innerHTML =
      '<div class="fb-empty">' +
        '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' +
        '<p>مفيش أصدقاء لسه — اضغط «إضافة صديق»</p>' +
      '</div>';
    return;
  }

  if (!list.length) {
    box.innerHTML = '<div class="fb-empty"><p>مفيش ناس في التاب ده</p><p class="fb-empty-sub">جرّب تاب تاني 👆</p></div>';
    return;
  }

  box.innerHTML = list.map(function (f) {
    return '' +
      '<div class="fb-friend-item" id="friend-' + f.id + '">' +
        '<div class="fb-avatar">' + escapeHTML(f.avatar) + '</div>' +
        '<div class="fb-friend-body">' +
          '<h4>' + escapeHTML(f.name) + '</h4>' +
          '<div class="fb-friend-meta">' +
            friendFlagHTML(f) +
            (f.country ? '<span>' + escapeHTML(f.country) + '</span><span>·</span>' : '') +
            '<span>' + f.followers + ' متابع</span>' +
            '<span>·</span>' +
            '<span>يتابع ' + f.following + '</span>' +
          '</div>' +
        '</div>' +
        '<button class="fb-follow-btn' + (f.isFollowing ? ' following' : '') + '" type="button" ' +
          'onclick="toggleFollow(\'' + f.id + '\')">' +
          (f.isFollowing ? 'إلغاء المتابعة' : 'متابعة') +
        '</button>' +
      '</div>';
  }).join('');
}

/* تبديل «متابعة / إلغاء متابعة» */
function toggleFollow(userId) {
  var f = friends.find(function (x) { return x.id === userId; });
  if (!f) return;

  f.isFollowing = !f.isFollowing;
  if (f.isFollowing) f.followers = (f.followers || 0) + 1;
  else f.followers = Math.max(0, (f.followers || 0) - 1);

  saveFriends();
  renderFriendsPage();
  showToast(f.isFollowing ? ('بتتابع ' + f.name + ' الآن ✅') : ('قفلت متابعة ' + f.name));
}

/* فلترة التابات */
function filterFriends(type, btn) {
  currentFriendFilter = type || 'all';

  document.querySelectorAll('#friendsTabs .fb-sub-tab').forEach(function (b) {
    b.classList.toggle('active', b.dataset.ftab === currentFriendFilter);
  });

  renderFriendsPage();
}

/* إضافة صديق من الاقتراحات */
function addFriend() {
  var existing = friends.map(function (f) { return f.id; });
  var next = FRIEND_SUGGESTIONS.find(function (s) { return existing.indexOf(s.id) === -1; });

  if (!next) { showToast('مفيش اقتراحات جديدة دلوقتي 😄'); return; }

  friends.push(normalizeFriend(next));
  saveFriends();
  renderFriendsPage();
  showToast('تمت إضافة ' + next.name + ' لقائمة أصدقائك 🎉');
}

/* ---------- (7.C.6) المجتمعات ---------- */
/* 8 مجتمعات افتراضية — أول مرة بس */
function seedGroups() {
  return [
    { id:'group_1', name:'مصريون في ألمانيا',     description:'مجتمع للمصريين في ألمانيا',        avatar:'🇩🇪', members:12500, posts:234, isJoined:true,  type:'country'  },
    { id:'group_2', name:'دراسة الطب في الخارج',  description:'كل حاجة عن دراسة الطب بره',        avatar:'🩺', members:8400,  posts:156, isJoined:false, type:'study'    },
    { id:'group_3', name:'منح دراسية 2025',       description:'أحدث المنح الدراسية المتاحة',       avatar:'🎓', members:15200, posts:312, isJoined:true,  type:'study'    },
    { id:'group_4', name:'سياحة رخيصة',           description:'أرخص طرق السفر والإقامة',           avatar:'✈️', members:22100, posts:489, isJoined:false, type:'interest' },
    { id:'group_5', name:'مصريون في السعودية',    description:'مجتمع المصريين في السعودية',        avatar:'🇸🇦', members:18700, posts:401, isJoined:false, type:'country'  },
    { id:'group_6', name:'حياة في كندا',          description:'الإقامة والعمل والدراسة في كندا',    avatar:'🇨🇦', members:9600,  posts:178, isJoined:false, type:'country'  },
    { id:'group_7', name:'شغل عن بعد',            description:'فرص عمل أونلاين من أي مكان',        avatar:'💻', members:11300, posts:265, isJoined:true,  type:'interest' },
    { id:'group_8', name:'تعلم لغات',             description:'تعلم الألماني والإنجليزي والفرنسي',  avatar:'🗣️', members:7400,  posts:133, isJoined:false, type:'interest' }
  ];
}

let groups = [];
let currentGroupFilter = 'joined';

function normalizeGroup(g) {
  g = g || {};
  return {
    id: g.id || uid('group'),
    name: g.name || 'مجتمع',
    description: g.description || '',
    avatar: g.avatar || '🌍',
    members: (typeof g.members === 'number') ? g.members : 0,
    posts: (typeof g.posts === 'number') ? g.posts : 0,
    isJoined: !!g.isJoined,
    type: g.type || 'interest'
  };
}

function loadGroups() {
  var list = loadJSON(GROUPS_KEY, null);

  if (!Array.isArray(list) || list.length === 0) {
    list = seedGroups();
    saveJSON(GROUPS_KEY, list);
  }

  groups = list.map(normalizeGroup);
}

function saveGroups() { saveJSON(GROUPS_KEY, groups); }

/* رقم بفواصل: 12,500 */
function formatCount(n) {
  return String(n || 0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function renderGroupsPage() {
  var box = document.getElementById('groupsList');
  if (!box) return;

  var list = (currentGroupFilter === 'joined')
    ? groups.filter(function (g) { return g.isJoined; })
    : groups;

  if (!list.length) {
    box.innerHTML =
      '<div class="fb-empty">' +
        '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' +
        '<p>مشترك في أي مجتمع لسه</p>' +
        '<p class="fb-empty-sub">روح تاب «اكتشف» وانضم لمجتمع 👆</p>' +
      '</div>';
    return;
  }

  box.innerHTML = list.map(function (g) {
    return '' +
      '<div class="fb-group-card">' +
        '<div class="fb-group-cover">' + escapeHTML(g.avatar) + '</div>' +
        '<div class="fb-group-info">' +
          '<h4>' + escapeHTML(g.name) + '</h4>' +
          '<p class="fb-group-desc">' + escapeHTML(g.description) + '</p>' +
          '<div class="fb-group-meta">' +
            '<span>' + formatCount(g.members) + ' عضو</span>' +
            '<span>·</span>' +
            '<span>' + formatCount(g.posts) + ' منشور</span>' +
          '</div>' +
        '</div>' +
        '<button class="fb-join-btn' + (g.isJoined ? ' joined' : '') + '" type="button" ' +
          'onclick="toggleJoinGroup(\'' + g.id + '\')">' +
          (g.isJoined ? 'غادر' : 'انضم') +
        '</button>' +
      '</div>';
  }).join('');
}

/* انضم / غادر */
function toggleJoinGroup(groupId) {
  var g = groups.find(function (x) { return x.id === groupId; });
  if (!g) return;

  g.isJoined = !g.isJoined;
  g.members = g.isJoined ? (g.members + 1) : Math.max(0, g.members - 1);

  saveGroups();
  renderGroupsPage();
  showToast(g.isJoined ? ('انضممت لـ «' + g.name + '» 🎉') : ('غادرت «' + g.name + '»'));
}

/* تاب: المشترك بها / اكتشف */
function filterGroups(type, btn) {
  currentGroupFilter = (type === 'discover') ? 'discover' : 'joined';

  document.querySelectorAll('#groupsTabs .fb-sub-tab').forEach(function (b) {
    b.classList.toggle('active', b.dataset.gtab === currentGroupFilter);
  });

  renderGroupsPage();
}

/* ============================================================
   --- تحميل بيانات التواصل المحفوظة عند بدء التطبيق ---
   (زي ما بنعمل مع المنشورات: posts = loadPosts())
   ============================================================ */
loadNotifications();
loadConversations();
loadFriends();
loadGroups();
updateNotificationsBadge();

/* ============================================================
   8. PAGE SWITCHING
   التنقل بين الصفحات
   ============================================================ */
/* ============================================================
   7.B TOURISM / VISA SECTION
   قسم السياحة — تصنيف الدول حسب نوع التأشيرة للمصريين
   (البيانات في visa-data.js)
   ============================================================ */
let currentVisaFilter = 'all';

/* نص وصف نوع التأشيرة */
function getVisaLabel(type) {
  const labels = {
    'visa-free': 'بدون فيزا',
    'e-visa': 'فيزا إلكترونية',
    'on-arrival': 'فيزا عند الوصول',
    'visa-required': 'فيزا مطلوبة'
  };
  return labels[type] || type;
}

/* عدّاد كل تصنيف */
function countVisaTypes() {
  const counts = { 'visa-free': 0, 'e-visa': 0, 'on-arrival': 0, 'visa-required': 0 };
  if (typeof visaData === 'undefined' || !visaData.countries) return counts;
  Object.keys(visaData.countries).forEach(code => {
    const type = visaData.countries[code].visaType;
    if (counts[type] !== undefined) counts[type]++;
  });
  return counts;
}

/* رسم القسم: ملخّص الإحصائيات + التابات + كروت الدول (بدون أي أيقونات) */
function renderVisaSection() {
  const container = document.getElementById('visaCards');
  if (!container || typeof visaData === 'undefined' || !visaData.countries) return;

  const codesAll = Object.keys(visaData.countries);
  const total = codesAll.length;
  const counts = countVisaTypes();

  // (1) الملخّص المدمج: الإجمالي + رقم كل تصنيف جوّه الشرائح
  const totalEl = document.getElementById('vd-total');
  if (totalEl) totalEl.textContent = total;

  const chipIds = {
    'visa-free': 'vs-free',
    'e-visa': 'vs-evisa',
    'on-arrival': 'vs-arrival',
    'visa-required': 'vs-required'
  };
  Object.keys(chipIds).forEach(type => {
    const el = document.getElementById(chipIds[type]);
    if (el) el.textContent = counts[type];
  });

  // (2) عدّاد كل تاب
  document.querySelectorAll('.visa-tab').forEach(tab => {
    const el = tab.querySelector('.tab-count');
    if (!el) return;
    const f = tab.dataset.filter;
    el.textContent = (f === 'all') ? total : (counts[f] || 0);
  });

  // (2.ب) بطاقة السياحة في الصفحة الرئيسية (لو موجودة) — أرقام ملخّص سريعة
  const homeNum = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  homeNum('thc-free', counts['visa-free']);
  homeNum('thc-evisa', counts['e-visa']);
  homeNum('thc-required', counts['visa-required']);

  // (3) الفلترة حسب التاب النشط
  let codes = codesAll;
  if (currentVisaFilter !== 'all') {
    codes = codes.filter(code => visaData.countries[code].visaType === currentVisaFilter);
  }

  if (codes.length === 0) {
    container.innerHTML = '<div class="visa-empty">مفيش دول في الفئة دي</div>';
    return;
  }

  // (4) الكروت المدمجة: علم + اسم الدولة + شارة التصنيف + سهم
  const badges = {
    'visa-free': 'بدون فيزا',
    'e-visa': 'إلكترونية',
    'on-arrival': 'عند الوصول',
    'visa-required': 'مطلوبة'
  };

  container.innerHTML = codes.map(code => {
    const v = visaData.countries[code];
    const country = (typeof countries !== 'undefined' && Array.isArray(countries))
      ? countries.find(c => c.code === code)
      : null;
    const badge = badges[v.visaType] || v.visaType;

    return `
      <div class="visa-card" onclick="openVisaDetail('${code}')">
        <div class="vc-flag">${flagImgTag(country || { code: code }, 'w80', v.name)}</div>
        <div class="vc-body">
          <h4>${v.name}</h4>
          <span class="vc-badge ${v.visaType}">${badge}${v.conditional ? '<span class="vc-cond" title="مشروط: مطلوب تأشيرة سارية من شنغن/أمريكا/بريطانيا أو إقامة سارية">مشروط</span>' : ''}</span>
        </div>
        <div class="vc-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </div>
      </div>
    `;
  }).join('');
}

/* فلترة حسب التصنيف — من التابات أو من شرائح الملخّص */
function filterVisa(filter, el) {
  currentVisaFilter = filter;

  // مزامنة التابات + شرائح الملخّص مع الفلتر الحالي
  document.querySelectorAll('.visa-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.filter === filter);
  });
  document.querySelectorAll('.vs-chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.filter === filter);
  });

  renderVisaSection();
}

/* نسخ رقم السفارة */
function copyEmbassyPhone(el) {
  const phone = (typeof el === 'string') ? el : (el && el.dataset ? el.dataset.phone : '');
  if (!phone) return;

  const done = () => showToast('تم نسخ رقم السفارة');
  const fallback = () => {
    try {
      const ta = document.createElement('textarea');
      ta.value = phone;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      done();
    } catch (e) {
      showToast(phone);
    }
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(phone).then(done).catch(fallback);
  } else {
    fallback();
  }
}

/* فتح تفاصيل دولة */
function openVisaDetail(code) {
  const v = (typeof visaData !== 'undefined' && visaData.countries) ? visaData.countries[code] : null;
  if (!v) return;
  showVisaModal(v);
}

/* إغلاق نافذة التفاصيل */
function closeVisaModal() {
  const overlay = document.querySelector('.visa-modal-overlay');
  if (overlay) overlay.remove();
}

/* تبديل تبويبات نافذة تفاصيل التأشيرة: المعلومات / المستندات / السفارة */
function switchVisaTab(tabName) {
  const modal = document.querySelector('.visa-modal');
  if (!modal) return;
  modal.querySelectorAll('.vm-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.vtab === tabName);
  });
  modal.querySelectorAll('.vm-panel').forEach(panel => {
    panel.classList.toggle('active', panel.dataset.vpanel === tabName);
  });
}

/* نافذة تفاصيل التأشيرة (نص + بيانات، بدون أي أيقونات) */
function showVisaModal(v) {
  closeVisaModal();

  const country = (typeof countries !== 'undefined' && Array.isArray(countries))
    ? countries.find(c => c.code === v.code)
    : null;

  const embassy = v.embassyInEgypt || {};
  const phone = embassy.phone || '';
  const website = embassy.website || '';
  const official = v.officialLink || '';

  const embassyWarn = (embassy.verified === false)
    ? '<p class="vm-verify">بيانات السفارة تقريبية — لازم تتأكد من الموقع الرسمي قبل أي إجراء.</p>'
    : '';

  const row = (label, val) =>
    `<div class="vm-cell"><span class="vm-cell-label">${label}</span><span class="vm-cell-val">${val || '—'}</span></div>`;

  const modal = document.createElement('div');
  modal.className = 'visa-modal-overlay';
  modal.onclick = (e) => { if (e.target === modal) closeVisaModal(); };

  modal.innerHTML = `
    <div class="visa-modal">
      <div class="vm-header">
        <button class="vm-close" onclick="closeVisaModal()">إغلاق</button>
        <div class="vm-flag">${flagImgTag(country || { code: v.code }, 'w160', v.name)}</div>
        <h3>${v.name}</h3>
        <span class="vm-type">${getVisaLabel(v.visaType)}${v.conditional ? ' · مشروط' : ''}</span>
      </div>

      <div class="vm-tabs">
        <button class="vm-tab active" data-vtab="info" onclick="switchVisaTab('info')">المعلومات</button>
        <button class="vm-tab" data-vtab="docs" onclick="switchVisaTab('docs')">المستندات</button>
        <button class="vm-tab" data-vtab="embassy" onclick="switchVisaTab('embassy')">السفارة</button>
      </div>

      <div class="vm-body">
        <!-- المعلومات -->
        <div class="vm-panel active" data-vpanel="info">
          <div class="vm-grid">
            ${row('المدة', v.duration)}
            ${row('الرسوم', v.cost)}
            ${row('المعالجة', v.processingTime)}
            ${row('أفضل وقت', v.bestTime)}
            ${row('العملة', v.currency)}
            ${row('سعر الصرف', v.currencyPerUSD)}
            ${row('اللغة', v.language)}
            ${row('التوقيت', v.timezone)}
            ${row('الطوارئ', v.emergencyNumber)}
          </div>

          ${v.notes ? `<div class="vm-notes"><div class="vm-notes-title">ملاحظات مهمة</div><p>${v.notes}</p></div>` : ''}

          ${v.source ? `<p class="vm-source">المصدر: ${v.source}</p>` : ''}
        </div>

        <!-- المستندات -->
        <div class="vm-panel" data-vpanel="docs">
          <ul class="vm-list">
            ${(v.requirements || []).map(r => `<li>${r}</li>`).join('') || '<li>مفيش مستندات مسجّلة</li>'}
          </ul>
        </div>

        <!-- السفارة -->
        <div class="vm-panel" data-vpanel="embassy">
          <div class="vm-emb-row">
            <span class="vm-emb-label">العنوان</span>
            <span class="vm-emb-val">${embassy.address || '—'}</span>
          </div>
          <div class="vm-emb-row">
            <span class="vm-emb-label">الهاتف</span>
            <span class="vm-emb-val">${phone || '—'}</span>
          </div>
          ${embassyWarn}
        </div>

        <!-- أزرار نصية -->
        <div class="vm-actions">
          ${website ? `<a class="vm-btn" href="${website}" target="_blank" rel="noopener">زيارة موقع السفارة</a>` : ''}
          ${phone ? `<button class="vm-btn" data-phone="${phone}" onclick="copyEmbassyPhone(this)">نسخ رقم السفارة</button>` : ''}
          ${official ? `<a class="vm-btn vm-btn-primary" href="${official}" target="_blank" rel="noopener">التقديم الرسمي</a>` : ''}
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

/* صفحات قسم السياحة: صفحة الـHub + الخدمات الفرعية */
const TOURISM_PAGES = ['tourism', 'visas', 'flights', 'hotels', 'documents', 'insurance', 'currency', 'emergency'];

/* صفحات فرعية بتفتح من مجتمع سافر (زيارة/رسائل/أصدقاء/مجتمعات) */
const COMMUNITY_SUB_PAGES = ['notifications', 'messages', 'chat', 'friends', 'groups'];

/* أي صفحة جوّه القسمين دول → زرار «الرئيسية» في الـBottom Nav بيفضل مضيء */
const PAGES_WITH_HOME_ACTIVE = TOURISM_PAGES.concat(COMMUNITY_SUB_PAGES);

/* التنقل من الـHub لصفحة خدمة فرعية */
function switchTourismPage(subpage) {
  if (TOURISM_PAGES.indexOf(subpage) === -1 || subpage === 'tourism') return;
  switchPage(subpage);
}

function switchPage(page) {
  // إخفاء كل الصفحات
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // إظهار الصفحة المطلوبة
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');

  // تحديث الـ bottom nav
  // (كل صفحات قسم السياحة بتُعدّ جزء من الرئيسية، فبنخلّي زرار «الرئيسية» مضيء)
  document.querySelectorAll('.nav-btn').forEach(btn => {
    const isActive = btn.dataset.page === page ||
      (PAGES_WITH_HOME_ACTIVE.indexOf(page) !== -1 && btn.dataset.page === 'home');
    btn.classList.toggle('active', isActive);
  });

  // إجراءات خاصة بكل صفحة
  if (page === 'explore') {
    renderCountries();
    setTimeout(() => {
      initMap();
      setTimeout(() => {
        refreshMap();
        renderMapMarkers();
      }, 100);
    }, 200);
  }

  if (page === 'community') {
    renderPosts();
  }

  // الصفحات الفرعية اللي بتفتح من هيدر مجتمع سافر
  if (page === 'notifications') renderNotifications();
  if (page === 'messages')      renderMessagesPage();
  if (page === 'chat')          renderChat();
  if (page === 'friends')       renderFriendsPage();
  if (page === 'groups')        renderGroupsPage();

  if (page === 'home') {
    renderHomeFavorites();
  }

  if (page === 'profile') {
    // شريط "آخر تحديث للأسعار" بقى بيظهر في صفحة "حسابي" بس
    renderRatesStatus();
  }

  // صفحة التأشيرات: نرسم الملخّص + التابات + الكروت
  // (وزرار «الرئيسية» بيفضل مضيء لأن 'visas' جوّه PAGES_WITH_HOME_ACTIVE)
  if (page === 'visas') {
    renderVisaSection();
  }

  // نرجع لأول الصفحة فوراً (instantly) — من غير smooth عشان تبدأ من فوق على طول
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/* ============================================================
   8.1 BACK NAVIGATION (الرجوع للخلف + السحب من حرف الشاشة)
   ============================================================ */

/* الرجوع للصفحة السابقة حسب الصفحة الحالية */
function goBack() {
  const activePage = document.querySelector('.page.active');
  const pageName = activePage ? activePage.id.replace('page-', '') : '';

  // خريطة الرجوع: كل صفحة بترجع لمين
  const backTargets = {
    visas: 'tourism',
    flights: 'tourism',
    hotels: 'tourism',
    documents: 'tourism',
    insurance: 'tourism',
    currency: 'tourism',
    emergency: 'tourism',
    tourism: 'home',
    explore: 'home',
    community: 'home',
    profile: 'home',
    detail: 'explore',
    // صفحات مجتمع سافر الفرعية
    notifications: 'community',
    messages: 'community',
    chat: 'messages',
    friends: 'community',
    groups: 'community'
  };

  switchPage(backTargets[pageName] || 'home');
}

/* السحب للرجوع (Swipe Back): من حرف الشاشة اليمين لليسار — لأن التطبيق RTL */
(function enableSwipeBack() {
  const EDGE_ZONE = 30;  // عرض منطقة الحرف اليمين (px)
  const MIN_DX = 100;    // أقل مسافة سحب أفقي مطلوبة (px)
  const MAX_DY = 40;     // فوق كده يبقى سحب رأسي (سكرول) مش رجوع

  let startX = 0;
  let startY = 0;
  let isSwiping = false;

  document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    if (!touch) return;

    // مش شغّال قبل ما التطبيق يفتح (شاشة البداية)
    const splash = document.getElementById('splash');
    if (splash && !splash.classList.contains('hide')) return;

    // مش شغّال وفيه نافذة تفاصيل التأشيرة مفتوحة
    if (document.querySelector('.visa-modal-overlay')) return;

    // منع التعارض مع العناصر اللي بتتسحب أفقي (تابات / خريطة)
    const target = e.target;
    if (target && target.closest &&
        target.closest('.visa-tabs, .detail-tabs, .continent-tabs, .leaflet-container')) return;

    // بس من الحرف اليمين (أول 30px) عشان RTL
    if (touch.clientX >= window.innerWidth - EDGE_ZONE) {
      startX = touch.clientX;
      startY = touch.clientY;
      isSwiping = true;
    }
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    const touch = e.touches[0];
    if (!touch) return;

    const dx = touch.clientX - startX;
    const dy = Math.abs(touch.clientY - startY);

    // لازم السحب أفقي مش رأسي
    if (dy > MAX_DY) {
      isSwiping = false;
      return;
    }

    // سحب لليسار مسافة كفاية → ارجع للصفحة السابقة
    if (dx < 0 && Math.abs(dx) > MIN_DX) {
      isSwiping = false;
      goBack();
    }
  }, { passive: true });

  document.addEventListener('touchend', () => {
    isSwiping = false;
  }, { passive: true });
})();

/* ============================================================
   9. SERVICE ACTIONS
   أزرار الخدمات
   ============================================================ */
function openService(name) {
  const names = {
    visa: 'التأشيرات',
    study: 'الدراسة بالخارج',
    embassy: 'السفارات والقنصليات',
    docs: 'الأوراق الرسمية',
    money: 'التحويلات والفلوس',
    housing: 'السكن والإقامة',
    scholarships: 'المنح الدراسية'
  };
  showToast('هتفتح: ' + (names[name] || name));
}

/* ============================================================
   9.B EXCHANGE RATES UI
   عرض آخر تحديث الأسعار + إعادة رسم الأسعار
   ============================================================ */

// آخر تحديث للأسعار (النص الصغير في الصفحة الرئيسية)
function renderRatesStatus() {
  const textEl = document.getElementById('ratesStatusText');
  if (!textEl) return;

  const text = (typeof getRatesUpdateText === 'function')
    ? getRatesUpdateText()
    : 'أسعار ثابتة';

  const source = (typeof getRatesSourceText === 'function')
    ? getRatesSourceText()
    : '';

  textEl.innerHTML = 'آخر تحديث للأسعار: <b>' + text + '</b>' +
    (source ? ' <span class="rs-source">• ' + source + '</span>' : '');

  // النقطة تفضل صفراء لحد ما توصل الأسعار الحقيقية
  const dot = document.getElementById('ratesDot');
  const hasRates = (typeof ratesLastUpdate !== 'undefined' && ratesLastUpdate);
  if (dot) dot.classList.toggle('loading', !hasRates);
}

/* ============================================================
   9.C REFRESH PRICES
   إعادة رسم كل الأسعار لما نوصل أسعار الصرف الجديدة
   (rates.js بينادي الدالة دي بعد نجاح الـ fetch)
   ============================================================ */
function refreshAllPrices() {
  const updatedAt = (typeof ratesLastUpdate !== 'undefined') ? ratesLastUpdate : null;

  // كروت الدول في صفحة الاستكشاف
  renderCountries();

  // كروت المفضلة في الصفحة الرئيسية
  renderHomeFavorites();

  // تابات القارات + الأرقام (لو ضفنا دول جديدة من المصدر الخارجي)
  renderHomeContinents();
  updateCounts();

  // نص "آخر تحديث للأسعار"
  renderRatesStatus();

  // لو صفحة التفاصيل مفتوحة، حدّث أسعارها برضه
  const detailPage = document.getElementById('page-detail');
  if (detailPage && detailPage.classList.contains('active')) {
    const nameEl = document.getElementById('detailName');
    const c = nameEl ? countries.find(x => x.name === nameEl.textContent) : null;
    if (c) {
      updateDetailPrices(c);
      console.log('💵 Detail prices refreshed:', c.name);
    }
  }

  console.log(
    '💵 Prices refreshed' +
    (updatedAt ? ' — آخر تحديث: ' + updatedAt.toLocaleString('ar-EG') : '')
  );
}

/* ============================================================
   10. AUTHENTICATION (CLERK)
   نظام تسجيل دخول احترافي: إيميل + كلمة مرور / Google / استرجاع / بروفايل
   ============================================================ */

/* ننتظر تحميل مكتبة Clerk من الـ CDN (بتتحمّل async) — مع مهلة أمان */
function waitForClerk(timeoutMs) {
  timeoutMs = timeoutMs || 8000;
  return new Promise(function (resolve) {
    if (window.Clerk) { resolve(window.Clerk); return; }

    var waited = 0;
    var step = 200;
    var timer = setInterval(function () {
      if (window.Clerk) {
        clearInterval(timer);
        resolve(window.Clerk);
        return;
      }
      waited += step;
      if (waited >= timeoutMs) {
        clearInterval(timer);
        resolve(null);
      }
    }, step);
  });
}

/* إظهار الصفحة الرئيسية + إخفاء شاشة الدخول */
function showAppHome() {
  var auth = document.getElementById('page-auth');
  var home = document.getElementById('page-home');
  if (auth) auth.classList.remove('active');
  if (home) home.classList.add('active');
  document.body.classList.remove('auth-mode');
}

/* إظهار شاشة تسجيل الدخول + إخفاء الصفحة الرئيسية */
function showAuthScreen() {
  var auth = document.getElementById('page-auth');
  var home = document.getElementById('page-home');
  if (home) home.classList.remove('active');
  if (auth) auth.classList.add('active');
  document.body.classList.add('auth-mode');
}

/* حفظ بيانات المستخدم محلياً (للاستخدام في الواجهات) */
function saveUserToLocal(clerkUser) {
  if (!clerkUser) return null;

  var name = clerkUser.fullName || clerkUser.firstName || 'مستخدم';
  var user = {
    id: clerkUser.id,
    name: name,
    email: (clerkUser.primaryEmailAddress && clerkUser.primaryEmailAddress.emailAddress) || '',
    avatar: clerkUser.imageUrl || '',
    initials: name.charAt(0) || 'م',
    loginAt: new Date().toISOString()
  };

  try { localStorage.setItem('safr_user', JSON.stringify(user)); } catch (e) {}
  return user;
}

/* تحديث الواجهات ببيانات المستخدم بعد الدخول */
function updateUIWithUser(clerkUser) {
  var saved = null;
  try { saved = JSON.parse(localStorage.getItem('safr_user') || 'null'); } catch (e) {}

  var user = (saved && saved.initials)
    ? saved
    : { name: (clerkUser && clerkUser.fullName) || 'مستخدم', email: '', initials: 'م' };

  // صورة الكومبوزر في قسم المجتمع (+ صورة المودال)
  var composerAvatar = document.getElementById('composerAvatar');
  if (composerAvatar) composerAvatar.textContent = user.initials;
  var modalAvatar = document.getElementById('modalAvatar');
  if (modalAvatar) modalAvatar.textContent = user.initials;
  var modalAuthor = document.getElementById('modalAuthor');
  if (modalAuthor) modalAuthor.textContent = user.name;

  // صفحة حسابي
  var profileAvatar = document.querySelector('.profile-avatar');
  if (profileAvatar) profileAvatar.textContent = user.initials;

  var profileName = document.getElementById('profileName') ||
    document.querySelector('.profile-hero h2');
  if (profileName) profileName.textContent = user.name;

  var profileEmail = document.querySelector('.profile-hero .email');
  if (profileEmail && user.email) profileEmail.textContent = user.email;

  // إعادة رسم المنشورات عشان (أنت) وخيارات "⋯" تظهر على منشورات المستخدم
  if (typeof renderPosts === 'function') renderPosts();
}

/* عرض واجهة تسجيل الدخول بتصميم سافر (Clerk) */
function mountClerkSignIn() {
  var el = document.getElementById('clerk-sign-in');
  if (!el || !window.Clerk || typeof window.Clerk.mountSignIn !== 'function') return;

  window.Clerk.mountSignIn(el, {
    appearance: {
      variables: {
        colorPrimary: '#0B3D91',
        colorBackground: 'rgba(255,255,255,0.95)',
        borderRadius: '12px',
        fontFamily: 'Cairo, sans-serif'
      },
      elements: {
        card: 'clerk-card',
        formButtonPrimary: 'clerk-btn'
      }
    }
  });
}

/* تسجيل الخروج */
async function handleLogout() {
  try {
    if (window.Clerk && typeof window.Clerk.signOut === 'function') {
      await window.Clerk.signOut();
    }
  } catch (err) {
    console.warn('⚠️ فشل تسجيل الخروج:', err.message);
  }

  try { localStorage.removeItem('safr_user'); } catch (e) {}
  window.location.reload();
}

/* تهيئة المصادقة عند بدء التطبيق */
async function initAuth() {
  // أوفلاين؟ Clerk محتاج نت → نفتح التطبيق على طول
  if (navigator.onLine === false) {
    console.warn('⚠️ أوفلاين — تخطي تسجيل الدخول');
    showAppHome();
    return;
  }

  // المفتاح لسه Placeholder (سكربتات Clerk مش اتحمّلت) → نفتح التطبيق فوراً
  if (window.__SAFR_CLERK_READY__ === false) {
    console.warn('⚠️ Clerk غير مهيّأ — حطّ مفتاح الـ Publishable في index.html');
    showAppHome();
    return;
  }

  var clerk = await waitForClerk(6000);

  // Clerk مش متاح (مفيش نت / المفتاح لسه متحطش) → نفتح التطبيق عادي
  if (!clerk || typeof clerk.load !== 'function') {
    console.warn('⚠️ Clerk غير متاح — التطبيق هيفتح بدون تسجيل دخول');
    showAppHome();
    return;
  }

  try {
    // خيارات التحميل — نمرّر حزمة الواجهة لو موجودة (Clerk v6+)
    var loadOptions = {};
    if (window.__internal_ClerkUICtor) {
      loadOptions.ui = { ClerkUI: window.__internal_ClerkUICtor };
    }
    await clerk.load(loadOptions);
  } catch (err) {
    console.warn('⚠️ فشل تحميل Clerk (تأكد من صحة المفتاح في index.html):', err.message);
    showAppHome();
    return;
  }

  if (clerk.user) {
    saveUserToLocal(clerk.user);
    showAppHome();
    updateUIWithUser(clerk.user);
  } else {
    showAuthScreen();
    mountClerkSignIn();
  }

  // متابعة تغيّر حالة الدخول (تسجيل دخول/خروج من أي مكان)
  if (typeof clerk.addListener === 'function') {
    clerk.addListener(function (resources) {
      if (resources && resources.user) {
        saveUserToLocal(resources.user);
        showAppHome();
        updateUIWithUser(resources.user);
      }
    });
  }
}

/* ============================================================
   11. INITIALIZATION
   تهيئة التطبيق عند التحميل
   ============================================================ */
window.addEventListener('load', async () => {
  console.log('🚀 App loading...');

  // (0) تهيئة المصادقة (Clerk) — بالتوازي مع باقي التحميل
  initAuth().catch(function (err) {
    console.warn('⚠️ خطأ في تهيئة المصادقة:', err);
    showAppHome();
  });

  // إخفاء شاشة البداية (مستقلة عن تحميل البيانات)
  setTimeout(() => {
    const splash = document.getElementById('splash');
    const app = document.getElementById('app');
    splash.classList.add('hide');
    app.classList.add('show');

    setTimeout(() => {
      splash.style.display = 'none';
    }, 800);

    console.log('✅ App ready!');
  }, 3000);

  // (1) حمّل بيانات الدول من المصدر الخارجي الأول (REST Countries)
  if (typeof loadCountriesData === 'function') {
    try {
      const src = await loadCountriesData();
      console.log('🌍 Countries source:', src, '| عدد الدول:', countries.length);
    } catch (err) {
      console.warn('⚠️ فشل تحميل بيانات الدول:', err.message);
    }
  }

  // (2) بعد ما البيانات توصل، ارسم الكروت
  renderHomeContinents();
  renderHomeFavorites();
  renderCountries();
  renderPosts();
  updateCounts();
  renderRatesStatus();

  // صفحة التأشيرات — تُرسم مرة واحدة عند التحميل
  renderVisaSection();

  // إغلاق النوافذ بمفتاح Esc (تفاصيل التأشيرة + مودال المنشور + قائمة ⋯ + العارضات)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeVisaModal();
      closePostModal();
      hideMoreMenu();
      closeImageViewer();
      closeStoryViewer();
    }
  });

  console.log('🖼️ Cards rendered:', countries.length, 'countries');
});