//
// Write a function called same, which accepts two arrays. It should
// return true if every value in the array has it's corresponding value
// squared in the second array. The frequency of values must be the
// same. The order doesn't matter.
//

/**
 * Returns true if each element in `xs` has a matching squared element in
 * `ys`. Order doesn't matter. Frequency matters.
 *
 * TIME COMPLEXITY: O(n ^ 2).
 *
 * This solution involves looping while we have matching elements in
 * `xs`. If we reach the end of the loop without getting and `indexOf`
 * of -1 it means every element in `xs` has a matching squared element
 * in `ys`.
 *
 * @param {number[]} xs
 * @param {number[]} ys
 * @return {boolean}
 */
function same1(xs, ys) {
  if (xs.length !== ys.length) return false;

  for (let i = 0; i < xs.length; ++i) {
    let foundIndex = ys.indexOf(xs[i] ** 2);
    if (foundIndex === -1) return false;
    ys.splice(foundIndex, 1);
  }

  return true;
}//
// Why is it O(n ^ 2) if we have only one loop?
// Because ‘indexOf’ itself “loops”. We actually have to looping
// constructs being executed.
//

/**
 * TIME COMPLEXITY: O(n)
 */

function same2(xs, ys) {
  if (xs.length !== ys.length) return false;

  const freqXs = {};
  const freqYs = {};

  for (let x of xs) {
    freqXs[x] = (freqXs[x] || 0) + 1;
  }

  for (let y of ys) {
    freqYs[y] = (freqYs[y] || 0) + 1;
  }

  for (let k in freqXs) {
    if (!(k ** 2 in freqYs)) return false;
    if (freqYs[k ** 2] !== freqXs[k]) return false;
  }

  return true;
}//
// Three loops is much better than a loop inside a loop.
// • Two nested loops: O(n ^ 2) -- quadratic.
// • Three loops one after the other: O(n).
//
// Three loops is O(3n) but is simplified by O(n). It is still linear
// time.
//

export { same2 as same };
