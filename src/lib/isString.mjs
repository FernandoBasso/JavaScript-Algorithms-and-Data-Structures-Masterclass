/**
 * Checks whether the input is a string.
 *
 * @param {any} val
 * @return {boolean}
 */
export function isString(val) {
  return !!(typeof val === "string" || val instanceof String);
}
