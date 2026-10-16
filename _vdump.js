/* تفريغ بيانات دول مختارة لملف للمراجعة */
const fs = require('fs');
const d = new Function(fs.readFileSync('visa-data.js', 'utf8') + '; return visaData;')();
const codes = process.argv.slice(2);
const out = codes.map(function (c) { return '===== ' + c + ' =====\n' + JSON.stringify(d.countries[c], null, 1); }).join('\n\n');
fs.writeFileSync('_dump.txt', out, 'utf8');
console.log('ok');
