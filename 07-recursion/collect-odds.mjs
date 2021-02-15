const log = console.log.bind(console);

/**
 * Returns only the odd numbers from xs.
 *
 * ASSUME: The input is valid.
 *
 * Solution is not purely recursive. Uses a helper method.
 *
 * @param {Array<number>} xs
 * @return {Array<number>}
 */
function collectOdds_v1(xs) {
  const odds = [];

  (function go(nums) {
    if (nums.length === 0) return;
    if (nums[0] % 2 !== 0) {
      odds.push(nums[0]);
      go(nums.slice(1));
    }
  })(xs);

  return odds;
}

/**
 * Returns only the odd numbers from xs.
 *
 * ASSUME: The input is valid.
 *
 * This is my own solution, purely recursive using an accumulator.
 *
 * @param {Array<number>} xs
 * @return {Array<number>}
 */
function collectOdds_v2(xs, acc = []) {
  if (xs.length === 0) return acc;
  if (xs[0] % 2 !== 0) acc.push(xs[0]);
  return collectOdds_v2(xs.slice(1), acc);
}

/**
 * Returns only the odd numbers from xs.
 *
 * ASSUME: The input is valid.
 *
 * This solution is from the instructor. No helper function or
 * accumulator is needed.
 *
 * @param {Array<number>} xs
 * @return {Array<number>}
 */
function collectOdds_v3(xs) {
  let odds = [];

  if (xs.length === 0) return odds;

  if (xs[0] % 2 !== 0) odds.push(xs[0]);

  odds = odds.concat(collectOdds_v3(xs.slice(1)));

  return odds;
}
//
// This solution involves understanding how ‘Array.prototype.concat’
// works. See this Node v14 session:
//
//   > [1].concat([2], [3], [4], [5])
//   [ 1, 2, 3, 4, 5 ]
//
//   > [].concat([2], [3], [4], [5])
//   [ 2, 3, 4, 5 ]
//
//   > [1, 3, 5].concat([7], [9])
//   [ 1, 3, 5, 7, 9 ]
//
// Look at this:
//
//   > [1, 3].concat([], [5], [], [7])
//   [ 1, 3, 5, 7 ]
////


export {
  collectOdds_v1,
  collectOdds_v2,
  collectOdds_v3
};
