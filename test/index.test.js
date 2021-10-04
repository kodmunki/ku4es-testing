import assert from 'assert';
import { describe, it } from 'mocha';
import * as index from '../src';

describe('index Test', () => {

  it('should expose', () => {
    assert.ok(index.startServer);
    assert.ok(index.stopServer);
    assert.ok(index.sendResponse);
    assert.ok(index.Performance);
    assert.ok(index.Response);
  });

});
