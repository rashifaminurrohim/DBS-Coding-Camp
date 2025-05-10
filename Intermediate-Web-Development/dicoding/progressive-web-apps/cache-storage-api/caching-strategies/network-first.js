/**
 * * Network First (Network Fallback to Cache)
 * Network first adalah strategi yang selalu mengirim request ke internet. 
 * Apabila request berhasil, selain menampilkan pada DOM, response akan dimasukkan ke cache. 
 * Namun, bila request gagal karena jaringan terputus atau koneksi lambat, 
 * ia langsung dialihkan ke cache storage.
 * Strategi ini cocok untuk aset atau data yang selalu diperbarui secara berkala, tetapi tidak terlalu krusial.
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

async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      caches.open(cacheName).then((cache) => {
        cache.put(request, networkResponse.clone());
      });
    }

    return networkResponse;
  } catch {
    const cachedResponse = await caches.match(request);
    return cachedResponse || Response.error();
  }
}

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (precachedResources.includes(url.pathname)) {
    event.respondWith(networkFirst(event.request));
  }
});