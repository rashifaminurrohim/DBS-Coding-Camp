let width = 320;
let height = 0;

let streaming = false;
let currentStream;

async function startup() {
  const cameraVideo = document.getElementById('camera-video');
  const cameraCanvas = document.getElementById('camera-canvas');
  const cameraTakeButton = document.getElementById('camera-take-button');
  const cameraOutputList = document.getElementById('camera-list-output');
  const cameraListSelect = document.getElementById('camera-list-select');

  function populateTakenPicture(image) {
    cameraOutputList.innerHTML = `
      <li><img src="${image}" alt=""</li>
    `;
  }

  async function getStream() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: {
            exact: !streaming ? undefined : cameraListSelect.value,
          },
          aspectRatio: 16 / 9,
          width: {
            min: 640,
            max: 1920,
            ideal: 1280
          },
          height: {
            min: 480,
            max: 1080,
            ideal: 720
          }
        },
      });

      // Show available camera after camera permission granted
      await populateCameraList(stream);
      
      return stream;
    } catch (error) {
      throw error;
    }
  }

  async function populateCameraList() {
    try {
      // Get all available webcam
      const enumerateDevices = await navigator.mediaDevices.enumerateDevices();
      const list = enumerateDevices.filter((device) => device.kind == 'videoinput');

      cameraListSelect.innerHTML = list.reduce((accumulator, device, currentIndex) => {
        return accumulator.concat(`
            <option value="${device.deviceId}">
              ${device.label || `Camera ${currentIndex + 1}`}
            </option>  
          `);
      }, '');
    } catch (error) {
      throw error;
    }
  }

  function cameraLaunch(stream) {
    cameraVideo.srcObject = stream;
    cameraVideo.play();
  }

  function cameraTakePicture() {
    const context = cameraCanvas.getContext('2d');
    cameraCanvas.width = width;
    cameraCanvas.height = height;
    context.drawImage(cameraVideo, 0, 0, width, height);
    
    return cameraCanvas.toDataURL('image/png');
  }

  function stopCurrentStream() {
    if (!(currentStream instanceof MediaStream)) {
      return;
    }

    currentStream.getTracks().forEach((track) => {
      track.stop();
    });
  }

  cameraTakeButton.addEventListener('click', () => {
    const imageUrl = cameraTakePicture();
    populateTakenPicture(imageUrl);
  });

  cameraVideo.addEventListener('canplay', () => {
    if (streaming) {
      return;
    }

    // Calculate height dynamically
    height = (cameraVideo.videoHeight * width) / cameraVideo.videoWidth;
    cameraVideo.setAttribute('width', width.toString());
    cameraVideo.setAttribute('height', height.toString());
    cameraCanvas.setAttribute('width', width.toString());
    cameraCanvas.setAttribute('height', height.toString());

    streaming = true;
  });

  cameraListSelect.addEventListener('change', async (event) => {
    stopCurrentStream();

    currentStream = await getStream();
    cameraLaunch(currentStream);
  })

  async function init() {
    try {
      currentStream = await getStream();
      cameraLaunch(currentStream);

      currentStream.getVideoTracks().forEach((track) => {
        console.log(track.getSettings());
      });
    } catch (error) {
      console.error(error);
      alert('Error occured:', error.message);
    }
  }

  init();
}

window.onload = startup;
