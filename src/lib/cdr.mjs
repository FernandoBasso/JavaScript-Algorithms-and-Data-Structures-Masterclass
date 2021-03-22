import { isArray, isEmpty } from "./";

/**
 * Returns the first element of an array.
 *
 * @param {Array<T>} lst
 * @return {T}
 * @throws {TypeError} car(): parameter must be of type Array
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
function cdr(lst) {
  if (!isArray(lst)) {
    throw new TypeError("cdr(): parameter must be of type Array");
  }

  if (isEmpty(lst)) {
    throw new TypeError(
      "cdr(): cannot get cdr/tail of empty Array",
    );
  }

  return lst.slice(1);
}

export { cdr };
