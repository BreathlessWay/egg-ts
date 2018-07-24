import BaseController from './base';

export default class DetailController extends BaseController {
  async index () {
    const id = this.ctx.params.id;
    // if (!id) {
    //   this.ctx.redirect('/');
    //   return;
    // }
    const res = await this.service.detail.getDetail(id);
    if (!res) {
      this.ctx.status = 404;
      return;
    }
    await this.ctx.render('detail', {
      detail: res
    });
  }
}
