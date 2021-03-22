//
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425970
//
// Write a recursive function called capitalizeWords. Given an array of
// words, return a new array containing each word capitalized.
//

import {
  isEmpty,
} from "../lib/index.ts";

/**
 * Capitalize all characters of each word in `arr`.
 *
 * @param arr - The list of strings to capitalize.
 * @returns The capitalized list of strings.
 */
function capitalizeWords(arr: Array<string>): Array<string> {
  return (function run(
    lst: Array<string>,
    acc: Array<string>,
  ): Array<string> {
    if (isEmpty(lst)) return acc;
    return run(lst.slice(1), [...acc, lst[0].toUpperCase()]);
    })(arr, []);
}

export { capitalizeWords };
