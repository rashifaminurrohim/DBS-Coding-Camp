/**
 * * Notification API
 */

// Meminta izin notifikasi
async function requestNotificationPermission() {
  // Ask permission to user
  const result = await Notification.requestPermission();

  if (result === 'denied') {
    console.log('Izin notifikasi ditolak');
    return;
  }

  if (result === 'default') {
    console.log('Izin notifikasi ditutup atau diabaikan.');
    return;
  }

  console.log('Izin notifikasi diberikan');
};

// Pengecekan apakah browser support notification
if ('Notification' in window) {
  requestNotificationPermission();
}

/**
 * * 2 cara Menampilkan notifikasi
 */
// 1. Notification constructor (dijalankan di UI Thread)
const title = 'Todo baru telah ditambahkan!'; // parameter wajib
const options = { body: 'Segera selesaikan sebelum tanggal 12 Desember 2025.' }; // parameter opsional
new Notification(title);

// 2. SeviceWorkerRegistration (dijalankan di Background Thread)
navigator.serviceWorker.ready.then((registration) => {
  const title = 'Todo baru telah ditambahkan!';
  const options = { body: 'Segera selesaikan sebelum tanggal 12 Desember 2025.' }; // parameter opsional
  
  registration.showNotification(title, options);
});
// jalankan di background Thread
self.addEventListener('push', (event) => {
  const showNotification = async () => {
      const title = 'Todo baru telah ditambahkan!';
      const options = { body: 'Segera selesaikan sebelum tanggal 12 Desember 2025.' }; // parameter opsional

      await self.registration.showNotification(title, options);
    };

    event.waitUntil(showNotification());
  });