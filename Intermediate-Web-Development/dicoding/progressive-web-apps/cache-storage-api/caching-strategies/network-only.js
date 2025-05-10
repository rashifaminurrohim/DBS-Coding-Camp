/**
 * * Network Only
 *  Sesuai dengan namanya, tanpa mengandalkan cache storage, 
 * ia selalu mengandalkan server sebagai sumber datanya. 
 * Strategi network only sangat cocok diterapkan pada data yang selalu berubah 
 * dan pengguna harus selalu mendapatkan data terbaru, 
 * yakni jumlah stok produk, kuota kursi transportasi, dan sebagainya.
 */

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});