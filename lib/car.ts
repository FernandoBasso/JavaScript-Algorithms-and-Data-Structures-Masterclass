import {
  isArray,
  isEmpty,
} from "./index.ts";

/**
 * Returns the first element of an array.
 *
 * @param lst
 * @return {T}
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
  if (!isArray(lst))
    throw new TypeError('car(): parameter must be of type Array');

  if (isEmpty(lst))
    throw new TypeError(
      'car(): cannot get car/head of empty Array'
    );

  return lst[0];
}

export {
  car,
  car as head, // It is ‘head’ in Haskell.
};
