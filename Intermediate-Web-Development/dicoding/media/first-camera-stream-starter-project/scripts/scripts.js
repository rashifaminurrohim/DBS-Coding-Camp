let width = 320;
let height = 0;

let streaming = false;

async function startup() {
  const cameraVideo = document.getElementById('camera-video');
  const cameraCanvas = document.getElementById('camera-canvas');
  const cameraTakeButton = document.getElementById('camera-take-button');
  const cameraOutputList = document.getElementById('camera-list-output');

  function populateTakenPicture(image) {
    cameraOutputList.innerHTML = `
      <li><img src="${image}" alt=""</li>
    `;
  }

  async function getStream() {
    try {
      return await navigator.mediaDevices.getUserMedia({
        video: true,
      });
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

  async function init() {
    try {
      const stream = await getStream();
      cameraLaunch(stream);
    } catch (error) {
      console.error(error);
      alert('Error occured:', error.message);
    }
  }

  init();
}

window.onload = startup;
