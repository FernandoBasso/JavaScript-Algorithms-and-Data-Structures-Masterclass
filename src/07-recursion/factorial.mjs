/**
 * Computes the factorial of x.
 *
 * ASSUME: Input is >= 1.
 *
 * @param {number} x
 * @return {number}
 */
function fact(x) {
  if (x === 0 || x === 1) return 1;
  return x * fact(x - 1);
}

export {
  fact,
};
