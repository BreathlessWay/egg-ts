import { Application } from 'egg';

export default (app: Application) => {
  const {router, controller} = app;
  router.get('/', controller.home.index);
  router.get('/api', controller.api.index);
  router.get('/about', controller.about.index);
};
