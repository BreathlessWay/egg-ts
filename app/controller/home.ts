import BaseController from './base';

export default class HomeController extends BaseController {
  public async index () {
    await this.ctx.render('home', {
      content: '<div>服务器内容</div>'
    });
  }
}
