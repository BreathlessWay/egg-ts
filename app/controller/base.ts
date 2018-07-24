import { Controller } from 'egg';

export default class BaseController extends Controller {
  get user () {
    return this.ctx.session.user;
  }

  set user (value) {
    this.ctx.session.user = value;
  }
}
