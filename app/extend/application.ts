import { Application } from 'egg';

const BAR = Symbol('Application#bar');

export default {
  get bar (this: Application & { [ BAR ]: any }): any {
    if (!this[ BAR ]) {
      this[ BAR ] = 'bar';
    }
    return this[ BAR ];
  }
};
