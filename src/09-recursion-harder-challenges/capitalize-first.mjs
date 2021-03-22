/**
 * https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425994
 *
 * Write a recursive function called capitalizeFirst. Given an array of
 * strings, capitalize the first letter of each string in the array.
 */

import { car, cdr, isEmpty, upcaseFirst } from "../lib";

/**
 * Capitalize first char of each string in `strs`.
 *
 * ASSUME: `strs` is an array of strings.
 *
 * @param {Array<string>} strs
 * @param {Array<string>} [acc = []]
 * @return {Array<string>
 */
function capitalizeFirst_v1(strs, acc = []) {
  if (isEmpty(strs)) return [];
  return [
    ...acc,
    upcaseFirst(car(strs)),
    ...capitalizeFirst_v1(cdr(strs)),
  ];
}

/**
 * Capitalize first char of each string in `strs`.
 *
 * ASSUME: `strs` is an array of strings.
 *
 * @param {Array<string>} strs
 * @return {Array<string>
 */
function capitalizeFirst_v2(strs) {
  return (function loop(los, acc) {
    if (isEmpty(los)) return acc;
    return [...acc, upcaseFirst(car(los)), ...loop(cdr(los), acc)];
  })(strs, []);
}

export { capitalizeFirst_v1, capitalizeFirst_v2 };
