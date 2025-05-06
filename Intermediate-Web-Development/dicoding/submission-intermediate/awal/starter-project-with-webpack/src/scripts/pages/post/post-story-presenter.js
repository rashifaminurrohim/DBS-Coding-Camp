export default class PostStoryPresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async showPostFormMap() {
    this.#view.showMapLoading();
    try {
      await this.#view.initialMap();
    } catch (error) {
      console.error('showNewFormMap: error:', error);
    } finally {
      this.#view.hideMapLoading();
    }
  }

  async postNewStory ({ description, photo, lat, lon }) {
    this.#view.showSubmitLoadingButton();
    try {
      const data = {
        description: description,
        photo: photo,
        lat: lat,
        lon: lon,
      }

      const response = await this.#model.postNewStory(data);
      if (response.error) {
        console.error('postNewStory: response:', response.message);
        this.#view.storeFailed(response.message);
        return;
      }
      this.#view.storeSuccessfully(response.message, response.data);
    } catch (error) {
      console.error('postNewReport: error:', error);
      this.#view.storeFailed(error.message);
    } finally {
      this.#view.hideSubmitLoadingButton();
    }
  }
}