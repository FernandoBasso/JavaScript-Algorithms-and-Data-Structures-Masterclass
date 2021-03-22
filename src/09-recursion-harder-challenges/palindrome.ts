/**
 * Checks whether `s` is a palindrome.
 *
 * @remarks
 * 0 or 1 char strings are palindromes. Then, if first and last chars
 * qre not equal, we immediatelly return false. Else, we recursive check
 * if the string without the first and last chars is a palindrome. We
 * basically do something like this:
 *
 * ```
 * ana → a → true
 * boob → oo → '' → true
 * madam → ada → d → true
 * ```
 *
 * @param s - The string to be checked.
 * @returns A bool indicating whether `s` is a palindrome or not.
 */
function isPalindrome(s: string): boolean {
  const len: number = s.length;
  if (len <= 1) return true;
  if (s[0] !== s[len - 1]) return false;
  return isPalindrome(s.substring(1, len - 1));
}

export { isPalindrome };
