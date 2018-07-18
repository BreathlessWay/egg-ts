// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import { EggAppConfig } from 'egg';
import ExportConfigDefault from '../../config/config.default';
import ExportConfigDev from '../../config/config.dev';
import ExportConfigLocal from '../../config/config.local';
import ExportConfigPre from '../../config/config.pre';
import ExportConfigProd from '../../config/config.prod';
type ConfigDefault = ReturnType<typeof ExportConfigDefault>;
type ConfigDev = ReturnType<typeof ExportConfigDev>;
type ConfigLocal = ReturnType<typeof ExportConfigLocal>;
type ConfigPre = ReturnType<typeof ExportConfigPre>;
type ConfigProd = ReturnType<typeof ExportConfigProd>;
type NewEggAppConfig = EggAppConfig & ConfigDefault & ConfigDev & ConfigLocal & ConfigPre & ConfigProd;

declare module 'egg' {
  interface Application {
    config: NewEggAppConfig;
  }

  interface Controller {
    config: NewEggAppConfig;
  }

  interface Service {
    config: NewEggAppConfig;
  }
}