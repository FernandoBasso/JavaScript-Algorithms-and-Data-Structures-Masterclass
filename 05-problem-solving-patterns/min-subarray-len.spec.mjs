import {
  minSubArrayLen_v1 as minSubArrayLen,
} from './min-subarray-len';

describe('minSubArrayLen()', () => {
  describe('when the input array is empty', () => {
    it('should return 0', () => {
      expect(minSubArrayLen([], 1)).toEqual(0);
      expect(minSubArrayLen(new Array(), 1)).toEqual(0);
      //
      // An empty array can't possibly sum to 1.
      //
    });
  });

  describe('when the entire array summed is not >= n', () => {
    it('should return 0', () => {
      expect(
        minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)
      ).toEqual(0);
      //
      // Even adding all the elements doesn't amount to 95.
      //
    });
  });

  describe('when a single element >= n', () => {
    it('should return 1', () => {
      expect(minSubArrayLen([1, 13, 7], 13)).toEqual(1);
      //
      // 1 Because 13 >= 13.
      //

      expect(
        minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)
      ).toEqual(1);
      //
      // 1 because 62 >= 52.
      //
    });
  });

  describe('when 2 elements summed >= n', () => {
    it('should return 2', () => {;
      expect(
        minSubArrayLen([2, 3, 1, 2, 4, 3], 7),
      ).toEqual(2);
      // 2 because [4, 3] is the smallest subarray that produces 7
      // when summed.

      expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toEqual(2);
      // 2 because [5, 4] is the smallest subarray.

      minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11);
      // 2 because 3 + 8 is 11.
    });
  });

  describe('when all the elements are required', () => {
    it('should return the length of the input array', () => {
      const nums3 = [1, 2, 3];
      expect(minSubArrayLen(nums3, 6)).toEqual(nums3.length);

      const nums9 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
      expect(minSubArrayLen(nums9, 450)).toEqual(nums9.length);
    });
  });

  it('should handle random subarray lengths required', () => {
    minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39);
    // 3

    minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55);
    // 5
  });
});
