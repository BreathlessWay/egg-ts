import { Application } from 'egg';

export default (app: Application) => {
  const {router, controller} = app;
  router.get('/', controller.home.index);
  router.get('/api', controller.api.index);
  router.get('/about', controller.about.index);
  router.post('/login', controller.login.index);
  router.get('/logout', controller.logout.index);
  router.get('/detail/:id', controller.detail.index);
};
