//
// Sliding Window - minSubArrayLen
// ===============================
//
// Write a function called minSubArrayLen which accepts two parameters -
// an array of positive integers and a positive integer.
//
// This function should return the minimal length of a contiguous
// subarray of which the sum is greater than or equal to the integer
// passed to the function. If there isn't one, return 0 instead.
//
// Examples:
// =========
//
// minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
// 2 because [4, 3] is the smallest subarray
//
// minSubArrayLen([2, 1, 6, 5, 4], 9);
// 2 because [5, 4] is the smallest subarray
//
// minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52);
// 1 because [62] is greater than 52
//
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39);
// 3
//
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55);
// 5
//
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11);
// 2
//
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95);
// 0
//
// • Time Complexity - O(n)
// • Space Complexity - O(1)
//

/**
 * Finds the minimum subarray length l such that when summed is >= n
 *
 * ASSUME: The input is valid.
 *
 * @param {Array<number>} nums
 * @param {number} n;
 * @return {number}
 */
function minSubArrayLen_v1(nums, n) {
  let l = 0;
  let r = 1;
  let subArrLen = 1;
  let sum = nums[0];

  while (l < nums.length) {
    if (sum >= n) return subArrLen;

    if (r === nums.length) {
      ++subArrLen;
      l = 0;
      r = subArrLen;

      sum = nums.slice(0, subArrLen).reduce((acc, x) => acc + x, 0);
      if (sum >= n) return subArrLen;

      if (subArrLen >= nums.length) return 0;

      continue;
    }

    l++;

    sum = sum - nums[l - 1] + nums[r];

    r++;
  }

  return 0;
}
//
// This solution uses the sliding window approach. We start with a
// window of length 1 (effectively checking a single element of the
// array at a time), then make the extent of the “window” cover two
// elements, then three, etc. The first time we find a sum of a subarray
// that is >= n, we return the length of the subarray.
//
// Ever ltime ‘r’ does reaches the end of the array, we start over from
// the beginning of the array, just that each time with a larger window.
////


export {
  minSubArrayLen_v1,
};

