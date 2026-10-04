/* ============================================================
   SAFR APP - MAP.JS
   إدارة الخريطة التفاعلية (Leaflet + Esri Street Map)
   ============================================================ */

/* ============================================================
   1. MAP VARIABLES
   ============================================================ */
let map = null;
let markersLayer = null;

/* ============================================================
   2. INITIALIZE MAP
   تهيئة الخريطة لأول مرة
   ============================================================ */
function initMap() {
  // لو الخريطة موجودة بالفعل، نحدث حجمها فقط
  if (map) {
    map.invalidateSize();
    return;
  }

  console.log('🗺️ Initializing map...');

  // إنشاء الخريطة
  map = L.map('realMap', {
    center: [25, 15],           // وسط العالم
    zoom: 2,                     // زوم ابتدائي
    minZoom: 2,                  // أصغر زوم
    maxZoom: 8,                  // أكبر زوم
    zoomControl: true,           // زرار الزوم
    attributionControl: false,   // إخفاء حقوق النشر
    worldCopyJump: true          // تكرار العالم عند السحب
  });

  // Esri Street Map - مختبر وشغال 100% ✅
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: '© Esri'
  }).addTo(map);

  // طبقة الماركرات
  markersLayer = L.layerGroup().addTo(map);

  // إضافة الماركرات
  renderMapMarkers();

  console.log('✅ Map initialized with', countries.length, 'countries');
}

/* ============================================================
   3. RENDER MAP MARKERS
   رسم جميع الدبابيس على الخريطة
   ============================================================ */
function renderMapMarkers() {
  if (!markersLayer) return;

  // مسح الماركرات القديمة
  markersLayer.clearLayers();

  countries.forEach(c => {
    if (!c.latlng) return;

    const fav = isFavorite(c.name);

    // أيقونة مخصصة لكل دولة
    const icon = L.divIcon({
      className: '',
      html: `
        <div class="custom-marker ${fav ? 'favorite' : ''}">
          <div class="marker-label">${c.name}</div>
          <div class="marker-flag">
            <img src="${flagUrl(c.code, 'w80')}" onerror="this.onerror=null;this.src='${getFlag(c.code)}'" alt="${c.name}" loading="lazy">
          </div>
          <div class="marker-pointer"></div>
        </div>
      `,
      iconSize: [36, 44],
      iconAnchor: [18, 44],
      popupAnchor: [0, -46]
    });

    // إنشاء الماركر
    const marker = L.marker(c.latlng, { icon }).addTo(markersLayer);

    // Popup عند الضغط
    const popupHTML = `
      <div class="popup-content">
        <h4>
          <span class="popup-flag">
            <img src="${flagUrl(c.code, 'w40')}" onerror="this.onerror=null;this.src='${getFlag(c.code)}'" alt="${c.name}">
          </span>
          ${c.name}
        </h4>
        <p>📍 ${c.capital} • ${continentInfo[c.continent].name}</p>
        <button onclick="openCountryDetail('${c.name}')">عرض التفاصيل</button>
      </div>
    `;
    marker.bindPopup(popupHTML, {
      closeButton: true,
      maxWidth: 240,
      minWidth: 200
    });
  });

  console.log('📍 Rendered', countries.length, 'markers');
}

/* ============================================================
   4. FLY TO CONTINENT
   الطيران لقارة معينة على الخريطة
   ============================================================ */
function flyToContinent(cont) {
  if (!map) return;

  const bounds = {
    europe:   [[35, -12], [72, 45]],
    arab:     [[12, -18], [38, 60]],
    americas: [[-58, -170], [72, -30]],
    asia:     [[-12, 60], [75, 180]],
    africa:   [[-36, -20], [38, 55]],
    oceania:  [[-50, 110], [0, 190]],
    all:      [[-70, -180], [80, 180]]
  };

  if (bounds[cont]) {
    map.flyToBounds(bounds[cont], {
      duration: 1,
      padding: [20, 20]
    });
  }
}

/* ============================================================
   5. FOCUS ON A SPECIFIC COUNTRY
   التقريب على دولة معينة
   ============================================================ */
function focusOnCountry(name) {
  if (!map) return;

  const country = countries.find(c => c.name === name);
  if (!country || !country.latlng) return;

  map.flyTo(country.latlng, 6, {
    duration: 1.5
  });
}

/* ============================================================
   6. RESET MAP VIEW
   إعادة تعيين الخريطة
   ============================================================ */
function resetMapView() {
  if (!map) return;
  map.flyTo([25, 15], 2, { duration: 1 });
}

/* ============================================================
   7. REFRESH MAP (when needed)
   تحديث حجم الخريطة عند تغيير الصفحة
   ============================================================ */
function refreshMap() {
  if (!map) return;
  setTimeout(() => {
    map.invalidateSize();
  }, 100);
}