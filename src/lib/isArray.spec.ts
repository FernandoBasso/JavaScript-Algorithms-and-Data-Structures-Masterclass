import { assertEquals } from "/deps.ts";

import { isArray } from "./isArray.ts";

Deno.test("should return false when param is not of type array", () => {
  [
    undefined,
    null,
    "some string",
    { id: 1 },
    /pattern/g,
  ].forEach((param) => {
    assertEquals(isArray(param), false);
  });
});

Deno.test("should return true when param is an array", () => {
  [
    [],
    ["x", "y", "z"],
    // deno-lint-ignore no-array-constructor
    new Array(-3, -2, -1, -0),
  ].forEach((param) => {
    assertEquals(isArray(param), true);
  });
});
