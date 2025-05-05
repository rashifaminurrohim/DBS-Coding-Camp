import Camera from "../../utils/camera";

export default class PostStoryPage {
  #presenter;
  #form;
  #camera;
  #isCameraOpen = false;
  #takenDocumentations = [];

  async render() {
    return `
      <section>
        <div class="add-story__header">
            <h1 class="add-story__header__title">Form Tambah Cerita</h1>
        </div>
      </section>
  
      <section class="container">
        <div class="new-form__container">
          <form id="new-form" class="new-form">
            <div class="form-control">
              <label for="documentations-input" class="new-form__documentations__title">Cheese!</label>
              <div id="documentations-more-info">Ambil gambar dan bagikan.</div>
              <div class="new-form__documentations__container">
                <div class="new-form__documentations__buttons">
                  <button id="documentations-input-button" class="btn btn-outline" type="button">
                    Ambil Gambar
                  </button>
                  <input
                    id="documentations-input"
                    name="documentations"
                    type="file"
                    accept="image/*"
                    multiple
                    hidden="hidden"
                    aria-multiline="true"
                    aria-describedby="documentations-more-info"
                  >
                  <button id="open-documentations-camera-button" class="btn btn-outline" type="button">
                    Buka Kamera
                  </button>
                </div>
                <div id="camera-container" class="new-form__camera__container">
                  <video id="camera-video" class="new-form__camera__video">
                    Video stream not available.
                  </video>
                  <div class="new-form__camera__tools">
                    <select id="camera-select"></select>
                  </div>
                </div>
                <ul id="documentations-taken-list" class="new-form__documentations__outputs"></ul>
              </div>
            </div>

            <div class="form-control">
              <label for="description-input" class="new-form__description__title">Keterangan</label>
              <div class="new-form__description__container">
                <textarea
                  id="description-input"
                  name="description"
                  placeholder="Masukkan cerita anda."
                ></textarea>
              </div>
            </div>

            <div class="form-control">
            <div class="new-form__location__title">Lokasi</div>
            
            <div class="new-form__location__container">
            <div class="new-form__location__map__container">
                    <div id="map" class="new-form__location__map"></div>
                    <div id="map-loading-container"></div>
                  </div>
                  <div class="new-form__location__lat-lng">
                    <input type="number" name="latitude" value="-6.175389" disabled>
                    <input type="number" name="longitude" value="106.827139" disabled>
                  </div>
                </div>
              </div>
              <div class="form-buttons">
                <button class="btn" type="submit">Unggah Cerita</button>
              </div>
          </form>
        </div>
      </section>
    `;
  }

  async afterRender() {
    // Do your job here

    this.#takenDocumentations = [];
    this.#setupForm();
  }

  #setupForm() {

    const cameraContainer = document.getElementById('camera-container');
    document
    .getElementById('open-documentations-camera-button')
    .addEventListener('click', async (event) => {
      cameraContainer.classList.toggle('open');
      this.#isCameraOpen = cameraContainer.classList.contains('open');

      if (this.#isCameraOpen) {
        event.currentTarget.textContent = 'Tutup Kamera';
        this.#setupCamera();
        this.#camera.launch();

        return;
      }

      event.currentTarget.textContent = 'Buka Kamera';
      this.#camera.stop();
    });
  }

  async initialMap() {
    // TODO: map initialization
  }

  #setupCamera() {
    if (this.#camera) {
      return;
    }
    this.#camera = new Camera({
      video: document.getElementById('camera-video'),
      cameraSelect: document.getElementById('camera-select'),
    });
  }

}
