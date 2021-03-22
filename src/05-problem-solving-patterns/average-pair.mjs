//
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410602
//
// Multiple Pointers - avgPair
//
// Write a function called avgPair.
// Given a sorted array of integers and a target average, determine if
// there is a pair of values in the array where the average of the pair
// equals the target average. There may be more than one pair that
// matches the average target.
//
// Bonus Constraints:
//
// • Time: O(N);
// • Space: O(1);
//
// Sample Input:
//
// avgPair([1,2,3],2.5); // true
// avgPair([1,3,3,5,6,7,10,12,19],8); // true
// avgPair([-1,0,3,4,5,6], 4.1) // false
// avgPair([],4); // false
//

/**
 * Checks if a pair of values in arr equals avg.
 *
 * ASSUME: The inputs are valid.
 *
 * TIME COMPLEXITY: O(n) — We iterate only once.
 *
 * SPACE COMPLEXITY: O(1) — We only use three variables created inside
 * the function (besides the two passed parameters) and do not end up
 * creating any other array or anything like that.
 *
 * @param {number} arr
 * @param {number} targetAvg
 * @return {boolean}
 *
 * This solution uses the “multiple pointers” approach. If the average
 * on the current iteration is less than the target average, we
 * increment the left pointer, otherwise, we decrement the right
 * pointer. This way, we can find out if there is a pair that matches
 * the target average with minimal iterations, many times not requiring
 * to iterate over the entire input array.
 */
function avgPair_v1(arr, targetAvg) {
  if (arr.length === 0) return false;

  let l = 0,
      r = arr.length - 1,
      avg;

  while (l < r) {
    avg = (arr[l] + arr[r]) / 2;

    if (avg === targetAvg) return true;

    if (avg < targetAvg) ++l;
    else --r;
  }

  return false;
}

export {
  avgPair_v1,
};
