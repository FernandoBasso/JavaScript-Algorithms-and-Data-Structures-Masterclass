import { sumZero } from "./sum-zero";

describe("sumZero()", () => {
  it("should return undefined for empty array or invalid input", () => {
    expect(sumZero([])).toBe(undefined);
    expect(sumZero(null)).toBe(undefined);
  });

  it("should return undefined when no pair sum to zero", () => {
    expect(sumZero([0])).toBe(undefined);
    expect(sumZero([-1, 2])).toBe(undefined);
    expect(sumZero([-2, -1, -3])).toBe(undefined);
    expect(sumZero([1, 2, -3, 4])).toBe(undefined);
  });

  // See <1> in sum-zero.mjs.
  it("should return undefined for false positives", () => {
    expect(sumZero([-1, 0, 2])).toBe(undefined);
  });

  it("should return the pair a pair sums to zero", () => {
    expect(sumZero([0, 0])).toEqual([0, 0]);
    expect(sumZero([1, -1])).toEqual([1, -1]);
    expect(sumZero([1, 2, -3, 4])).toBe(undefined);
  });
});
