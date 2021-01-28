//
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11172598
//

//
// Write a function that counts the number of each alphanumeric character
// in the given string.
//
// We want to return an object containing only the count of the
// alphanumeric characters that do appear on the input string.
//
// The input string may contain uppercase characters but we count
// uppercase and lowercase characters as being the same. E.g. “e” and
// “E” are to be considered the same.
//

/**
 * Count the number of alphanumeric characters in the input string.
 *
 * @param {string}
 * @return {object}
 */
function countAlphaNum_0(str) {
  if (typeof str !== 'string' && !(str instanceof String)) {
    throw new TypeError('Input must be a string');
  }

  if (str.length === 0) return {};

  return [...str.replace(/[^a-zA-z0-9]/g, '')].reduce((acc, chr) => {
    const k = chr.toLowerCase(chr);

    if (acc.hasOwnProperty(k)) {
      acc[k] += 1;
      return acc;
    }

    acc[k] = 1;
    return acc;
  }, {});
}

/**
 * Solution by Colt Steele.  I added some basic sanity checks on the
 * input myself.
 */
function countAlphaNum_1(str) {
  if (typeof str !== 'string' && !(str instanceof String)) {
    throw new TypeError('Input must be a string');
  }

  if (str.length === 0) return {};

  let freq = {};

  for (let chr of str) {
    chr = chr.toLowerCase();

    if (/[a-z0-9]/.test(chr)) {
      freq[chr] = ++freq[chr] || 1;
    }
  }

  return freq;
}

////////////////////////////////////////////////////////////////////////
//
// My solution based on K&R C book which mentions numerical values for
// characters.
//

const CHAR_CODE_a = 'a'.charCodeAt(0); // 97
const CHAR_CODE_z = 'z'.charCodeAt(0); // 122
const CHAR_CODE_A = 'A'.charCodeAt(0); // 65
const CHAR_CODE_Z = 'Z'.charCodeAt(0); // 90
const CHAR_CODE_0 = '0'.charCodeAt(0); // 48
const CHAR_CODE_9 = '9'.charCodeAt(0); // 57

/**
 * Verifies if a character is a letter or digit.
 *
 * @param {string} chr A 1 character string.
 * @return {boolean}
 */
function isAlphaNum(chr) {
  const code = chr.charCodeAt(0);

  return (code >= CHAR_CODE_a && code <= CHAR_CODE_z) ||
    (code >= CHAR_CODE_A && code <= CHAR_CODE_Z) ||
    (code >= CHAR_CODE_0 && code <= CHAR_CODE_9);
}

/**
 * Count the number of alphanumeric characters in the input string.
 *
 * @param {string}
 * @return {object}
 */
function countAlphaNum_2(str) {
  if (typeof str !== 'string' && !(str instanceof String)) {
    throw new TypeError('Input must be a string');
  }

  if (str.length === 0) return {};

  let freq = {};

  for (let chr of str) {
    if (isAlphaNum(chr)) {
      const k = chr.toLowerCase();
      freq[k] = ++freq[k] || 1;
    }
  }

  return freq;
}

export {
  countAlphaNum_2 as countAlphaNum
}
