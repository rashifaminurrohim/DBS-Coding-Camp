/**
 * * Cache Only
 * - hanya mengandalkan cache storage sebagai sumber dari aset yang dicari–tanpa jaringan sama sekali.
 * - cocok digunakan pada aset statis yang sangat jarang berubah, seperti aset untuk app shell.
 */
/**
 * Tahapannya diawali dengan melakukan precaching, 
 * yaitu menyimpan aset dalam cache pada saat instalasi service worker (InstallEvent).
 */
const cacheName = 'calculator-cache-v1';
const precachedResources = ['/', '/app.js', '/style.css'];

async function precache() {
  const cache = await caches.open(cacheName);
  return cache.addAll(precachedResources);
}

self.addEventListener('install', (event) => {
  event.waitUntil(precache());
})

/**
 * Untuk request berikutnya, 
 * aplikasi tidak perlu lagi mengirim ke jaringan. 
 * Ia cukup memanfaatkan resource yang tersimpan dalam cache storage.
 * contoh implementasi strategi ini pada service worker.
 */
async function cacheOnly(request) {
  const response = await caches.match(request);
  return response || new Response('Response not available in cache', { status: 404 });
}

self.addEventListener('fetch', (event) => {
  event.respondWith(cacheOnly(event.request));
})

/**
 * Strategi cache only hanya mengandalkan data yang telah tersimpan dalam cache storage melalui InstallEvent. 
 * Lalu, bagaimana cara kita untuk memperbarui aset-asetnya? 
 * Satu-satunya caranya adalah dengan menghapus cache lama 
 * dan melakukan precaching kembali untuk aset yang baru.
 */
// Previously v1, now changed to v2
// const cacheName = 'calculator-cache-v2';
// const precachedResources = ['/', '/app.js', '/styles.css'];

async function precache() {
  const cache = await caches.open(cacheName);
  return cache.addAll(precachedResources);
}

self.addEventListener('install', (event) => {
  event.waitUntil(precache());
});

async function deleteOldCaches() {
  const cacheName = await caches.keys();
  const oldCacheNames = cacheName.filter((name) => name !== cacheName);

  await Promise.all(oldCacheNames.map(async (oldCacheName) => {
    return await caches.delete(oldCacheName);
  }));
}

self.addEventListener('activate', (event) => {
  event.waitUntil(deleteOldCache());
});