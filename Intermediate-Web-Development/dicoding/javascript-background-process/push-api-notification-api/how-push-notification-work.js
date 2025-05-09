/**
 * * Cara Kerja Web Push Notification
 */

/**
 * * Langkah Pertama: Meminta Izin Notifikasi
 */

/**
 * * Langkah Kedua: Berlangganan ke Push Message
 * - Get permission to send push messages
 * - Get PushSubscription
 * - Send PushSubcription to server
 */

// VAPID ID for client server auth
export function convertBase64ToUint8Array(base64String) {
  const base64 = base64String
  .padEnd(base64String.length + ((4 - (base64String.length % 4)) % 4), '=')
  .replace(/-/g, '+')
  .replace(/_/g, '/');
  const rawData = atob(base64);
  
  return new Uint8Array(rawData.split('').map((char) => char.charCodeAt(0)));
}

// user melakukan subscribe ke push message.
async function subscribeToWebPush() {
  const registration = await navigator.serviceWorker.register('/service-worker.js');

  const PushSubscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: convertBase64ToUint8Array('VAPID_PUBLIC_KEY'),
  });

  console.log(JSON.stringify(PushSubscription));
  
  return PushSubscription;
}

/**
 * * Langkah Ketiga: Mengirim Push Message
 * 
 */
// mengirimkan PushSubscription ke server
async function saveSubscriptionToServer(subscribe) {
  const response = await fetch('/api/save-subscription/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(PushSubscription)
  });

  if(!response.ok) {
    throw new Error('Bad status code from server.');
  }
  
  const responseJson = await response.json();
  if(!(responseJson.data && responseJson.data.success)) {
    throw new Error('Bad response from server.');
  }
}

/**
 * * Langkah Keempat: Menerima Push Message
 * 
 */





