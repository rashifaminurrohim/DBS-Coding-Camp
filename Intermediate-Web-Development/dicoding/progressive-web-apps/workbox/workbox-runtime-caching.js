/**
 * * Workbox runtime caching
 */

/**
 * * Modules pendukung = Workbox-routing, Workbox-strategies
 */
// pemasangan module = npm install --save workbox-routing, workbox-strategies

/**
 * * Menentukan route yang sesuai
 */
// Berikut adalah contoh penerapan runtime caching dalam sw.js.
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

registerRoute(
  ({ url }) => url.href.startsWith('https://example-api.com'),
  new CacheFirst({
    cacheName: 'example-cache',
  }),
);

