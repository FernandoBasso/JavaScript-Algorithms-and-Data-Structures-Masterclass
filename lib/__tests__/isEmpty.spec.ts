import {
  assertEquals,
  assertThrows,
} from "../../deps.ts";

import { isEmpty } from "../isEmpty.ts";

Deno.test("should trow TypeError when param type is invalid", () => {
  [
    undefined,
    null,
    { foo: "bar" },
    /regex/g,
  ].forEach(param => {
    assertThrows(
      () => isEmpty(param as unknown as Array<unknown>),
      TypeError,
      "isEmpty(): parameter must be of type Array or String"
    );
  });
});

Deno.test("should return true when the array is empty", () => {
  [
    [],
    // deno-lint-ignore no-array-constructor
    new Array(),
    "".split(""),
  ].forEach(param => {
    assertEquals(isEmpty(param), true);
  });
});

Deno.test("should return false when array is not empty", () => {
  [
    [{}],
    [{}, /re/g],
    ["x", "y"],
    // deno-lint-ignore no-array-constructor
    new Array("Hello", "World!"),
    "hello world".split(" "),
  ].forEach(param => {
    assertEquals(isEmpty(param), false);
  });
});
