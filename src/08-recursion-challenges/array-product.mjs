/**
 * Computes the product of the elements of `nums`.
 *
 * @param {Array<number>} nums
 * @return {number}
 */
function arrayProduct(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * arrayProduct(nums.slice(1));
}

export { arrayProduct };
