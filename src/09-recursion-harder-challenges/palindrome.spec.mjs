import {
  // isPalindrome_v1 as isPalindrome,
  isPalindrome_v2 as isPalindrome,
} from "./palindrome";

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

describe("isPalindrome()", () => {
  it("should return false for non-palindromes", () => {
    expect(isPalindrome("awesome")).toBe(false);
    expect(isPalindrome("foobar")).toBe(false);
    expect(isPalindrome("amanaplanacanalpandemonium")).toBe(false);
  });

  it("should return true for empty strings", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("should return true for one letter strings", () => {
    expect(isPalindrome("z")).toBe(true);

    // Let us see how a multibyte char works out.
    expect(isPalindrome("λ")).toBe(true);
  });

  it("should return true for two-or-more-chars palindromes", () => {
    expect(isPalindrome("zz")).toBe(true);
    expect(isPalindrome("ana")).toBe(true);
    expect(isPalindrome("boob")).toBe(true);
    expect(isPalindrome("amanaplanacanalpanama")).toBe(true);
  });
});
