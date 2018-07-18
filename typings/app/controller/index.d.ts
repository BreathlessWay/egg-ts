// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Base from '../../../app/controller/base';
import Home from '../../../app/controller/home';
import News from '../../../app/controller/news';
import Posts from '../../../app/controller/posts';
import V1Comments from '../../../app/controller/v1/comments';

declare module 'egg' {
  interface IController {
    base: Base;
    home: Home;
    news: News;
    posts: Posts;
    v1: {
      comments: V1Comments;
    };
  }
}
