// Screenshot a URL with the Puppeteer-bundled Chromium (Mac).
// Usage:
//   node screenshot.mjs http://localhost:3000
//   node screenshot.mjs http://localhost:3000 hero          (label suffix)
//   node screenshot.mjs http://localhost:3000 hero --mobile (iPhone viewport)
// Saves auto-incremented PNGs to ./temporary screenshots/screenshot-N[-label].png
import puppeteer from 'puppeteer';
import { mkdir, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const args = process.argv.slice(2);
const mobile = args.includes('--mobile');
const positional = args.filter(a => !a.startsWith('--'));
const url = positional[0] || 'http://localhost:3000';
const label = positional[1] ? `-${positional[1].replace(/[^a-z0-9-]/gi, '')}` : '';

const OUT_DIR = join(process.cwd(), 'temporary screenshots');
await mkdir(OUT_DIR, { recursive: true });

// auto-increment N across existing screenshot-*.png
const existing = await readdir(OUT_DIR).catch(() => []);
const nums = existing
  .map(f => f.match(/^screenshot-(\d+)/))
  .filter(Boolean)
  .map(m => parseInt(m[1], 10));
const n = (nums.length ? Math.max(...nums) : 0) + 1;
const outPath = join(OUT_DIR, `screenshot-${n}${mobile ? '-mobile' : ''}${label}.png`);

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport(
  mobile
    ? { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
    : { width: 1440, height: 900, deviceScaleFactor: 2 }
);
await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
await new Promise(r => setTimeout(r, 800)); // let fonts/animations settle
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Saved → ${outPath}`);
