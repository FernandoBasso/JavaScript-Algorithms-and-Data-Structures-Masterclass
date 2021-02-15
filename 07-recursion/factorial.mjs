/**
 * Computes the factorial of x.
 *
 * ASSUME: Input is >n 1.
 *
 * @param {number} x
 * @return {number}
 */
function fact(x) {
  debugger;
  if (x === 1) return 1;
  return x * fact(x - 1);
}

export {
  fact,
};
