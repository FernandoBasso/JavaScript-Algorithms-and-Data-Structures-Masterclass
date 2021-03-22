/**
 * Checks whether `val` is a string.
 *
 * @param val - The value to check if it is a string.
 * @return A boolean indicating whether `val` is a string or not.
 */
export function isString(val: unknown): boolean {
  return !!(typeof val === 'string' || val instanceof String);
}
