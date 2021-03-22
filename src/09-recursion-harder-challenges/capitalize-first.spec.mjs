import {
  // capitalizeFirst_v1 as capitalizeFirst,
  capitalizeFirst_v2 as capitalizeFirst,
} from "./capitalize-first";

describe("capitalizeFirst()", () => {
  describe("when input is an empty array", () => {
    it("should return an empty array", () => {
      expect(capitalizeFirst([])).toEqual([]);
    });
  });

  describe("when input contains one or more strings", () => {
    it("should capitalize the first char of each string", () => {
      expect(capitalizeFirst(["car"])).toEqual(["Car"]);

      expect(
        capitalizeFirst(["car", "banana"]),
      ).toEqual(["Car", "Banana"]);

      expect(
        capitalizeFirst(["car", "banana", "x", "linux"]),
      ).toEqual(["Car", "Banana", "X", "Linux"]);
    });
  });
});
