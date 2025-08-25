import { storyMapper } from "../../data/api-mapper";

export default class HomePresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async showStoryListMap() {
    this.#view.showMapLoading();
    try {
      await this.#view.initialMap();
    } catch (error) {
      console.error('showReportsListMap: error:', error);
    } finally {
      this.#view.hideMapLoading();
    }
  }

  async getAllStories() {
    // this.#view.showLoading();
    try {
      await this.showStoryListMap();
      const response = await this.#model.getAllStories({ location: 1 });
      console.log('API Response:', response);
      if (response.error) {
        console.error('getAllStories: error:', response.message);
        alert(response.message);
        return;
      }

      const mappedStories = await Promise.all(
        response.listStory.map(storyMapper)
      );

      this.#view.populateStoryList(response.message, mappedStories);
    } catch (error) {
      console.log(error.message);
    } 
    // finally {
    //   // this.#view.hideLoading();
    // }
  }
}