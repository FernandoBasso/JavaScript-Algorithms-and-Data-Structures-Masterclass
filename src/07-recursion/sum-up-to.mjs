/**
 * Sum natural numbers from 1 to x.
 *
 * ASSUME: Input is valid, x >= 1.
 *
 * @param {number} x
 * @return {number}
 */
function sumFrom1To(x) {
  if (x === 1) return 1;
  return x + sumFrom1To(x - 1);
}

export { sumFrom1To };
