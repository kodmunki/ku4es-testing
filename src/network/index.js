import moxios from 'moxios';

/**
 * Starts a mock server for Unit Tests that cover code sections
 * that include calls to a server. This must be called before
 * you can successfully use `sendResponse`.
 * @function startServer
 * @global
 */
export function startServer() {
  moxios.install();
}

/**
 * Stops a mock server started with `startServer`
 * @function stopServer
 * @global
 */
export function stopServer() {
  moxios.uninstall();
}

/**
 *
 * @param {Object} response - A response object
 * @param {number} response.status - An HTTP status code.
 * @param {Object} response.response - A mock response payload.
 * @param {number} [index=0] - The index of the response that you want to send.
 * This is useful for those instances where your codebase makes multiple service
 * calls and you need to send responses back to some or all of them.
 * @returns {*}
 */
export function sendResponse(response, index = 0) {
  return new Promise((resolve, reject) => {
    moxios.wait(() => {
      const tracker = moxios.requests;
      const request = tracker.at(index);
      tracker.__items.splice(index, 1);
      request.respondWith(response)
        .then(resolve)
        .catch(reject);
    });
  });
}
