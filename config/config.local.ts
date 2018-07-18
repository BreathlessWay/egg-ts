import { BaseConfig, DefaultConfig } from './config.default';

interface DevConfig {
  compress: { threshold: number };
}

export default () => {
  const config = {} as DefaultConfig & DevConfig;
  config.news = {
    serverUrl: 's://cnodejs.org/api/v1'
  };
  config.middleware = [ 'errorHandler', 'errorPage', 'compress' ];  // 加载顺序 error=>compress=>...
  config.compress = {
    threshold: 1024
  };
  config.logger = {
    level: 'NONE',
    consoleLevel: 'INFO'
  };
  return config;
};

declare module 'egg' {
  interface EggAppConfig extends BaseConfig, DevConfig {

  }
}
