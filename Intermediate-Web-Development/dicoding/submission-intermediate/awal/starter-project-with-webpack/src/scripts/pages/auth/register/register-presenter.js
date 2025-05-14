export default class RegisterPresenter {
  #view
  #model

  constructor({ view, model}) {
    this.#view = view,
    this.#model = model
  }

  async getRegistered({ name, email, password }) {
    this.#view.showSubmitLoadingButton();
    try {
      const response = await this.#model.getRegister({ name, email, password });

      if (response.error) {
        console.error('getRegistered: response:', response);
        this.#view.registeredFailed(response.message);
        return;
      }
      
      this.#view.registeredSuccessfully(response.message, response.data);
    } catch (error) {
      console.error('getRegistered: error:', error);
      this.#view.registeredFailed(error.message);
    } finally {
      this.#view.hideSubmitLoadingButton();
    }
  }
}