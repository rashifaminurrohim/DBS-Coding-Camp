/**
 * * mendaftarkan service worker
 *   method register diproses secara asynchronous (Promise) sehingga kita perlu menanganinya dengan chaining method then atau async-await.
 */

// menggunakan chaining method then
navigator.serviceWorker.register('/sw.js').then(
  (registration) => {
    console.log('Service worker registration seucceeded:', registration);
  },
  (error) => {
    console.log('Service worker registration failed:', error);
  }
);

// menggunakan async-await dan menambahkan pengecekan pada browser
async function swRegister() {
  if (!('serviceWorker' in navigator)) {
    console.error('Service worker API not supported.');
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register('sw.js');
    console.log('Service worker registration succeeded:', registration);
  } catch (error) {
    console.error('Service worker registration failed:', error);
  }
  
}