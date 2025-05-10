/**
 * * Dasar Penggunaan CacheStorage
 */

/**
 * * mengecek keberadaan cache storage api
 */
const isCacheAvailable = 'caches' in self;


/**
 * * menyimpan data cache
 */
// membuka cache terlebih dahulu
async function precacheResources(cacheName) {
  const cache = await caches.open(cacheName);
  
  // Do precaching...
}

precacheResources('calculator-cache-v1');


/**
 * * menambah atau memperbarui data
 * - method add (request argument / URL argument)
 * - method addAll (untuk banyak request)
 * - method put (2 parameter = request, response)
 */
// Method add
// Request argument
async function precacheResources(cacheName) {
  const cache = await caches.open(cacheName);
  
  // Request to server and store index.html if success
  await cache.add(new Request('/index.html'));
}
// URL argument
async function precacheResources(cacheName) {
  const cache = await caches.open(cacheName);
  
  // Request to server and store index.html if success
  await cache.add('/index.html');
}

// Method addAll
async function precacheResources(cacheName) {
  const cache = await caches.open(cacheName);
  
  await cache.addAll([
    '/index.html',
    '/offline.html',
    '/styles.css',
    '/scripts.js',
  ]);
}

this.addEventListener('install', (event) => {
  event.waitUntil(precacheResources('calculator-cache-v1'));
});

// Method put
async function precacheResources(cacheName) {
  const cache = await caches.open(cacheName);
  
  const url = 'index.html';
  const response = await fetch(url);
  await cache.put(url, response.clone());

  return response;
}
// memfilter method put karena method ini tidak memvalidasi response dari server
async function precacheResources(cacheName) {
  const cache = await caches.open(cacheName);

  const url = '/index.html';
  const response = await fetch(url);

  if (!response.ok) {
    throw new TypeError('Bad response status');
  }

  await cache.put(url, response);
}

/**
 * * Mengambil data cache
 */
async function getResource() {
  const response = await caches.match('index.html');
  
  // Do something with response...
}
// menggunakan parameter optional options
async function getResource() {
  const response = await caches.match('results.json', {
    cacheName: 'calculator-cahce-v1',
  });
  
  // Do something with response...
}

/**
 * * Mengehapuse data cache
 */
await caches.delete('calculator-caches-v1');
// penghapusan cache dikombinasikan dengan method keys
async function deleteOldCaches() {
  const listOfCaches = await caches.keys();

  listOfCaches.map((cache) => {
    if (cache !== 'calculator-cache-v1') {
      caches.delete(cache);
    }
  })
}

