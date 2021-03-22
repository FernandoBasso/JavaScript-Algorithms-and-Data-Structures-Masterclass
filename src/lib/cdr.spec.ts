import {
  assertThrows,
  assertEquals,
} from "/deps.ts";

import { cdr } from "./cdr.ts";

Deno.test("should throw ‘TypeError’ when not an array", () => {
  assertThrows(
    () => cdr(null as unknown as Array<unknown>),
    TypeError,
    "cdr(): invalid parameter type"
  );

  assertThrows(
    () => cdr({} as unknown as Array<unknown>),
    TypeError,
    "cdr(): invalid parameter type"
  );
});

Deno.test("should throw ‘TypeError’ when array is empty", () => {
  assertThrows(
    () => cdr([]),
    TypeError,
    "cdr(): cannot get cdr/tail of empty array or string",
  );

  assertThrows(
    () => cdr(""),
    TypeError,
    "cdr(): cannot get cdr/tail of empty array or string",
  );
});

Deno.test(
  "should return empty array when array contains one element",
  () => {
  assertEquals(cdr([-13]), []);
  assertEquals(cdr([["x", "y", "z"]]), []);
});

Deno.test("should return the list without the first element", () => {
  assertEquals(cdr([4, -13, -9, 0, 7]), [-13, -9, 0, 7]);
  assertEquals(
    cdr([["x", "y", "z"], ["a", "b"], ["j"]]),
    [["a", "b"], ["j"]],
  );
});

