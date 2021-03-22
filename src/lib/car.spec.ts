import {
  assertThrows,
  assertEquals,
} from "/deps.ts";

import { car } from "./car.ts";

Deno.test("should throw ‘TypeError’ if not array or string", () => {
  assertThrows(
    () => car(null as unknown as Array<unknown>),
    TypeError,
    "car(): invalid parameter type",
  );

  assertThrows(
    () => car({} as unknown[]),
    TypeError,
    "car(): invalid parameter type",
  );
});

Deno.test("should throw a type error when empty", () => {
  assertThrows(
    () => car([]),
    TypeError,
    "car(): cannot get car/head of empty array or string",
  );

  assertThrows(
    () => car(""),
    TypeError,
    "car(): cannot get car/head of empty array or string",
  );
});

Deno.test("should return the first and single single element", () => {
  assertEquals(car([-13]), -13);
  assertEquals(car([["x", "y", "z"]]), ["x", "y", "z"]);
});

Deno.test("should return the first element", () => {
  assertEquals(car([4, -13, -9, 0, 7]), 4);
  assertEquals(
    car([["x", "y", "z"], ["a", "b"], ["j"]]),
    ["x", "y", "z"]);
});
