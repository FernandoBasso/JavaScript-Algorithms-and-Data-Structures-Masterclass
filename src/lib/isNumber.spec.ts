import { assertEquals } from "/deps.ts";

import { isNumber } from "./isNumber.ts";

Deno.test("should return false for non-number values", () => {
  assertEquals(isNumber(undefined), false);
  assertEquals(isNumber(null), false);
  assertEquals(isNumber("5k"), false);
  assertEquals(isNumber(new Number("5k")), false);
});

Deno.test("should return true for numbers", () => {
  assertEquals(isNumber(1), true);
  assertEquals(isNumber(-1), true);
  assertEquals(isNumber(new Number(1)), true);
  assertEquals(isNumber(-1.9), true);
  assertEquals(isNumber(2e32), true);
  assertEquals(isNumber(2e-32), true);
});
