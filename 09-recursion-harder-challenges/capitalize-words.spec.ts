import {
  assertEquals,
} from "../deps.ts";

import { capitalizeWords } from "./capitalize-words.ts";

Deno.test("should return empty array when input is empty array", () => {
  assertEquals(capitalizeWords([]), []);
});

Deno.test("should not mess with already capitalized strings", () => {
  assertEquals(capitalizeWords(["HELLO", "WORLD"]), ["HELLO", "WORLD"]);
});

Deno.test("should capitalize each string in input array", () => {
  assertEquals(capitalizeWords(["i"]), ["I"]);
  assertEquals(
    capitalizeWords(["i", "am", "practicing", "recursion"]),
    ["I", "AM", "PRACTICING", "RECURSION"]
  );
});

