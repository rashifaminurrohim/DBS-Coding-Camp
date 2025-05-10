/**
 * * Stale-While-Revalidate
 * Pada strategi stale-while-revalidate, 
 * kita mengembalikan dahulu data dari cache storage bila ada 
 * sembari meneruskan juga ke jaringan untuk memperbarui data yang tersimpan. 
 * Jadi, untuk request selanjutnya, user akan selalu memperoleh data terbaru saat offline.
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

async function staleWhileRevalidate(request) {
  const fetchResponsePromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      caches.open(cacheName).then((cache) => {
        cache.put(request, networkResponse.clone());
      });
    }
    return networkResponse;
  });

  return (await caches.match(request) || (await fetchResponsePromise));
}

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (precachedResources.includes(url.pathname)) {
    event.respondWith(staleWhileRevalidate(event.request));
  }
});