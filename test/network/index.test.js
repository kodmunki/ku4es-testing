import assert from 'assert';
import axios from 'axios';
import { startServer, stopServer, sendResponse } from '../../src/network';

it('should send response', (done) => {

  startServer();

  axios.get('test.domain.com', { actual: 'data' })
    .then((response) => {
      assert.equal(response.status, 200);
      assert.deepEqual(response.data, { test: 'data' });
    });

  sendResponse({ status: 200, response: { test: 'data' } })
    .tap(response => assert.deepEqual(response.data, { test: 'data' }))
    .then(stopServer)
    .then(done);

});

it('should send multiple responses', (done) => {

  startServer();

  axios.get('test1.domain.com', { actual: 'call1' })
    .then((response) => {
      assert.equal(response.status, 200);
      assert.deepEqual(response.data, { test: 'call1' });
    });

  axios.get('test2.domain.com', { actual: 'call2' })
    .then((response) => {
      assert.equal(response.status, 200);
      assert.deepEqual(response.data, { test: 'call2' });
      stopServer();
      done();
    });

  sendResponse({ status: 200, response: { test: 'call1' } });
  sendResponse({ status: 200, response: { test: 'call2' } });

});
