import fs from 'fs';
import path from 'path';

const distIndexPath = path.resolve('dist/index.html');
const publicDir = path.resolve('public');

if (!fs.existsSync(distIndexPath)) {
  console.error('dist/index.html not found');
  process.exit(1);
}

// Clean up any stale standalone files from public
for (const stale of ['public/onealliedtz-standalone.html', 'public/single-page-website.html']) {
  if (fs.existsSync(stale)) {
    fs.unlinkSync(stale);
  }
}

let html = fs.readFileSync(distIndexPath, 'utf-8');

function getFiles(dir) {
  const subdirs = fs.readdirSync(dir);
  const files = [];
  for (const file of subdirs) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files.push(...getFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

const allPublicFiles = getFiles(publicDir);
const validImageExts = new Set(['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif', '.ico']);

for (const filePath of allPublicFiles) {
  const ext = path.extname(filePath).toLowerCase();
  if (!validImageExts.has(ext)) {
    continue;
  }

  const relPath = path.relative(publicDir, filePath).replace(/\\/g, '/');
  
  let mimeType = 'image/jpeg';
  if (ext === '.png') mimeType = 'image/png';
  if (ext === '.svg') mimeType = 'image/svg+xml';
  if (ext === '.webp') mimeType = 'image/webp';
  if (ext === '.gif') mimeType = 'image/gif';
  if (ext === '.ico') mimeType = 'image/x-icon';
  
  const buffer = fs.readFileSync(filePath);
  const base64 = `data:${mimeType};base64,${buffer.toString('base64')}`;

  const patterns = [
    `./${relPath}`,
    `/${relPath}`,
    relPath,
  ];

  for (const pattern of patterns) {
    if (html.includes(pattern)) {
      html = html.split(pattern).join(base64);
      console.log(`Inlined ${pattern} (${(buffer.length / 1024).toFixed(1)} KB)`);
    }
  }
}

// Clean any accidental `.data:` resulting from partial replacements
html = html.replace(/\.data:image\//g, 'data:image/');

// 1. Write to dist/index.html (the default production single file)
fs.writeFileSync(distIndexPath, html, 'utf-8');

// 2. Write to root directory as single-page-website.html for direct access in file tree
const rootStandalone = path.resolve('single-page-website.html');
fs.writeFileSync(rootStandalone, html, 'utf-8');

// 3. Write to public/ directory so it's accessible via direct browser URL (e.g. /single-page-website.html)
const publicStandalone = path.resolve('public/single-page-website.html');
fs.writeFileSync(publicStandalone, html, 'utf-8');

const finalMb = (Buffer.byteLength(html, 'utf-8') / (1024 * 1024)).toFixed(2);
console.log(`\n======================================================`);
console.log(`Self-contained single HTML website successfully created!`);
console.log(`File size: ${finalMb} MB`);
console.log(`Locations:`);
console.log(`- ${distIndexPath}`);
console.log(`- ${rootStandalone}`);
console.log(`- ${publicStandalone}`);
console.log(`======================================================\n`);
