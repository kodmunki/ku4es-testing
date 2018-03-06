export default class Performance {

  /**
   * @constructor Performance
   * @param {Performance|DateConstructor} [nowable=DateConstructor] - Any object having method `now` that returns a time of type number.
   */
  constructor(nowable = Date) {
    this._nowable = nowable;
  }

  /**
   * @constructor Performance
   * @param {function} func - A function whose body defines the performance test case.
   * @param {number} [iterations=10000] - The number of times to run func.
   * @returns {number}
   */
  test(func, iterations = 10000) {
    const start = this._nowable.now();
    while(iterations--) { func(); }
    const end = this._nowable.now();
    return end - start;
  }

}
