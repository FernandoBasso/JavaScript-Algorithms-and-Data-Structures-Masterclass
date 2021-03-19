import {
  assertEquals,
} from "../../deps.ts";

import { isObject } from "../isObject.ts";

Deno.test("should return false with non-object values", () => {
  assertEquals(isObject(undefined), false);
  assertEquals(isObject(null), false);
  assertEquals(isObject('foo'), false);
  assertEquals(isObject([]), false);
});

Deno.test("should return true with object values", () => {
  assertEquals(isObject({}), true);
  assertEquals(isObject(new Object()), true);
  assertEquals(isObject({ id: 1, name: 'Yoda' }), true);
});
