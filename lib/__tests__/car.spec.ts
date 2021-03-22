import {
  assertThrows,
  assertEquals,
} from "../../deps.ts";

import { car } from "../car.ts";

Deno.test("should throw a ‘TypeError’ when not an array", () => {
  assertThrows(
    () => car(null as unknown as Array<unknown>),
    TypeError,
    "car(): parameter must be of type Array",
  );

  assertThrows(
    () => car({} as unknown[]),
    TypeError,
    "car(): parameter must be of type Array",
  );
});

Deno.test("should throw a type error when the array is empty", () => {
  assertThrows(
    () => car([]),
    TypeError,
    "car(): cannot get car/head of empty Array",
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
