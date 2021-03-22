import {
  assertThrows,
  assertEquals,
} from "../../deps.ts";

import { cdr } from "../cdr.ts";

Deno.test("should throw ‘TypeError’ when not an array", () => {
  assertThrows(
    () => cdr(null as unknown as Array<unknown>),
    TypeError,
    "cdr(): parameter must be of type Array"
  );

  assertThrows(
    () => cdr({} as unknown as Array<unknown>),
    TypeError,
    "cdr(): parameter must be of type Array"
  );
});

Deno.test("should throw ‘TypeError’ when array is empty", () => {
  assertThrows(
    () => cdr([]),
    TypeError,
    "cdr(): cannot get cdr/tail of empty Array",
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

