import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('get bar', () => {
  it('application bar should bar', () => {
    assert(app.bar === 'bar');
  });
});
