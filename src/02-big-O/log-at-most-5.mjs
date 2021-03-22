/**
 * Logs numbers from 1 to at least `n`.
 *
 * If `n` is greater than 5, then log fro 1 to `n`, otherwise
 * log from 1 to 5.
 *
 * @param {number} n
 */
export function logAtMost5(n) {
  var i;

  for (i = 1; i <= Math.min(n, 5); ++i) {
    console.log(i);
  }

  return i;
}

if (process.env.ENV !== 'test') {
  logAtMost5(3);
}
