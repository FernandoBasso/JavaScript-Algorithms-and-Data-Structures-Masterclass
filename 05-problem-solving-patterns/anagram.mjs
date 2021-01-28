//
// Examples of anagrams:
//
//            tar = rat
//            arc = car
//          elbow = below
//          state = taste
//          cider = cried
//          dusty = study
//          night = thing
//           inch = chin
//
//      dormitory = dirty room
//  school master = the classroom
//   conversation = voices rant on
//         listen = silent
//     astronomer = moon starer
//       the eyes = they see
//    a gentleman = elegant man
//        funeral = real fun
//

//
// To solve it, we must see if the second string has the same frequency
// of letters as in the first string. “iceman” is anagram to “cinema”.
// Each letter in iceman has a corresponding frequency in “cinama” (and
// vice-versa”.
//
// If a string contains spaces, ignore them. E.g.
//
//   “a gentleman” = “elegant man”
//
// When checking for the “anagramness” of the strings, ignore the spaces
// and any other punctuation character.
//
// NOTE: Do not confuse anagrams with palindromes. Palindromes are words
// that are the same if spelled backwards, like “racecar”. If you
// reverse it, it is still “racecar”.
//

/**
 * Checks whether the input is a string.
 *
 * @param {any} val
 * @return {boolean}
 */
function isString(val) {
  return !!(typeof val === 'string' || val instanceof String);
}

/**
 * Checks whether the two input strings are anagrams to one another.
 *
 * ASSUME: Input strings are lowercase and contain no spaces.
 *
 * NOTE: This is my solution. It involves looping and counting the
 * frequencies of characters in `s1`, and then using a second loop to
 * iterate over each key of `s1`, decrementing each occurrence of the
 * current char in the loop in the frequency object. Then, a third loop
 * checks whether any key has got a value count different than zero,
 * which means the frequencies don't match and the strings are not
 * anagrams to each other.
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function isAnagram1(s1, s2) {
  if (!isString(s1) || !isString(s2)) return false;
  if (s1.length !== s2.length) return false;

  if (s1.length === 0 && s2.length === 0) return true;

  const freqsS1 = {};

  for (let c of s1)
    freqsS1[c] = (freqsS1[c] || 0) + 1;

  for (let c of s2) {
    if (!freqsS1[c]) return false

    freqsS1[c] -= 1;
  }

  for (let c in freqsS1)
    if (freqsS1[c] !== 0) return false;

  return true;
}

export {
  isAnagram1 as isAnagram,
};

