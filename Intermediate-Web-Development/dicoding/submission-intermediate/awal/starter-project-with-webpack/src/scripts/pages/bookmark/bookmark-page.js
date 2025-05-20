import { 
  generateLoaderAbsoluteTemplate, 
  storyCardItem,
} from '../../template';

import BookmarkPresenter from './bookmark-presenter';
import Map from '../../utils/map';
import Database from '../../data/database';

export default class BookmarkPage {
  #presenter = null;
  #map = null;

  async render() {
    return `
      <section>
        <div class="story-list__map__container">
          <div id="map" class="story-list__map"></div>
          <div id="map-loading-container"></div>
        </div>
      </section>

      <section class="container">
        <h1>Story Bookmarked</h1>
        <div id="story-list" class="story-list"></div>
      </section>
    `;
  }

  async afterRender() {
    this.#presenter = new BookmarkPresenter({
      view: this,
      model: Database,
    });

    await this.#presenter.initialGalleryAndMap();
  }

  async initialMap() {
      this.#map = await Map.build('#map', {
        zoom: 5,
        locate: true,
      });
  }

  populateBookmarkedStories(message, stories) {
    const container = document.getElementById('story-list');
    
    if (!stories || stories.length === 0) {
      container.innerHTML = '<p>No stories found.</p>';
      return;
    }

    const coordinatesList = [];

    const html = stories.reduce((accumulator, story) => {
      if (this.#map) {
        const coordinate = [story.lat, story.lon];
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