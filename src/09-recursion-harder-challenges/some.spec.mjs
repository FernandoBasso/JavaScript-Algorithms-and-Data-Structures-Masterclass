import {
  some_v1 as some,
} from './some';

/**
 * A No Operation function. It does nothing.
 *
 * @return {null}
 */
const noop = () => null;

/**
 * Returns the argument passed.
 *
 * @param {any} arg
 * @return {any}
 */
const id = arg => arg;

/**
 * Checks whether `n` is odd.
 *
 * @param {number} n
 * @return {boolean}
 */
const isOdd = n => n % 2 !== 0;

/**
 * Checks whether `n` is even.
 *
 * @param {number} n
 * @return {boolean}
 */
const isEven = n => n % 2 === 0;

/**
 * Checks whether `n` is negative.
 *
 * @param {number} n
 * @return {boolean}
 */
const isNegative = n => n < 0;

describe('some()', () => {
  it('should return false with empty array', () => {
    expect(some([], noop)).toBe(false);
    expect(some([], id)).toBe(false);
    expect(some([], isOdd)).toBe(false);
  });

  it('should return false when no elems satisfy the predicate', () => {
    expect(some([-3, -1, 5, 7], isEven)).toBe(false);
    expect(some([-2, -4, 6, 12], isOdd)).toBe(false);
    expect(some([13, 42, 49], isNegative)).toBe(false);
    expect(some([13, 42, 49], n => n >= 50)).toBe(false);
  });

  it('should return true when some elems satisfy the predicate', () => {
    expect(some([-4, -1, 6, 1e2], isOdd)).toBe(true);
    expect(some([-9, -3, 7, 12], isEven)).toBe(true);
    expect(some([13, 42, -49], isNegative)).toBe(true);
    expect(some([13, 42, 1e2, 49], n => n >= 50)).toBe(true);
  });
});
