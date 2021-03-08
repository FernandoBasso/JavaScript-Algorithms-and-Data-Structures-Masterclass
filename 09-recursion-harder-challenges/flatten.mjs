//
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425972
//
// Write a recursive function called flatten which accepts an array of
// arrays and returns a new array with all values flattened.
//

const car = l => l[0];
const cdr = l => l.slice(1);
const isArray = o => Array.isArray(o);
const isEmpty = l => l.length === 0;

/**
 * Flattens the input `arr`.
 *
 * ASSUME: input is an array.
 *
 * This solution walks the array like a tree.
 *
 * @param {Array<T>} arr
 * @return {Array<T>
 */
function flatten_v1(arr, acc = []) {
  if (isEmpty(arr)) return acc;

  if (isArray(arr)) {
    return flatten_v1(car(arr), flatten_v1(cdr(arr), acc));
  }

  return [arr, ...acc];
}

/**
 * Flattens the input `arr`.
 *
 * NOTE: Walks the array like a tree.
 *
 * This solution walks the array like a tree.
 *
 * @param {Array<T>} arr
 * @return {Array<T>
 */
function flatten_v2(lst) {
  return (function go(arr, acc) {
    if (isEmpty(arr)) return acc;

    if (isArray(arr))
      return go(car(arr), go(cdr(arr), acc));

    return [arr, ...acc];
  })(lst, []);
}

export {
  flatten_v1,
  flatten_v2,
};
