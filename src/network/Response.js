export default class Response {

  /**
   * Success
   * @param {*} response
   * @returns {{response: *, status: number}}
   */
  static success(response) {
    return { status: 200, response };
  }

  /**
   * Unauthorized
   * @param {*} response
   * @returns {{response: *, status: number}}
   */
  static unauthorized(response) {
    return { status: 401, response };
  }

  /**
   * Forbidden
   * @param {*} response
   * @returns {{response: *, status: number}}
   */
  static forbidden(response) {
    return { status: 403, response };
  }

  /**
   * File not found
   * @param {*} response
   * @returns {{response: *, status: number}}
   */
  static fileNotFound(response) {
    return { status: 404, response };
  }

  /**
   * Internal server error
   * @param {*} response
   * @returns {{response: *, status: number}}
   */
  static internalServerError(response) {
    return { status: 500, response };
  }

  /**
   * Service unavialable
   * @param {*} response
   * @returns {{response: *, status: number}}
   */
  static serviceUnavailable(response) {
    return { status: 503, response };
  }

  /**
   * Gateway timeout
   * @param {*} response
   * @returns {{response: *, status: number}}
   */
  static gatewayTimeout(response) {
    return { status: 504, response };
  }

}
