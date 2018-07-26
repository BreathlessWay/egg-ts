const status = [ 404, 403 ];

export default () => {
  return async (ctx, next) => {
    await next();
    if (status.includes(ctx.status) && !ctx.body) {
      console.log('404', ctx.message);
      if (ctx.acceptJSON) {
        ctx.body = {error: 'Not Found'};
      } else {
        await ctx.render('404.njk', {
          code: 404,
          error: '页面找不到了'
        });
      }
    }
  };
};
