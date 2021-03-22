import { cdr } from "../cdr";

describe("cdr()", () => {
  describe("when not an array", () => {
    it("should trow a ‘TypeError’", () => {
      expect(() => cdr(null)).toThrow(TypeError);
      expect(
        () => cdr({}),
      ).toThrow("cdr(): parameter must be of type Array");
    });
  });

  describe("when the array is empty", () => {
    it("shoult throw a type error", () => {
      expect(
        () => cdr([]),
      ).toThrow("cdr(): cannot get cdr/tail of empty Array");
    });
  });

  describe("when array contains one element", () => {
    it("should return an empty array", () => {
      expect(cdr([-13])).toEqual([]);
      expect(cdr([["x", "y", "z"]])).toEqual([]);
    });
  });

  describe("when array contains two or more elements", () => {
    it("shouldl return the list without the first element", () => {
      expect(cdr([4, -13, -9, 0, 7])).toEqual([-13, -9, 0, 7]);
      expect(
        cdr([["x", "y", "z"], ["a", "b"], ["j"]]),
      ).toEqual([["a", "b"], ["j"]]);
    });
  });
});
