import { getIndexOf } from "./index-of";

describe("getIndexOf()", () => {
  it("should return NaN if input is invalid", () => {
    expect(getIndexOf(null, { id: 1 })).toEqual(NaN);
    expect(getIndexOf(null, undefined)).toEqual(NaN);
    expect(getIndexOf(null, null)).toEqual(NaN);
  });

  it("should return -1 with empty arrays", () => {
    expect(getIndexOf(9, [])).toEqual(-1);
    expect(getIndexOf(9, new Array(0))).toEqual(-1);
  });

  it("should return index 0 when element is at position 0", () => {
    expect(getIndexOf(-9, [-9, 9, 7])).toEqual(0);
  });

  it("should return last index when elem is at the last index", () => {
    const nums = [-9, 7, 9];
    expect(getIndexOf(9, nums)).toEqual(nums.length - 1);
  });

  it("should return the index of any other position of elem", () => {
    expect(getIndexOf(-7, [-9, -7, -1, 0, 3, 5])).toEqual(1);
  });
});
