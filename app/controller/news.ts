import { Context } from 'egg';
import BaseController from './base';

export default class NewsController extends BaseController {
  constructor (ctx: Context) {
    super(ctx);
  }

  async list () {
    const {ctx, app} = this;
    const page = ctx.query.page || 1;
    console.log(this.app._name, ctx.isIOS, this.config.env, BaseController.baseController, ctx.session, app.bar);
    const newsList = await ctx.service.news.list(page);
    // ctx.logger.error('something wrong');
    await ctx.render('news/list', {list: newsList});
  }

}
