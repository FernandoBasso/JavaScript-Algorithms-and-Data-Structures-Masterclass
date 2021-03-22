/**
 * Calculates ‘b’ raised to the exponent ‘e’.
 *
 * ASSUME: Exponent is a natural number.
 *
 * @param {number} b - The base number.
 * @param {number} e - The exponent.
 * @return {number}
 */
function power(b, e) {
  if (e === 0) return 1;
  return b * power(b, e - 1);
}

export { power };
