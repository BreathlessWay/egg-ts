import BaseController from './base';

export default class HomeController extends BaseController {
  public async index () {
    this.ctx.locals.active = this.ctx.query.tab || 'all';
    this.ctx.locals.page = this.ctx.query.page || 1;
    const res = await this.ctx.service.home.list({tab: this.ctx.query.tab, page: this.ctx.locals.page});
    const hasMore = res.length === this.config.news.limit;
    await this.ctx.render('home', {
      lists: [
        {
          name: '全部',
          tab: 'all'
        }, {
          name: '精华',
          tab: 'good'
        }, {
          name: '分享',
          tab: 'share'
        }, {
          name: '问答',
          tab: 'ask'
        }, {
          name: '招聘',
          tab: 'job'
        }, {
          name: '测试',
          tab: 'dev'
        }
      ],
      articles: res,
      hasMore
    });
  }
}
