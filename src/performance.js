export default class Performance {

  /**
   * @constructor Performance
   * @param {Performance|DateConstructor} [nowable=DateConstructor] - Any object with method `now` returning a time of type number.
   */
  constructor(nowable = Date) {
    this._nowable = nowable;
  }

  /**
   * @constructor Performance
   * @param func
   * @param iterations
   * @returns {number}
   */
  test(func, iterations = 10000) {
    const start = this._nowable.now();
    while(iterations--) { func(); }
    const end = this._nowable.now();
    return end - start;
  }

}
