import HomePage from '../pages/home/home-page';
import PostStoryPage from '../pages/post/post-story-page';

const routes = {
  '/': new HomePage(),
  '/post-story': new PostStoryPage(),
};

export default routes;
