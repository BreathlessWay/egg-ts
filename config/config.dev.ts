import { BaseConfig, DefaultConfig } from './config.default';

interface DevConfig {
  compress: { threshold: number };
}

export default () => {
  const config = {} as DefaultConfig & DevConfig;
  config.news = {
    serverUrl: 'https://cnodejs.org/api/v1'
  };
  config.middleware = [ 'errorHandler', 'errorPage', 'compress', 'flash' ];  // 加载顺序 error=>compress=>...
  config.compress = {
    threshold: 1024
  };
  return config;
};

declare module 'egg' {
  interface EggAppConfig extends BaseConfig, DevConfig {

  }
}
