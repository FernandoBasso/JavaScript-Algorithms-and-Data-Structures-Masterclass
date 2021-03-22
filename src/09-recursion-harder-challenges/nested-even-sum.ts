//
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425996
//
// Write a recursive function called nestedEvenSum. Return the sum of
// all even numbers in an object which may contain nested objects.
//

import {
  isNumber,
  isObject,
} from "../lib/index.ts";

const isEven = (n: number) => n % 2 === 0;

type UnkRec = Record<string, unknown>;

function tgIsNum(v: unknown): v is number {
  return isNumber(v);
}

/**
 * Sums object leaves that are even numbers.
 *
 * @remarks
 * An empty object produces a sum of 0 (zero).
 *
 * Our input object contains either “leaves” that are numbers or leaves
 * that are of other types and sub-objects (see the test cases).
 * Therefore, we need to check each node to see if it is a sub-object,
 * or an even number that can be added to the accumulator. When we see
 * the node is an object, it is of the structure
 *
 *   { [key: string]: unknown }
 *
 * That is, we know it has a key, but we do not know what its value and
 * value type is and that is  why we have a few type tests in the
 * algorithm.
 *
 * @param obj - The object to recursively sum numbers from.
 * @returns The sum of the numeric leaves.
 */
function nestedEvenSum(obj: UnkRec): number {
  return (function go(o: UnkRec, acc: number): number {
    Object.keys(o).forEach(k => {
      const v = o[k];
      if (isObject(v))
        acc = go(v as UnkRec, acc);
      else if (tgIsNum(v) && isEven(v))
        acc += v;
    });

    return acc;
  })(obj, 0);
}

export {
  nestedEvenSum,
};
