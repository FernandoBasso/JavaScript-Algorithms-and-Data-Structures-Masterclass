/**
 * Checks whether `val` is a number.
 *
 * @remarks
 * This is a tentative implementation. There may be false positives I
 * have not come accross yet.
 *
 * `Number(undefined)` yields `NaN` but`Number(null)` yields 0.
 *
 * @param val - The value to check.
 * @returns A boolean indicating if `val` is a number
 */
function isNumber(val: unknown): boolean {
  if (val === null) return false;
  return !Number.isNaN(Number(val));
}

export { isNumber };
