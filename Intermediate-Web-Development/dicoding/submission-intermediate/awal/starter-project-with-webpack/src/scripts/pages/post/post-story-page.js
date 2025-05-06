import { convertBase64ToBlob } from "../../utils/ConvertBase64toBlob";
import Camera from "../../utils/camera";
import PostStoryPresenter from "./post-story-presenter.js";
import * as StoryAPI from '../../data/api';
import Map from "../../utils/map.js";
import { generateLoaderAbsoluteTemplate } from "../../template.js";


export default class PostStoryPage {
  #presenter;
  #form;
  #camera;
  #isCameraOpen = false;
  #takenDocumentation = null;
  #map = null;

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
                  <canvas id="camera-canvas" class="new-form__camera__canvas"></canvas>
                  <select id="camera-select"></select>
                  <div class="new-form__camera__tools_buttons">
                  <button id="camera-take-button" class="btn" type="button">
                  Ambil Gambar
                  </button>
                  </div>
                </div>
                </div>
                <div id="documentations-taken-list" class="new-form__documentations__outputs">
                <ul></ul>
                </div>
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
    this.#presenter = new PostStoryPresenter({
      view: this,
      model: StoryAPI,
    });
    this.#takenDocumentation = null;
    this.#presenter.showPostFormMap();
    this.#setupForm();
  }

  #setupForm() {
    this.#form = document.getElementById('new-form');
    this.#form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const data = {
        description: this.#form.elements.namedItem('description').value,
        photo: this.#takenDocumentation.blob,
        lat: this.#form.elements.namedItem('latitude').value,
        lon: this.#form.elements.namedItem('longitude').value,
      };
      await this.#presenter.postNewStory(data);
    })

    document.getElementById('documentations-input-button').addEventListener('click', () => {
      this.#form.elements.namedItem('documentations-input').click();
    });

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
    this.#map = await Map.build('#map', {
      zoom: 15,
      locate: true,
    });

    // Preparing marker for select coordinate
    const centerCoordinate = this.#map.getCenter();
    console.log(centerCoordinate);

    const draggableMarker = this.#map.addMarker(
      [centerCoordinate.latitude, centerCoordinate.longitude],
      { draggable: true },
    );

    draggableMarker.addEventListener('move', (event) => {
      const coordinate = event.target.getLatLng();
      this.#updateLatLngInput(coordinate.lat, coordinate.lng);
    });

    this.#map.addMapEventListener ('click', (event) => {
      console.log(event.latlng)
      draggableMarker.setLatLng(event.latlng);
      // Keep center with user view
      event.sourceTarget.flyTo(event.latlng);
    });

  }

  #updateLatLngInput(latitude, longitude) {
    this.#form.elements.namedItem('latitude').value = latitude;
    this.#form.elements.namedItem('longitude').value = longitude;
  }

  #setupCamera() {
    if (this.#camera) {
      return;
    }
    this.#camera = new Camera({
      video: document.getElementById('camera-video'),
      cameraSelect: document.getElementById('camera-select'),
      canvas: document.getElementById('camera-canvas')
    });

    this.#camera.addCheeseButtonListener('#camera-take-button', async () => {
      const image = await this.#camera.takePicture();
      await this.#addTakenPicture(image);
    });
  }

  async #addTakenPicture(image) {
    let blob = image;

    if (image instanceof String) {
      blob = await convertBase64ToBlob(image, 'image/png');
    }

    const newDocumentation = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      blob: blob,
    };
    this.#takenDocumentation = newDocumentation;
  }

  storeSuccessfully(message) {
    console.log(message);
    this.clearForm();

    // Redirect page
    location.hash = '/';
  }

  storeFailed(message) {
    alert(message);
  }

  clearForm() {
    this.#form.reset();
  }

  showMapLoading() {
    document.getElementById('map-loading-container').innerHTML = generateLoaderAbsoluteTemplate();
  }

  hideMapLoading() {
    document.getElementById('map-loading-container').innerHTML = '';
  }

  showSubmitLoadingButton() {
    document.querySelector('.form-buttons').innerHTML = `
      <button class="btn" type="submit" disabled>
        <i class="fas fa-spinner loader-button"></i> Unggah Cerita
      </button>
    `;
  }

  hideSubmitLoadingButton() {
    document.querySelector('.form-buttons').innerHTML = `
      <button class="btn" type="submit">Unggah Cerita</button>
    `;
  }

}
