import { isEmpty } from "../isEmpty";

describe("isEmpty()", () => {
  describe.only("when param is not of type Array or String", () => {
    it("should throw a TypeError", () => {
      [
        undefined,
        null,
        { foo: "bar" },
        /regex/g,
      ].forEach((param) => {
        expect(
          () => isEmpty(param),
        ).toThrow(TypeError);

        expect(
          () => isEmpty(param),
        ).toThrow(
          "isEmpty(): parameter must be of type Array or String",
        );
      });
    });

    describe("when the array is empty", () => {
      it("should return true", () => {
        [
          [],
          new Array(),
          "".split(""),
        ].forEach((param) => {
          expect(isEmpty(param)).toBe(true);
        });
      });
    });

    describe("when array contains 1 or more elements", () => {
      it("should return false", () => {
        [
          [{}],
          [{}, /re/g],
          ["x", "y"],
          new Array("Hello", "World!"),
          "hello world".split(" "),
        ].forEach((param) => {
          expect(isEmpty(param)).toBe(false);
        });
      });
    });
  });
});
