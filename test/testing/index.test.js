import assert from 'assert';
import { describe, it } from 'mocha';
import { waitToAssert } from '../../src/testing';

describe('testing Test', () => {

  it('should wait to assert', (done) => {
    waitToAssert(100, () => {
      assert.ok(true);
      done();
    })
  });

});
