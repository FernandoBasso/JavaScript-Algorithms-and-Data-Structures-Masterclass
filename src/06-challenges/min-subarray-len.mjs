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

const log = console.log.bind(console);

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
// Every time ‘r’ does reaches the end of the array, we start over from
// the beginning of the array, just that each time with a larger window.
////

/**
 * Solution from the instructor.
 */
function minSubArrayLen_v2(nums, n) {
  let sum = 0;
  let l = 0;
  let r = 0;
  let minLen = Infinity;

  while (l < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (sum < n && r < nums.length) {
      sum += nums[r];
      r++;
    } // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (sum >= n) {
      minLen = Math.min(minLen, r - l);
      sum -= nums[l];
      l++;
    } // current total less than required total but we reach the end,
    // need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
//
//
// Much cleaner and elegant than mine. It uses less confusing conditions
// and updates variables in less places.
//
// This solution sometimes cause ‘minLen’ to be incorrect until some
// future iteration “fixes” it to a correct value that will work out in
// the end. The same for ‘sum’, which sometimes gets back to less than
// the previous ‘n’ value. But it is brilliant that it simplifies logic,
// and in the end everything works out magnificently.
////

export { minSubArrayLen_v1, minSubArrayLen_v2 };
