/* ============================================================
   SAFR APP — مولّد أيقونات PWA (_make_icons.js)
   ------------------------------------------------------------------
   بيولّد icon-192.png و icon-512.png بنفس تصميم icon.svg
   (أزرق داكن + ذهبي) من غير أي مكتبة خارجية:
   PNG encoder يدوي + zlib.
   التشغيل:  node _make_icons.js
   ============================================================ */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

/* ---------------- 1. PNG ENCODER ---------------- */

const CRC_TABLE = (function () {
  const t = new Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}

function pngChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}

function encodePNG(width, height, rgba) {
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0;                       // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;   // bit depth
  ihdr[9] = 6;   // color type: RGBA
  ihdr[10] = 0;  // deflate
  ihdr[11] = 0;  // filter
  ihdr[12] = 0;  // no interlace

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]),
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    pngChunk('IEND', Buffer.alloc(0))
  ]);
}

/* ---------------- 2. HELPERS ---------------- */

function hex(h) {
  return [
    parseInt(h.substr(1, 2), 16),
    parseInt(h.substr(3, 2), 16),
    parseInt(h.substr(5, 2), 16)
  ];
}

/* تدرّج بثلاث نقاط (0 -> 0.55 -> 1) زي ما في icon.svg */
function grad3(t, c1, c2, c3, mid) {
  const m = (mid === undefined) ? 0.55 : mid;
  const a = (t <= m) ? (t / m) : ((t - m) / (1 - m));
  const from = (t <= m) ? c1 : c2;
  const to = (t <= m) ? c2 : c3;
  return [
    from[0] + (to[0] - from[0]) * a,
    from[1] + (to[1] - from[1]) * a,
    from[2] + (to[2] - from[2]) * a
  ];
}

function grad2(t, c1, c2) {
  return [
    c1[0] + (c2[0] - c1[0]) * t,
    c1[1] + (c2[1] - c1[1]) * t,
    c1[2] + (c2[2] - c1[2]) * t
  ];
}

function over(dst, src, alpha) {
  dst[0] = dst[0] + (src[0] - dst[0]) * alpha;
  dst[1] = dst[1] + (src[1] - dst[1]) * alpha;
  dst[2] = dst[2] + (src[2] - dst[2]) * alpha;
}

/* اختبار نقطة داخل مضلّع (ray casting) */
function inPoly(px, py, pts) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const xi = pts[i][0], yi = pts[i][1];
    const xj = pts[j][0], yj = pts[j][1];
    if (((yi > py) !== (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi) + xi)) {
      inside = !inside;
    }
  }
  return inside;
}

/* ---------------- 3. الألوان (نفس icon.svg) ---------------- */

const BG   = [hex('#071E4A'), hex('#0B3D91'), hex('#1E5BC6')];
const BLUE = [hex('#0B3D91'), hex('#1E5BC6')];
const GOLD = [hex('#D4AF37'), hex('#F1C94A')];

/* الشعار في viewBox 100x100 -> إحداثيات الأيقونة (وحدة 0..1)
   scale = 4 (على 512) => 1 وحدة viewBox = 4/512 = 1/128 من الأيقونة */
const K = 1 / 128;
const V2U = function (vb) { return 0.5 + (vb - 50) * K; };

const R_RING_OUT = 48 * K;      // 0.375
const R_RING_IN  = 44 * K;      // 0.34375
const GLOBE = { x: V2U(42), y: V2U(58), r: 16 * K, half: 1.5 * K / 2 };
const PLANE = [[72, 38], [54, 46], [42, 34], [46, 30], [62, 32], [68, 26], [72, 30], [68, 36]]
  .map(function (p) { return [V2U(p[0]), V2U(p[1])]; });

/* ---------------- 4. رسم بيكسل واحد ---------------- */

function sample(u, v, out) {
  const t = (u + v) / 2;

  // الخلفية
  const bg = grad3(t, BG[0], BG[1], BG[2]);
  out[0] = bg[0]; out[1] = bg[1]; out[2] = bg[2];

  // الهالة الذهبية
  const dc = Math.hypot(u - 0.5, v - 0.5);
  if (dc < 0.5) over(out, GOLD[0], 0.22 * (1 - dc / 0.5));

  // الحلقة الذهبية
  if (dc <= R_RING_OUT && dc >= R_RING_IN) over(out, grad2(t, GOLD[0], GOLD[1]), 1);

  // الدايرة الزرقاء الداخلية
  if (dc < R_RING_IN) over(out, grad2(t, BLUE[0], BLUE[1]), 1);

  // الطيارة الورقية
  if (inPoly(u, v, PLANE)) over(out, grad2(t, GOLD[0], GOLD[1]), 1);

  // الكرة الأرضية (خطوط بيضا)
  const dx = u - GLOBE.x, dy = v - GLOBE.y;

  // الدايرة الخارجية
  if (Math.abs(Math.hypot(dx, dy) - GLOBE.r) <= GLOBE.half) over(out, [255, 255, 255], 1);

  // خط الاستواء (محور أفقي) + خط الطول (محور رأسي)
  const a = GLOBE.r, b = GLOBE.r * 0.375;
  const qh = Math.sqrt((dx / a) * (dx / a) + (dy / b) * (dy / b));
  if (Math.abs(qh - 1) <= 0.055) over(out, [255, 255, 255], 1);

  const qv = Math.sqrt((dx / b) * (dx / b) + (dy / a) * (dy / a));
  if (Math.abs(qv - 1) <= 0.055) over(out, [255, 255, 255], 1);
}

/* ---------------- 5. توليد أيقونة ---------------- */

function makeIcon(size) {
  const SS = 3;                       // supersampling للتنعيم
  const W = size * SS;
  const acc = new Float64Array(size * size * 3);
  const px = [0, 0, 0];

  for (let sy = 0; sy < W; sy++) {
    const v = (sy + 0.5) / W;
    const ty = (sy / SS) | 0;
    for (let sx = 0; sx < W; sx++) {
      sample((sx + 0.5) / W, v, px);
      const i = ((ty * size) + ((sx / SS) | 0)) * 3;
      acc[i] += px[0]; acc[i + 1] += px[1]; acc[i + 2] += px[2];
    }
  }

  const n = SS * SS;
  const rgba = Buffer.alloc(size * size * 4);
  for (let i = 0, j = 0; i < size * size; i++, j += 4) {
    rgba[j]     = Math.round(acc[i * 3] / n);
    rgba[j + 1] = Math.round(acc[i * 3 + 1] / n);
    rgba[j + 2] = Math.round(acc[i * 3 + 2] / n);
    rgba[j + 3] = 255;
  }
  return encodePNG(size, size, rgba);
}

/* ---------------- 6. التنفيذ ---------------- */

const dir = __dirname;
const report = [];

[192, 512].forEach(function (size) {
  const buf = makeIcon(size);
  fs.writeFileSync(path.join(dir, 'icon-' + size + '.png'), buf);
  report.push('icon-' + size + '.png            ' + buf.length + ' bytes');
});

// نسخة maskable إضافية (نفس التصميم — الشعار جوه المنطقة الآمنة 80%)
const maskable = makeIcon(512);
fs.writeFileSync(path.join(dir, 'icon-maskable-512.png'), maskable);
report.push('icon-maskable-512.png    ' + maskable.length + ' bytes');

fs.writeFileSync(path.join(dir, '_icons_report.txt'), report.join('\n'), 'utf8');
console.log(report.join('\n'));
