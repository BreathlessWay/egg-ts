import { Application } from 'egg';

export default (app: Application) => {
  const {router, controller} = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/api/v1/comments', controller.v1.comments.create);
  // 代码会在/api/posts 路径上部署了一组 CRUD 路径结构，对应的 Controller 为 app/controller/posts.js 接下来， 你只需要在 posts.js 里面实现对应的函数就可以了。
  // CRUD只能返回方法集合不能返回class
  router.resources('posts', '/api/posts', controller.posts);  // RESTful 风格的 URL 定义
};
