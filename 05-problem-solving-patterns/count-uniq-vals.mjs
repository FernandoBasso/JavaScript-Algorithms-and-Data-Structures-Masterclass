//
// Implement a function called countUniqVals, which accepts a sorted
// array, and counts the unique values in the array. There can be
// negative numbers in the array, but it will always be sorted.
//

/**
 * Count unique values in the input array of numbers.
 *
 * ASSUME: The input is sorted and does not contain empty slots.
 *
 * @param {Array<number>} nums
 * @return {NaN|number}
 */
function countUniqVals_v1(nums) {
  if (!Array.isArray(nums)) return NaN;
  if (nums.length === 0) return 0;

  // <1>
  let i = 0, count = 1;

  for (; i < nums.length - 1; ++i)
    if (nums[i] !== nums[i + 1]) ++count; // <2>

  return count;
}

//
// === <1> ===
// ===========
// This solutions uses only one “pointer” i. The other pointer is
// computed from the pointer i. Since the array of number is sorted, we
// know fore sure that if [i] !== [i + 1] then we have a new different
// value, and that equal values are always siblings (given the fact that
// the input is sorted).
//
// === <2> ===
// ===========
// Also, this solution compares [i] with undefined if the input contains
// only a single number because then [i + 1] will be undefined.
//
// We could return 1 if nums.length is 1, so we know we only enter the
// loop in case we are sure to have at least two values in the array and
// that comparison with undefined would not happen.
//


/**
 * Count unique values in the input array of numbers.
 *
 * ASSUME: The input is sorted and does not contain empty slots.
 *
 * @param {Array<number>} nums
 * @return {NaN|number}
 */
function countUniqVals_v2(nums) {
  if (!Array.isArray(nums)) return NaN;
  if (nums.length === 0) return 0;

  let i = 0, j = 1;

  while (j < nums.length) {
    if (nums[i] !== nums[j]) { // <1>
      ++i;
      nums[i] = nums[j]; // <2>
    }
    j++;
  }

  // <3>
  return i + 1;
}

//
// This solution is based on the tips before Colt actually shows any
// code. It involves changing the array and moving all the different
// unique values one after the other to the beginning (left side) of the
// array. When the loop stops, i is at the position of the largest value
// found.
//
// === <1> ===
// ===========
// This solution doesn't attempt to compare with undefined because we
// are looping and checking j, which already starts at 1. If the input
// has  length 1, then j (which starts at 1) is not less that
// nums.length and we don't compare numbers against undefined.
//
// === <2> ===
// ===========
// We do not need to swap the elements. In this case, we don't care
// about the state of the array after the computation is performed. We
// just want the number of unique values. It is enough to move [j] to
// the place of updated [i].
//
// === <3> ===
// ===========
// Because arrays start at index 0, and i stops at the last element that
// was different, we have to add 1 to it to return the correct result.
//
// Basically what we return is the length of the portion that we moved
// to the beginning of the array.
//
// In short, this solution involves turning something like this:
//
//   [1, 1, 2, 3, 3, 3, 4, 4, 5, 5, 5]
//
// into:
//
//   [1, 2, 3, 4, 5, n, n, n, n, n, n]
//                ↑
//               /
//              /
// The index of the last unique element after the rearranging. We return
// that index (the index 4, not the value at that index) plus 1.
//

export { countUniqVals_v2 as countUniqVals };

