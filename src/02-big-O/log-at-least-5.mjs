/**
 * Logs numbers from 1 to at least `n`.
 *
 * If `n` is greater than 5, then log fro 1 to `n`, otherwise
 * log from 1 to 5.
 *
 * @param {number} n
 */
export function logAtLeast5(n) {
  var i;

  for (i = 1; i <= Math.max(n, 5); ++i) {
    console.log(i);
  }

  return i;
}

if (process.env.ENV !== "test") {
  logAtLeast5(3);
}
