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

/**
 * Checks if there are any duplicate values among the arguments.
 *
 * Solution using the “multiple pointers” pattern.
 *
 * @param {...(number|string|nul|undefined)}
 * @return {boolean}
 *
 * <1> Since the input is not sorted, I do not know how to use two
 * pointers and move them in such a way that less iterations are
 * required.
 *
 */
function areThereDups_v2(...args) {
  if (args.length === 0) return false;

  let l = 0, r = args.length - 1;

  while (l < r) // <1>
    if (args[l++] === args[r])
      return true;

  return false;
}

/**
 * The solution from the instructor. He first sorts the array in order
 * to make it possible to move both pointers. I did not sort the array
 * because that is a somewhat expensive operation nonetheless.
 *
 * This solution doesn't work well with Node because of some
 * Array.prototype.sort() change in V8:
 *
 * • https://github.com/nodejs/node/pull/22754
 *
 * Looks like if we change the `>` in the original sort function by the
 * instructor:
 *
 *   (a, b) => a > b
 *
 * to `-` it works in Node too:
 *
 *   (a, b) => a - b
 */
function areThereDups_v3(...args) {
  ////
  // ‘>’ doesn't work in V8 anymore for this sort thing.
  //
  // args.sort((a, b) => a > b);
  //
  args.sort((a, b) => a - b);

  let start = 0;
  let next = 1;

  while(next < args.length) {
    if (args[start] === args[next]) {
        return true;
    }

    start++;
    next++;
  }

  return false;
}

/**
 * Checks if there are any duplicate values among the arguments.
 *
 * Solution using the “multiple pointers” pattern.
 *
 * @param {...(number|string|nul|undefined)}
 * @return {boolean}
 *
 * This solution uses a Set. It simply creates a set from the arguments
 * passed, which automatically discards any duplicates. If the created
 * set has a different ‘size’ than the input args ‘length’, then it
 * must be the case that there were duplicate elements that were
 * discared, and we
 * know the input contains duplicate elements.
 *
 */
function areThereDups_v4(...args) {
  if (args.length === 0) return false;
  return new Set(args).size !== args.length;
}

export {
  areThereDups_v1,
  areThereDups_v2,
  areThereDups_v3,
  areThereDups_v4,
};

