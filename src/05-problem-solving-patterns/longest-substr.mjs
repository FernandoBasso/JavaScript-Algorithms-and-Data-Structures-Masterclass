//
// Sliding Window - findLongestSubstr
//
// Write a function called findLongestSubstr, which accepts a string
// and returns the length of the longest substring with all distinct
// characters.
//
// findLongestSubstr('') // 0
// findLongestSubstr('rithmschool') // 7
// findLongestSubstr('thisisawesome') // 6
// findLongestSubstr('thecatinthehat') // 7
// findLongestSubstr('bbbbbb') // 1
// findLongestSubstr('longestsubstring') // 8
// findLongestSubstr('thisishowwedoit') // 6
//
// Time Complexity - O(n)
//

/**
 * Finds length of longest substring of distinct chars.
 *
 * ASSUME: The input is valid.
 *
 * @param {string} str
 * @return {number}
 */
function findLongestSubstr_v1(str) {
  let acc = {};
  let longestSoFar = 0;
  let tmpLongest = 0;
  let l = 0;
  let r = 0;

  while (l < str.length && r < str.length) {
    if (acc[str[r]]) {
      ++l;
      r = l + 1;
      acc = { [str[l]]: 1 };
      tmpLongest = 1;
      continue;
    }

    acc[str[r]] = 1;

    ++tmpLongest;
    ++r;

    longestSoFar = Math.max(tmpLongest, longestSoFar);
  }

  return longestSoFar;
}

/**
 * Solution from the instructor.
 */
function findLongestSubstr_v2(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  debugger;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);

    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }

  return longest;
}
//
// Again, the solution from the instructor is more elegant and concise
// than mine 🥲.
////

export { findLongestSubstr_v1, findLongestSubstr_v2 };
