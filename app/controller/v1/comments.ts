import { Controller } from 'egg';

export default class CommentsController extends Controller {
  public create () {
    this.ctx.body = '/api/v1/comments';
  }
}

declare module 'egg' {
  interface IController {
    v1: {
      comments: CommentsController
    }
  }
}