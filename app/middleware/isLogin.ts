import { Context } from 'egg';

export default function () {
  return async (ctx: Context, next: () => Promise<any>) => {
    if (ctx.session.user) {
      if (ctx.acceptJSON) {
        ctx.body = {
          success: false,
          data: '已经登录过了'
        };
      } else {
        ctx.redirect('/');
      }
      return;
    }
    await next();
  };
}
