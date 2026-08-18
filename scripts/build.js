const fs = require('fs');
const path = require('path');
const dist = path.join(process.cwd(), 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, 'src'), { recursive: true });
for (const file of ['index.html', 'wx.jpg']) fs.copyFileSync(file, path.join(dist, file));
for (const file of ['main.js', 'styles.css']) fs.copyFileSync(path.join('src', file), path.join(dist, 'src', file));
console.log('Built static Qingmo pet into dist/');
