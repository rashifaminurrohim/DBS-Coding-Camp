import { getActiveRoute } from './routes/url-parser.js';
import routes from './routes/routes.js';

export default class App {
  #content;

  constructor({ content }) {
    this.#content = content;
  }

  async renderPage() {
    const routeName = getActiveRoute();
    const route = routes[routeName];

    // Get page instance
    const page = route();

    // Alternative DOM update for browsers that do not support view transition
    if(!document.startViewTransition) {
      this.#content.innerHTML = await page.render();
      await page.afterRender();

      return;
    }

    const transition = document.startViewTransition(async () => {
      this.#content.innerHTML = await page.render();
      await page.afterRender();
    });

    transition.updateCallbackDone.then(() => {
      console.log('Callback telah dieksekusi.');
    });

    transition.ready.then(() => {
      console.log('View transition siap dijalankan.');
    });

    transition.finished.then(() => {
      console.log('View transition telah selesai');
    });

    // const transition = document.startViewTransition(() => {
    //   updateDOM();
    // });

    // // Skip the view transition and update only the DOM
    // transition.skipTransition();
    
  }
}
