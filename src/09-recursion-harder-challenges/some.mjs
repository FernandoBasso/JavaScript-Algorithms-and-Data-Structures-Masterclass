//
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425980
//
// Write a recursive function called some which accepts an array and a
// callback. The function returns true if a single value in the array
// returns true when passed to the callback. Otherwise it returns false.
//
// The instructions are better worded like “...returns true if _at
// least_ one value in the array returns true when passed to the
// callback.” That is, not when _just a single one_, but _at least one_.
// That is what ‘some’ does in many languages or libraries.
//

/**
 * Callback predicate.
 *
 * @callback callbackPredicate
 * @param {any} param
 * @return {boolean}
 */

/**
 * Checks whether at least one element in arr satisfies the predicate.
 *
 * REMEMBER: predicate functions assert that something is true or false,
 * and therefore must return truthy or falsy values.
 *
 * @param {Array<any>} arr — a predicate function
 * @param {callbackPredicate} fn — the callback predicate
 * @return {boolean}
 */
function some_v1(arr, fn) {
  if (arr.length === 0) return false;

  if (fn(arr[0])) return true;

  return some_v1(arr.slice(1), fn);
}

export {
  some_v1,
};
