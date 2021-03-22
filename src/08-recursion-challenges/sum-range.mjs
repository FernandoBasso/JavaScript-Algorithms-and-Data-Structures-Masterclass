/**
 * Sums all numbers from 1 to n.
 *
 * ASSUME: `n >= 0`.
 *
 * This solution uses an accumulator parameter to store the value
 * computed and in each invocation.
 *
 * @param {number} n The end point of the range, inclusive.
 * @param {number} [acc = 0] The value to be used as an accumulator.
 *  Users should not directly use this variable, if they choose to do
 *  so, it must be passed 0. Client code can pass a value other than
 *  zero if they need to add a sum from 0 to n to an already existing
 *  value.
 * @return {number}
 */
function sumRange_v1(n, acc = 0) {
  if (n === 0) return acc;
  return n + sumRange_v1(n - 1, acc);
}

/**
 * Sums all numbers from 1 to n.
 *
 * ASSUME: `n >= 0`.
 *
 * This solution neither uses an accumulator parameter, nor does it use
 * a helper function. It uses a local variable to each function, but a
 * somewhat clever logic makes it return the final value correctly.
 *
 * @param {number} n The end point of the range, inclusive.
 * @return {number}
 */
function sumRange_v2(n) {
  let total = 0;

  if (n === 0) return total;

  if (n > 0) total += n;

  total += sumRange_v2(n - 1);

  return total;
}

/**
 * Sums all numbers from 1 to n.
 *
 * ASSUME: `n >= 0`.
 *
 * This solution uses a helper function to recursively compute the sum
 * of the range of values.
 *
 * @param {number} n
 * @return {number}
 */
function sumRange_v3(n) {
  let total = 0;

  (function run(x) {
    if (x === 0) return total;
    total += x;
    run(x - 1);
  })(n);

  return total;
}

/**
 * Sums all numbers from 1 to n.
 *
 * ASSUME: `n >= 0`.
 *
 * Solution from the instructor.
 *
 * @param {number} n
 * @return {number}
 */
function sumRange_v4(n) {
  if (n === 0) return 0;
  return n + sumRange_v4(n - 1);
}


export {
  sumRange_v1,
  sumRange_v2,
  sumRange_v3,
  sumRange_v4,
};
