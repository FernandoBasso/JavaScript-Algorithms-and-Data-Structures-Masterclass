import { assertEquals } from "/deps.ts";

import {
  nestedEvenSum,
} from "/src/09-recursion-harder-challenges/nested-even-sum.ts";

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

Deno.test("should return 0 with empty object", () => {
  assertEquals(nestedEvenSum({}), 0);
});

Deno.test("should sum all number leaves", () => {
  const o1 = {
    id: 1,
    sub1: {
      id: 2,
      catId: 3,
    },
  };
  const o2 = {
    id: 1,
    sub1: {
      id: 2,
      catId: 3,
      sub2: {
        foo: 4,
        bar: 5,
        sub3: 6,
      },
    },
  };

  assertEquals(nestedEvenSum(o1), 2);
  assertEquals(nestedEvenSum(o2), 2 + 4 + 6);
});

Deno.test("should sum the three random object leaves", () => {
  assertEquals(nestedEvenSum(obj1), 6);
  assertEquals(nestedEvenSum(obj2), 10);
});
