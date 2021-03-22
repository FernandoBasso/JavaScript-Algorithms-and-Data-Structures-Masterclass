//
// Given a sorted array of integers, write a function called search,
// that accepts a value and returns the index where the value passed to
// the function is located. If the value is not found, return -1
//

/**
 * Finds the index of elem in arr. Returns -1 if not found.
 *
 * TIME COMPLEXITY: O(n). We (potentially) iterate over every element
 * in the input array.
 *
 * @param {number} elem
 * @param {Array<number>} arr A sorted array of integers.
 */
function getIndexOf_v1(elem, arr) {
  if (!Array.isArray(arr)) return NaN;

  for (let idx = 0; idx < arr.length; ++idx) {
    if (elem === arr[idx]) return idx;
  }

  return -1;
}

/**
 * Finds the index of elem in arr. Returns -1 if not found.
 *
 * TIME COMPLEXITY: O(log(n)). Binary search using the “divide and
 * conquer” pattern.
 *
 * @param {number} val
 * @param {Array<number>} arr A sorted array of integers.
 */
function getIndexOf_v2(val, arr) {
  if (!Array.isArray(arr)) return NaN;
  if (arr.length === 0) return -1;

  let min = 0;
  let max = arr.length;
  let mid;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);

    if (arr[mid] < val) {
      min = mid + 1;
    } else if (arr[mid] > val) {
      max = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

export { getIndexOf_v2 as getIndexOf };
