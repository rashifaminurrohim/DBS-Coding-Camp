import AboutPage from "../pages/about-page.js";
import HomePage from "../pages/home-page.js";

const routes = {
  '/': () => new HomePage(),
  '/about': () => new AboutPage(),
};

export default routes;
