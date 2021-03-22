import {
  isArray,
  isString,
} from './';

/**
 * Checks whether `lst` array is empty.
 *
 * @param {Array<T>|string} lst
 * @return {boolean}
 * @throws {TypeError} isEmpty(): parameter must be of type Array
 */
function isEmpty(lst) {
  if (!isArray(lst) && !isString(lst))
    throw new TypeError(
      'isEmpty(): parameter must be of type Array or String'
    );

  return lst.length === 0;
}

export {
  isEmpty,
}
