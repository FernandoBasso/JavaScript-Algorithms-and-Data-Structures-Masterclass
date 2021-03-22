import { isArray, isEmpty, isString } from "/src/lib/index.ts";

/**
 * Returns the first element of `lst`.
 *
 * @param lst - The list from which to return the first element.
 * @returns The fist element of `lst`.
 * @throws TypeError car(): parameter must be of type Array
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
function car<T = unknown>(lst: Array<T> | string): T | string {
  if (!isArray(lst) && !isString(lst)) {
    throw new TypeError("car(): invalid parameter type");
  }

  if (isEmpty(lst)) {
    throw new TypeError(
      "car(): cannot get car/head of empty array or string",
    );
  }

  return lst[0];
}

export {
  car,
  car as head, // It is ‘head’ in Haskell.
};
