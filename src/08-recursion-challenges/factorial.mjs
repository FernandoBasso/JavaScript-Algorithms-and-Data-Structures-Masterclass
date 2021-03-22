/**
 * Computes the factorial of x.
 *
 * NOTE: The factorial of 0 is 1.
 *
 * ASSUME: Input is >= 0.
 *
 * @param {number} x
 * @return {number}
 */
function fact(x) {
  if (x === 0 || x === 1) return 1;
  return x * fact(x - 1);
}

export { fact };
