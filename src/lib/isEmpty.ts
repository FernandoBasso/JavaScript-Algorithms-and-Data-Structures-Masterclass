import { isArray, isString } from "./index.ts";

/**
 * Checks whether `lst` is empty.
 *
 * @param lst - The value to check for emptyness.
 * @return A boolean indicating whether the value is empty or not.
 *
 * @throws TypeError if `lst` is not an array or string.
 */
function isEmpty<T>(lst: Array<T> | string) {
  if (!isArray(lst) && !isString(lst)) {
    throw new TypeError(
      "isEmpty(): parameter must be of type Array or String",
    );
  }

  return lst.length === 0;
}

export { isEmpty };
