import {
  assertEquals,
} from "/deps.ts";

import { isString } from "./isString.ts";

Deno.test("should return false input is NOT of type string", () => {
  [
    undefined,
    null,
    ["str"],
    { title: "Tomb Raider 1996" },
    -1,
  ].forEach(param => {
    assertEquals(isString(param), false);
  });
});

Deno.test("should return true when inpt IS of type string", () => {
  [
    "",
    new String(""),
    "1",
    new String("1"),
    "may the force be with you",
  ].forEach(param => {
    assertEquals(isString(param), true);
  });
});

