//
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425982
//
// Write a recursive function called <strong>isPalindrome</strong> which
// returns true if the string passed to it is a palindrome (reads the
// same forward and backward). Otherwise it returns false.
//
//
// ADDITIONAL REFERENCES:
//
// • https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/using-recursion-to-determine-whether-a-word-is-a-palindrome
//
// A palindrome is a word that is spelled the same forward and backward.
//
// By that definition an empty string “''” reads the same forward and
// backward. The same holds true for a one-char string. “f” also reads
// the same both forward _and_ backward.
//
// TLDR: empty strings and one-char strings are palindromes.
//

/**
 * Checks whether `s` is a palindrome.
 *
 * This solution is actually simple. 0 or 1 char strings are
 * palindromes. Then, if first and last chars qre not equal, we
 * immediatelly return false. Else, we recursive check if the string
 * without the first and last chars is a palindrome. We basically do
 * something like this:
 *
 *     ana → a → true
 *     boob → oo → '' → true
 *     madam → ada → d → true
 *
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const len = s.length;

  if (len === 0 || len === 1) return true;

  if (s[0] !== s[len - 1]) return false;

  return isPalindrome(s.slice(1, len - 1));
}

export {
  isPalindrome,
};

