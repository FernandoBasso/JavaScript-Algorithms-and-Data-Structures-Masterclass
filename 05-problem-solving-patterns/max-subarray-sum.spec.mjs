import { maxSubarraySum } from './max-subarray-sum';

describe('maxSubarraySum()', () => {
  it('should return NaN if input is invalid', () => {
    expect(maxSubarraySum(null)).toEqual(NaN);
    expect(maxSubarraySum(undefined)).toEqual(NaN);
    expect(maxSubarraySum({ id: 1 })).toEqual(NaN);
    expect(maxSubarraySum('hello')).toEqual(NaN);
  });

  it('should return null if input array is empty', () => {
    expect(maxSubarraySum([])).toEqual(null);
    expect(maxSubarraySum(new Array(0))).toEqual(null);
  });

  it('should return the correct sum with valid input arrays', () => {
    expect(maxSubarraySum([0], 1)).toEqual(0);
    expect(maxSubarraySum([1, 2, 4, 2, 3], 2)).toEqual(4 + 2);

    expect(maxSubarraySum([1, 2, 3, -4, 7], 2)).toEqual(2 + 3);

    expect(
      maxSubarraySum([4, 2, 1, 6, 2], 4)
    ).toEqual(4 + 2 + 1 + 6); // 13

    expect(
      maxSubarraySum([-2, -4, -1, 0, 0], 3)
    ).toEqual(-1 + 0 + 0); // -1

    expect(
      maxSubarraySum([-2, -1, -1, -1, -2, -2, -2, -5], 3)
    ).toEqual(-1 + -1 + -1);
  });
});

