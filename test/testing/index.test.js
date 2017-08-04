import assert from 'assert';
import { describe, it } from 'mocha';
import { wait } from '../../src/testing';

describe('testing Test', () => {

  it('should wait to assert', (done) => {
    wait(100)
      .then(() => {
        assert.ok(true);
        done();
      });
  });

});
