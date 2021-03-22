import { assertEquals } from "/deps.ts";

import {
  isPalindrome,
} from "/src/09-recursion-harder-challenges/palindrome.ts";

Deno.test("should return false for non-palindromes", () => {
  assertEquals(isPalindrome("awesome"), false);
  assertEquals(isPalindrome("foobar"), false);
  assertEquals(isPalindrome("amanaplanacanalpandemonium"), false);
});

Deno.test("should return true for empty strings", () => {
  assertEquals(isPalindrome(""), true);
});

Deno.test("should return true for one letter strings", () => {
  assertEquals(isPalindrome("z"), true);

  // Let us see how a multibyte char works out.
  assertEquals(isPalindrome("λ"), true);
});

Deno.test("should return true for two-or-more-chars palindromes", () => {
  assertEquals(isPalindrome("zz"), true);
  assertEquals(isPalindrome("ana"), true);
  assertEquals(isPalindrome("boob"), true);
  assertEquals(isPalindrome("amanaplanacanalpanama"), true);
});
