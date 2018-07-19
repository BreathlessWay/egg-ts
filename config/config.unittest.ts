import { BaseConfig, DefaultConfig } from './config.default';

interface DevConfig {
  compress: { threshold: number };
}

export default () => {
  const config = {} as DefaultConfig & DevConfig;
  config.news = {
    serverUrl: 's://cnodejs.org/api/v1'
  };
  return config;
};

declare module 'egg' {
  interface EggAppConfig extends BaseConfig, DevConfig {

  }
}
