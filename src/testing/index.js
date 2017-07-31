function waitToAssert(timeout, assertions) {
  setTimeout(assertions, timeout);
}

export {
  waitToAssert
}
