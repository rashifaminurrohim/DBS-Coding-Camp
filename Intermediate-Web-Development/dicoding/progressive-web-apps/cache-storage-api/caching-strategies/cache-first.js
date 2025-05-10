/** 
 * * Cache First (Cache Fallback to Network)
 * strategi ini akan meneruskan request ke server untuk mendapatkan datanya. 
 * Data ini akan segera diberikan kepada aplikasi dan sekaligus disimpan dalam cache storage. 
 * Inilah yang kami namakan cache fallback. 
 * Bagaimana dengan request berikutnya, apakah masih diteruskan ke server? 
 * Tentu tidak! Selama data yang diminta telah tersimpan, 
 * aplikasi akan selalu mengambilnya dari dalam cache storage.
 */

const cacheName = 'calculator-cache-v1';
const precachedResources = ['/', '/app.js', '/styles.css'];

async function precache() {
  const cache = await caches.open(cacheName);
  return cache.addAll(precachedResources);
}

self.addEventListener('install', (event) => {
  event.waitUntil(precache());
});

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      caches.open(cacheName).then((cache) => {
        cache.put(request, networkResponse.clone());
      });
    }

    return networkResponse;
  } catch (error) {
    return Response.error();
  }
}

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (precachedResources.includes(url.pathname)) {
    event.respondWith(cacheFirst(event.request));
  }
});