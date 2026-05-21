# Shakil Website

Premium React + Vite + Tailwind portfolio site for tracking setup services.

## Local setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production output is generated in `dist/`.

## Vercel

- Framework preset: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: `./`

## cPanel

Do not upload the raw source code as the public site. Build first, then upload the generated files.

1. Run `npm install`
2. Run `npm run build`
3. Open the generated `dist/` folder
4. Upload the contents inside `dist/` to `public_html`

Upload these generated items, not the project source folders:

- `index.html`
- `assets/`

The Vite config uses `base: './'` so built assets use relative paths and work cleanly on cPanel, including most subfolder uploads.
