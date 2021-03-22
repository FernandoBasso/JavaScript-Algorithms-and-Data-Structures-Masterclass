import { isEmpty } from "../lib";

/**
 * Capitalize the first char of `s`.
 *
 * ASSUME: `s` is a string.
 *
 * @param {string} s
 * @return {string}
 */
function upcaseFirst(s) {
  if (isEmpty(s)) return "";
  return s[0].toUpperCase() + s.slice(1);
}

export { upcaseFirst };
