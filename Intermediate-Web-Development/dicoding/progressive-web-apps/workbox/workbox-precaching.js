/**
 * * Workbox Precaching
 * - generateSW -> untuk kasus yang template dan tidak telalu rumit
 * - injectManifest -> untuk kasus yang cukup kompleks seperti push motification
 */

// caching biasa
const cacheName = 'calculator-cache-v1';
const precachedResources = ['/', '/app.js', '/styles.css'];

async function precache() {
  const cache = await caches.open(cacheName);
  return cache.addAll(precachedResources);
}

self.addEventListener('install', (event) => {
  event.waitUntil(precache());
});

// precache dengan webpack plugin
// npm install workbox-webpack-plugin --save-dev

// generateSW
// const { GenerateSW } = require('workbox-webpack-plugin');

// export default {
//   /* ...opsi konfigurasi lain disembunyikan... */

//   plugins: [
//     new GenerateSW({
//       swDest: './sw.bundle.js',
//       /* ...opsi konfigurasi lainnya didefinisikan di sini... */
//     }),
//   ],
// };

// injectManifest
const { InjectManifest } = require('workbox-webpack-plugin');

export default {
  /* ...opsi konfigurasi lain disembunyikan... */

  plugins: [
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
      swDest: './sw.js',
      /* ...opsi konfigurasi lainnya didefinisikan di sini... */
    }),
  ],
};

// Registrasi Service Worker menggunakan workbox
import { Workbox } from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('./service-worker.js');
  wb.register();
}

