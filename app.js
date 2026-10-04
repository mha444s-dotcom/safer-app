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
   منشورات المجتمع
   ============================================================ */
const posts = [
  {
    user:'أحمد محمود', initials:'أ', verified:true,
    country:'ألمانيا', countryCode:'de',
    time:'منذ ساعتين',
    content:'الحمد لله وصلت برلين 🇩🇪 وأول خطوة كانت فتح حساب بنكي. لو حد محتاج مساعدة في إجراءات ألمانيا أنا موجود! <span class="hashtag">#ألمانيا</span> <span class="hashtag">#دراسة_بالخارج</span>',
    image:'🇩🇪', likes:45, comments:12, liked:false
  },
  {
    user:'سارة علي', initials:'س', verified:true,
    country:'كندا', countryCode:'ca',
    time:'منذ 5 ساعات',
    content:'قدمت على منحة Vanier الكندية واتقبلت الحمد لله 🎉 لو حد محتاج تفاصيل عن المنحة والـ requirements، ممكن أشارك تجربتي كاملة. <span class="hashtag">#منح_كندا</span>',
    image:'🇨🇦', likes:128, comments:34, liked:true
  },
  {
    user:'محمد حسن', initials:'م', verified:false,
    country:'تركيا', countryCode:'tr',
    time:'منذ يوم',
    content:'نصيحة لكل اللي مسافر تركيا: اعمل الإقامة الطلابية من أول أسبوع بعد ما توصل، عشان الإجراءات بتاخد وقت. <span class="hashtag">#تركيا</span>',
    image:'🇹🇷', likes:67, comments:8, liked:false
  },
  {
    user:'نور الهدى', initials:'ن', verified:true,
    country:'السعودية', countryCode:'sa',
    time:'منذ يومين',
    content:'اشتغلت في السعودية سنتين ودي أهم حاجة اتعلمتها: الإقامة والجواز لازم يكونوا ساريين دايماً قبل أي إجراء. <span class="hashtag">#السعودية</span>',
    image:'🇸🇦', likes:89, comments:15, liked:false
  }
];

function renderPosts() {
  const container = document.getElementById('postsContainer');
  if (!container) return;

  container.innerHTML = posts.map((p, i) => `
    <div class="post-card">
      <div class="post-head">
        <div class="post-avatar">${p.initials}</div>
        <div class="post-user">
          <h5>
            ${p.user}
            ${p.verified ? '<span class="verified"><svg viewBox="0 0 24 24" stroke-linecap="round"><path d="M20 6 9 17l-5-5"/></svg></span>' : ''}
          </h5>
          <div class="meta">
            <span class="country-flag">
              <img src="${flagUrl(p.countryCode, 'w40')}" onerror="this.onerror=null;this.src='${getFlag(p.countryCode)}'" alt="${p.country}">
            </span>
            ${p.country} • ${p.time}
          </div>
        </div>
      </div>
      <div class="post-content">${p.content}</div>
      ${p.image ? `<div class="post-image">${p.image}</div>` : ''}
      <div class="post-actions">
        <button class="post-action ${p.liked ? 'liked' : ''}" onclick="toggleLike(${i}, this)">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span id="likes-${i}">${p.likes}</span>
        </button>
        <button class="post-action" onclick="showToast('التعليقات هتفتح قريباً 💬')">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <span>${p.comments}</span>
        </button>
        <button class="post-action" onclick="showToast('تم نسخ الرابط 🔗')">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"/>
          </svg>
          <span>مشاركة</span>
        </button>
      </div>
    </div>
  `).join('');
}

function toggleLike(index, btn) {
  posts[index].liked = !posts[index].liked;
  posts[index].likes += posts[index].liked ? 1 : -1;
  btn.classList.toggle('liked');
  document.getElementById('likes-' + index).textContent = posts[index].likes;
}

/* ============================================================
   8. PAGE SWITCHING
   التنقل بين الصفحات
   ============================================================ */
function switchPage(page) {
  // إخفاء كل الصفحات
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // إظهار الصفحة المطلوبة
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');

  // تحديث الـ bottom nav
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === page);
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

  if (page === 'home') {
    renderHomeFavorites();
  }

  if (page === 'profile') {
    // شريط "آخر تحديث للأسعار" بقى بيظهر في صفحة "حسابي" بس
    renderRatesStatus();
  }

  // scroll للأعلى
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

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
   10. INITIALIZATION
   تهيئة التطبيق عند التحميل
   ============================================================ */
window.addEventListener('load', async () => {
  console.log('🚀 App loading...');

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

  console.log('🖼️ Cards rendered:', countries.length, 'countries');
});