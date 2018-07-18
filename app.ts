import { Application } from 'egg';

export default (app: Application) => {
  app.beforeStart(async () => {
    console.log('before start');
  });
  app.locals = {
    today: ''
  };

  console.log(app);
  if (app.config.env !== 'local') {
    global.console.log = () => {
      return false;
    };
  }

  app._name = 'koa-app';
  app.once('server', server => {
    // websocket
    app.messenger.sendToAgent('reload', '');
    console.log('server', server);
  });
  app.on('error', (err, ctx) => {
    // report error
    console.log('error', err, ctx);
  });
  app.on('request', ctx => {
    // log receive request
    console.log(ctx.protocol);
    console.log(app.config.news.serverUrl);
    if (!app.config.news.serverUrl!.includes('http')) {
      ( app.config.news.serverUrl = ctx.protocol + app.config.news.serverUrl );
    }
    console.log('request');
  });
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    // log total cost
    console.log('response', ctx);
  });
  app.httpclient.on('request', (req: any) => {
    console.log('app.httpClient.request:', req.args.data.limit = 1);
    // 可以在这里设置一些 trace headers，方便全链路跟踪
  });
  app.httpclient.on('response', (result: any) => {
    console.log('app.httpClient.response:', result);
  });
};

declare module 'egg' {
  interface Application {
    _name: string;
  }
}
