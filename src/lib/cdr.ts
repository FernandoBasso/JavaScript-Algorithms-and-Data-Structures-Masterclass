import { isArray, isEmpty, isString } from "./index.ts";

/**
 * Returns a copy of `lst` without the first element.
 *
 * @param {Array<T> | string} lst - The input array or string.
 * @return The input list without the first element.
 * @throws {TypeError} car(): parameter must be array or string
 *
 * @example
 * car([1, 2, 3]);
 * // → 1
 *
 * @example
 * car([[1, 2], [3, 4]]);
 * // → [1, 2]
 *
 * @example
 * car(null)
 * // → TypeError exception
 */
function cdr<T>(lst: Array<T> | string): Array<T> | string {
  if (!isArray(lst) && !isString(lst)) {
    throw new TypeError("cdr(): invalid parameter type");
  }

  if (isEmpty(lst)) {
    throw new TypeError(
      "cdr(): cannot get cdr/tail of empty array or string",
    );
  }

  return lst.slice(1);
}

export {
  cdr,
  cdr as tail, // It is ‘tail’ in Haskell.
};
