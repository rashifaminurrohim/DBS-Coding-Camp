export default class PostStoryPresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async postNewStory ({ desc, photo, lat, lon }) {
    // loading func
    try {
      const data = {
        description: desc,
        photo: photo,
        lat: lat,
        lon: lon,
      }

      const response = await this.#model.postNewStory(data);
      if (response.error) {
        console.error('postNewStory: response:', response.message);
        // #view inform user bout the error
        return;
      }
      // #view inform user post success
    } catch (error) {
      console.error('postNewReport: error:', error);
      // #view inform user post success
    }
    // hide loading on finally block
  }
}