import { Application } from 'egg';

export default (app: Application) => {
  const {router, controller, middleware} = app;
  router.get('/', controller.home.index);
  router.get('/api', controller.api.index);
  router.get('/about', controller.about.index);
  router.post('/login', (middleware as any).isLogin(), controller.login.index);
  router.get('/logout', (middleware as any).isNotLogin(), controller.logout.index);
  router.get('/detail/:id', controller.detail.index);
};
