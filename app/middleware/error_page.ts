const status = [ 404, 403 ];

export default () => {
  return async function errorPage (ctx, next) {
    await next();
    if (status.includes(ctx.status) && !ctx.body) {
      const {message} = ctx;
      if (ctx.acceptJSON) {
        ctx.body = {error: 'Not Found'};
      } else {
        await ctx.render('404.njk', {
          code: 404,
          error: message || '页面找不到了'
        });
      }
    }
  };
};
