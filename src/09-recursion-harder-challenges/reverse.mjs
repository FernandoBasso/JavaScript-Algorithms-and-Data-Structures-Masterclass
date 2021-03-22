//
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425976
//
// Write a recursive function called reverse which accepts a string and
// returns a new string in reverse.
//

/**
 * Reverses a reversed version of `s`.
 *
 * ASSUME: input is a valid string.
 *
 * This solution involves appending the last element of the string to
 * the accumulator array until there are not more chars in the input
 * string, which keeps shrinking until we reach the base case.
 *
 * @param {string} s
 * @return {string}
 */
function reverse_v1(s, acc = []) {
  const len = s.length;
  if (len === 0) return acc.join("");
  return reverse_v1(s.slice(0, len - 1), [...acc, s[len - 1]]);
}

/**
 * Reverses a reversed version of `s`.
 *
 * ASSUME: input is valid.
 *
 * This solution uses the internal accumulator trick. It keeps
 * recursively calling itself until the input string `s` is empty, in
 * which case we reach the base case.
 *
 * @param {string} s
 * @return string
 */
function reverse_v2(s) {
  let reversed = [];
  let len = s.length;

  if (len === 0) return [];

  reversed.push(s[len - 1]);

  reversed = reversed.concat(reverse_v2(s.slice(0, len - 1)));

  return reversed.join("");
}

/**
 * Solution from the instructor. I did a solution similar to this one in
 * Haskell once.
 */
function reverse_v3(s) {
  if (s.length <= 1) return s;
  return reverse_v3(s.slice(1)) + s[0];
}

export { reverse_v1, reverse_v2, reverse_v3 };
