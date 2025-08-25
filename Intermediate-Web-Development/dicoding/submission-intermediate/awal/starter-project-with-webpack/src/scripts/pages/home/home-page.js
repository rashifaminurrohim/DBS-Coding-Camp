import HomePresenter from "./home-presenter";
import * as StoryApi from "../../data/api";
import Map from "../../utils/map";
import { storyCardItem } from "../../template";
import { generateLoaderAbsoluteTemplate } from "../../template.js";

export default class HomePage {
  #presenter = null;
  #map = null;

  async render() {
    return `
        <section class="home-container">
          <div id="story-list" class="story-list"></div>
          <div class="story-list__map__container">
            <div id="map" class="story-list__map"></div>
            <div id="map-loading-container"></div>
          </div>
        </section>
    `;
  }

  async afterRender() {
    // Do your job here
    this.#presenter = new HomePresenter({
      view: this,
      model: StoryApi
    });

    await this.#presenter.getAllStories();
  }

  
  async initialMap() {
    this.#map = await Map.build('#map', {
      zoom: 5,
      locate: true,
    });
  }

  populateStoryList(message, stories) {
    const container = document.getElementById('story-list');
    
    if (!stories || stories.length === 0) {
      container.innerHTML = '<p>No stories found.</p>';
      return;
    }

    const coordinatesList = [];

    const html = stories.reduce((accumulator, story) => {
      if (this.#map) {
        const coordinate = [story.coordinate.lat, story.coordinate.lon];
        const markerOptions = { alt: story.name };
        const popupOptions = { content: story.name };
        console.log('Adding marker at:', story.lat, story.lon);
        
        this.#map.addMarker(coordinate, markerOptions, popupOptions);
        coordinatesList.push(coordinate);
      }
      return accumulator.concat(
        storyCardItem({ ...story })
      );
    }, '');
    
    container.innerHTML = html;
    if (coordinatesList.length > 0) {
      this.#map.fitBounds(coordinatesList);
    }
  }

  showMapLoading() {
    document.getElementById('map-loading-container').innerHTML = generateLoaderAbsoluteTemplate();
  }

  hideMapLoading() {
    document.getElementById('map-loading-container').innerHTML = '';
  }

}
