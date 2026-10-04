/* معاينة ASCII للأيقونة (للتأكد إن اللوجو مرسوم صح) — node _icon_ascii.js */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function decodePNG(file) {
  const buf = fs.readFileSync(file);
  let pos = 8, w = 0, h = 0, idat = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    const data = buf.slice(pos + 8, pos + 8 + len);
    if (type === 'IHDR') { w = data.readUInt32BE(0); h = data.readUInt32BE(4); }
    else if (type === 'IDAT') idat.push(data);
    else if (type === 'IEND') break;
    pos += 12 + len;
  }
  return { w: w, h: h, raw: zlib.inflateSync(Buffer.concat(idat)) };
}

const img = decodePNG(path.join(__dirname, 'icon-192.png'));
const stride = img.w * 4;
const COLS = 64, ROWS = 32;
const out = [];

for (let r = 0; r < ROWS; r++) {
  let line = '';
  for (let c = 0; c < COLS; c++) {
    const x = Math.floor(c * img.w / COLS);
    const y = Math.floor(r * img.h / ROWS);
    const o = y * (stride + 1) + 1 + x * 4;
    const R = img.raw[o], G = img.raw[o + 1], B = img.raw[o + 2];
    let ch;
    if (R > 225 && G > 225 && B > 225) ch = '#';                       // أبيض
    else if (R > 170 && G > 140 && B < 120) ch = '*';                  // ذهبي
    else if (B > 150 && R < 90) ch = '@';                              // أزرق فاتح
    else ch = '.';                                                    // أزرق داكن
    line += ch + ' ';
  }
  out.push(line);
}
fs.writeFileSync(path.join(__dirname, '_icon_ascii.txt'), out.join('\n'), 'utf8');
console.log(out.join('\n'));
