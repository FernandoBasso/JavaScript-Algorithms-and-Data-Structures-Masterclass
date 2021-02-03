//
// Frequency Counter / Multiple Pointers - areThereDups
//
// Implement a function called areThereDups which accepts a variable
// number of arguments, and checks whether there are any duplicates
// among the arguments passed in. You can solve this using the frequency
// counter pattern OR the multiple pointers pattern.
//
// Examples:
// areThereDuplicates(1, 2, 3); // false
// areThereDuplicates(1, 2, 2); // true
// areThereDuplicates('a', 'b', 'c', 'a'); // true
//
// Restrictions:
// Time - O(n)
// Space - O(n)
//
// Bonus:
// Time - O(n log n)
// Space - O(1)
//

/**
 * Checks if there are any duplicate values among the arguments.
 *
 * Solution using the “frequency counter” pattern.
 *
 * TODO: Verify if this is correct.
 * - TIME COMPLEXITY: O(n)
 * - SPACE COMPLEXITY: O(n)
 *
 * @param {...(number|string|nul|undefined)}
 * @return {boolean}
 *
 * <1> As soon as we find an element which was already in
 * `freqs` we know it is a duplicate and can immediately return.
 *
 */
function areThereDups_v1(...args) {
  if (args.length === 0) return false;

  const freqs = {};

  for (let val of args) {
    if (freqs[val]) return true; // <1>
    freqs[val] = 1;
  }

  return false;
}

export {
  areThereDups_v1,
};

