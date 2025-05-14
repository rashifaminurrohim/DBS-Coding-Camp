import LoginPage from '../pages/auth/login/login-page';
import RegisterPage from '../pages/auth/register/register-page';
import HomePage from '../pages/home/home-page';
import PostStoryPage from '../pages/post/post-story-page';
import { checkhAuthenticatedRoute, checkUnauthenticatedRouteOnly } from '../utils/auth';

const routes = {
  '/register': () => checkUnauthenticatedRouteOnly(new RegisterPage()),
  '/login': () => checkUnauthenticatedRouteOnly(new LoginPage()),
  '/': () => checkhAuthenticatedRoute(new HomePage()),
  '/post-story': () => checkhAuthenticatedRoute(new PostStoryPage()),
};

export default routes;
