import BaseController from './base';

export default class HomeController extends BaseController {
  public async index () {
    await this.ctx.render('api');
  }
}
