import assert from 'assert';
import { describe, it } from 'mocha';
import Performance from '../src/performance';

describe('performance Tests with implicit Date', () => {

  const performance = new Performance();

  it('should pass with Date', () => {
    const sum = () => 1 + 1;
    assert.ok(performance.test(sum) < 10);
  });

  it('should fail with Date', () => {
    const loop = () => { for(let i = 0; i < 100000; i++) { Math.pow(i, i); } };
    assert.ok(!performance.test(loop) < 400);
  });

});

describe('performance Tests with explicit Date', () => {

  const performance = new Performance(Date);

  it('should pass with Date', () => {
    const sum = () => 1 + 1;
    assert.ok(performance.test(sum) < 10);
  });

  it('should fail with Date', () => {
    const loop = () => { for(let i = 0; i < 100000; i++) { Math.pow(i, i); } };
    assert.ok(!performance.test(loop) < 400);
  });

});

describe('performance Tests with perf_hooks', () => {

  try {

    const {performance: nowable} = require('perf_hooks');
    const performance = new Performance(nowable);

    it('should pass with Date', () => {
      const sum = () => 1 + 1;
      assert.ok(performance.test(sum) < 10);
    });

    it('should fail with Date', () => {
      const loop = () => {
        for (let i = 0; i < 100000; i++) {
          Math.pow(i, i);
        }
      };
      assert.ok(!performance.test(loop) < 400);
    });

  }
  catch (e) {

    it('should notify no perf_hooks', () => {
      console.info('    Module perf_hooks are unavailable in this environment.'); // eslint-disable-line no-console
      assert.ok(true);
    });

  }

});
