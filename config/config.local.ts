import { BaseConfig, DefaultConfig } from './config.default';

export default () => {
  const config = {} as DefaultConfig;
  config.news = {
    serverUrl: 'https://cnodejs.org/api/v1'
  };
  config.middleware = [ 'errorHandler', 'errorPage' ];  // 加载顺序 error=>compress=>...

  return config;
};

declare module 'egg' {
  interface EggAppConfig extends BaseConfig {

  }
}
