import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BaseConfig>;

// 应用本身的配置 Scheme
export interface BaseConfig {
  news: {
    limit: number;
    serverUrl?: string;
  };
}

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig> & BaseConfig;

  // 覆盖框架，插件的配置;
  config.keys = appInfo + 'koa-app';
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.njk': 'nunjucks'
    },
    defaultExtension: '.njk'
  };

  // 应用本身的配置;
  config.news = {
    limit: 15
  };

  return config;
};
