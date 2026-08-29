import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(rootDir, 'dist');
const ssrDir = path.join(rootDir, 'dist-ssr');
const ssrEntry = path.join(ssrDir, 'entry-server.js');

const { render } = await import(pathToFileURL(ssrEntry).href);
const appHtml = render();

const indexPath = path.join(distDir, 'index.html');
const template = readFileSync(indexPath, 'utf-8');

if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find <div id="root"></div> in dist/index.html');
}

const finalHtml = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
writeFileSync(indexPath, finalHtml);

rmSync(ssrDir, { recursive: true, force: true });

console.log('Prerendered static markup into dist/index.html');
