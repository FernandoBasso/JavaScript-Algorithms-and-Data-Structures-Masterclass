import { assertEquals } from "/deps.ts";

import { upcaseFirst } from "./upcaseFirst.ts";

Deno.test("should return empty string", () => {
  assertEquals(upcaseFirst(""), "");
});

Deno.test("should return the single char uppercased", () => {
  assertEquals(upcaseFirst("x"), "X");
  assertEquals(upcaseFirst("p"), "P");
});

Deno.test("should return string with first char uppercased", () => {
  assertEquals(upcaseFirst("linux"), "Linux");
  assertEquals(upcaseFirst("lINUX"), "LINUX");
});

Deno.test("should not change first char if already uppercase", () => {
  assertEquals(upcaseFirst("Linux"), "Linux");
  assertEquals(upcaseFirst("Haskell"), "Haskell");
});
