import { Controller } from 'egg';

export default class BaseController extends Controller {
  static get baseController () {
    return 'baseController';
  }

  notFound (msg: string) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}
