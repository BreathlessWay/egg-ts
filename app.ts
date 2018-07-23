import { Application } from 'egg';

export default (app: Application) => {
  if (app.config.env === <string> 'local' && app.config.env === <string> 'unittest') {
    global.console.log = () => {
      return false;
    };
  }

  app.once('server', () => {
    if (process.env.NODE_ENV === 'development') {
      app.messenger.sendToAgent('reload', '');
    }
  });
  app.on('error', (err, ctx) => {
    // report error
    console.log('error', err, ctx);
  });
  app.httpclient.on('request', () => {
    // console.log('app.httpClient.request:', request);
  });
  app.httpclient.on('response', () => {
    // console.log('app.httpClient.response:', result);
  });
};
