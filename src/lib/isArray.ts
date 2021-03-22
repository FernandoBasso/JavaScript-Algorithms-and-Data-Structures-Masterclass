
/**
 * Checks whether `val` is of type Array.
 *
 * @param val - The value to check.
 * @return A boolean indicating whether `val` is an array or not.
 */
function isArray(val: unknown): boolean {
  return Array.isArray(val);
}

export { isArray };
