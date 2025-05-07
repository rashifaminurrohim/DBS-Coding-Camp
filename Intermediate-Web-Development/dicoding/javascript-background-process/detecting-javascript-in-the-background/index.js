const logElement = document.querySelector('#logger');

function log(text) {
  logElement.innerHTML = `${text}\n${logElement.innerHTML}`;
}

// Page Visibility API
let backgroundInitialTime;
window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    const now = new Date().toLocaleTimeString();
    log(`Going to the background at ${now}`);
    backgroundInitialTime = performance.now();
  } else {
    const timeElapsed = parseInt((performance.now() - backgroundInitialTime) / 1000);
    log(`Back from the background after ${timeElapsed}s.`)
  }
});

/**
 * * contoh implementasi visibility API event 
 */
  window.addEventListener('visibilitychange', (event) => {
    if (document.visibilityState === 'hidden') {
      // We are in the background
    } else {
      // We are back in the foreground
    }
  });