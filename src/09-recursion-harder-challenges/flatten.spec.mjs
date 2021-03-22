import {
  // flatten_v1 as flatten,
  // flatten_v2 as flatten,
  flatten_v3 as flatten,
} from "./flatten";

describe("flatten", () => {
  describe("when input array is empty", () => {
    it("should return an empty array", () => {
      expect(flatten([])).toEqual([]);
    });
  });

  describe("when the input array is already flat", () => {
    it("should return the unmodified array", () => {
      expect(flatten([1, 2, 5])).toEqual([1, 2, 5]);
    });
  });

  describe("when input is composed of one level of sub arrays", () => {
    it("should return all values in a single top-level array", () => {
      expect(flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
    });
  });

  describe("when input is compose of flat values and arrays", () => {
    it("should return all values in a single top-level array", () => {
      expect(flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("when input is composed of multi-level inner arrays", () => {
    it("should return all values in a single top-level array", () => {
      expect(flatten([1, [2, [3, 4], [[5]]]])).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
