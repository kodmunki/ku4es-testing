import { performance } from 'perf_hooks';

export default (func, iterations = 10000) => {
  const p = performance;
  const start = p.now();
  while(iterations--) { func(); }
  const end = p.now();
  return end - start;
};
