/** 
 * * Service worker Lifecycle
 */

// install
self.addEventListener('install', () => {
  console.log('Service worker is installing...');
});

// activate
self.addEventListener('activate', (event) => {
  console.log('Service worker is activating...');
});

// Idle