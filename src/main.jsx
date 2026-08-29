import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// dist/index.html is prerendered at build time (see scripts/prerender.mjs) so
// crawlers and first paint get real markup without running JS. The client
// still does a full render here rather than hydrating: this app has a couple
// of unavoidable server/client differences (e.g. the live clock), and a full
// client render is simpler and more robust than chasing hydration mismatches
// for a static marketing page like this one.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
