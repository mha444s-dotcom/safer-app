// معاينة محلية بسيطة (بديل Live Server) - بورت 5500
// التشغيل: node _server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = __dirname;
const PORT = 5500;

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8'
};

http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';
  const filePath = path.join(dir, decodeURIComponent(urlPath));
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not found: ' + urlPath);
      return;
    }
    const headers = { 'Content-Type': types[path.extname(filePath)] || 'application/octet-stream' };
    // الـ Service Worker لازم يتحمّل من جديد كل مرة (عشان التحديثات توصل)
    if (urlPath === '/service-worker.js') headers['Cache-Control'] = 'no-store';
    res.writeHead(200, headers);
    res.end(data);
  });
}).listen(PORT, () => {
  console.log('Safer-App preview running: http://localhost:' + PORT);
});
