//
// Multiple Pointers - isSubSeq
//
// Write a function called isSubSeq which takes in two strings and
// checks whether the characters in the first string form a subsequence
// of the characters in the second string. In other words, the function
// should check whether the characters in the first string appear
// somewhere in the second string, without their order changing.
//
// Examples:
//
// isSubSeq('hello', 'hello world'); // true
// isSubSeq('sing', 'sting'); // true;
// isSubSeq('abc', 'abracadabra'); // true;
// isSubSeq('abc', 'acb'); // false (order matters)
//
// Your solution MUST have AT LEAST the following complexities:
// • Time Complexity: O(n + m)
// • Space Complexity: O(1)
//

/**
 * Checks whether `sub` is a subsequence of `str`.
 *
 * ASSUME: Input is valid and not empty.
 *
 * - TIME COMPLEXITY: O(n + m)
 * - SPACE COMPLEXITY: O(1)
 *
 * @param {string} sub - The subsequence to try to find in `str`.
 * @param {string} str - The string where the subsequence is to be
 *   searched in.
 * @param {boolean}
 */
function isSubSeq_v1(sub, str) {
  if (sub.length > str.length) return false;

  let l = 0, r = 0;

  while (l <= sub.length && r <= str.length) {
    if (l === sub.length) return true; // <1>

    if (sub[l] === str[r]) { // <2>
      ++l;
      ++r;
    } else { // <3>
      ++r;
    }
  }

  return false;
}

//
// <1> If we get to the end of `sub` it means we have successfully found
// a subsequence.
//
// <2> If we find a matching pair of characters, increment both
// “pointers” so we check the next pair of characters.
//
// <3> If a match is not found during this iteration, it means we have
// yet to find a char in `str` which matches the current char in `seq`.
// Therefore, we increment only `r` so we keep searching further ahead
// in `str`.
//
// TIME COMPLEXITY: O(n + m). We use a single while, but it updates `l`
// and `r` in a way that may cause one to stop and the other keep going,
// and vice versa.
//
// SPACE COMPLEXITY: O(1). We do not require making copies of the
// string, or arrays of matched values. Only two extra variables are
// used inside the function.
////////////////////////////////////////////////////////////////////////

/**
 * Checks whether `sub` is a subsequence of `str`.
 *
 * ASSUME: Input is valid and not empty.
 *
 * NOTE: This solution is the one from the instructor. I just renamed
 * some variables in a more meaningful, self-documenting way.
 *
 * - TIME COMPLEXITY: O(n + m)
 * - SPACE COMPLEXITY: O(1)
 *
 * @param {string} sub - The subsequence to try to find in `str`.
 * @param {string} str - The string where the subsequence is to be
 *   searched in.
 * @param {boolean}
 */
function isSubSeq_v2(sub, str) {
  if (sub.length > str.length) return false;

  let idxSub = 0;
  let idxStr = 0;

  while (idxStr < str.length) {
    if (sub[idxSub] === str[idxStr]) ++idxSub;
    if (idxSub === sub.length) return true;
    ++idxStr;
  }

  return false;
}
//
// This solution is more clever than my previous one because it
// increments the “pointers” at more specific locations, requiring less
// code (which is elegant) and also the checks are performed in a more
// natural order.
//
// For instance, my previous solution returns true as the first thing
// inside the loop and then increments stuff. This solution is more
// natural — it first checks, increments `idxSub` and then checks if we
// got the end of `sub`. Also, it does not need an `else` clause.
//
// Very well designed solution indeed!
////////////////////////////////////////////////////////////////////////

export { isSubSeq_v1, isSubSeq_v2 };
