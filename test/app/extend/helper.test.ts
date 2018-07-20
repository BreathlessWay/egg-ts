import * as assert from 'assert';
import { app, mock } from 'egg-mock/bootstrap';
import * as fs from 'fs';

describe('helper format time', () => {
  it('should get time before', () => {
    const ctx = app.mockContext();
    assert(ctx.helper.relativeTime(new Date()).includes('ago'));
  });

  it('should read app.test', () => {
    mock(fs, 'readFileSync', () => {
      return 'hello mock';
    });
    assert(fs.readFileSync('./app.test.ts').toString() === 'hello mock');
  });
});
