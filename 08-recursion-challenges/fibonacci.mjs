//
// Write a recursive function called fib which accepts a number and
// returns the nth number in the Fibonacci sequence. Recall that the
// Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8,
// ... which starts with 1 and 1, and where every number thereafter is
// equal to the sum of the previous two numbers.
//

/**
 * Returns the nth number in the fibonacci sequence.
 *
 * **NOTE**: It produces the fibonacci sequence as it goes, computing
 * only until necessary to return the correct nth element.
 *
 * **NOTE**: The nth number counts from 1, not array, zero-indexed form.
 * That is, 4th means really the element at the third position of the
 * array of fibonacci numbers.
 *
 * This solution uses a helper function.
 *
 * @param {number} nth — The position of the number to be returned.
 * @return {number} — The nth number in the fibonacci sequence.
 */
function fib_v1(nth) {
  let nums = [1, 1];

  (function run(n) {
    let len = nums.length;
    if (nums.length >= n) return;
    nums.push(nums[len - 1] + nums[len - 2]);
    run(n);
  })(nth);

  return nums[nth - 1];
}

/** Returns the nth number in the fibonacci sequence.
 *
 * **NOTE**: It produces the fibonacci sequence as it goes, computing
 * only until necessary to return the correct nth element.
 *
 * **NOTE**: The nth number counts from 1, not array, zero-indexed form.
 * That is, 4th means really the element at the third position of the
 * array of fibonacci numbers.
 *
 * This solution uses an accumulator as the second parameter to the
 * function. On the first invocation, it defaults to `[1, 1]` because
 * that is the minimal, initial fibonacci sequence possible.
 *
 * @param {number} nth — The position of the number to be returned.
 * @param {Array<number>} [fibSeq = [1, 1]] This parameter is not
 * intended to be used by client code unless they want to provide an
 * already calculated fibonacci sequence.  @return {number} — The nth
 * number in the fibonacci sequence.
 */
function fib_v2(nth, fibSeq = [1, 1]) {
  const len = fibSeq.length;

  if (len >= nth) return fibSeq[nth - 1];

  return fib_v2(nth, [...fibSeq, fibSeq[len - 1] + fibSeq[len - 2]]);
}

export {
  fib_v1,
  fib_v2,
};
