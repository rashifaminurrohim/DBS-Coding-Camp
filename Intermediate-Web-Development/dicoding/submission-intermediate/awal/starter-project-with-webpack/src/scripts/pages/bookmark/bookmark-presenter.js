export default class BookmarkPresenter {
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

  async initialGalleryAndMap() {
    // this.#view.showReportsListLoading();

    try {
      await this.showStoryListMap();

      const listOfStory = await this.#model.getAllStories();
      const reports = await Promise.all(listOfStory);

      const message = 'Berhasil mendapatkan daftar laporan tersimpan.';
      this.#view.populateBookmarkedStories(message, reports);
    } catch (error) {
      console.error('initialGalleryAndMap: error:', error);
      // this.#view.populateBookmarkedReportsError(error.message);
    } finally {
      // this.#view.hideReportsListLoading();
    }
  }
}
