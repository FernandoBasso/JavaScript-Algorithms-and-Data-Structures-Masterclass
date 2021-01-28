import { isAnagram } from './anagram';

// expect(isAnagram('', '')).toBe(true);
// expect(isAnagram('aaz', 'zza')).toBe(false);
// expect(isAnagram('anagram', 'nagaram');
// expect(isAnagram("rat","car");
// expect(isAnagram('awesome', 'awesom');
// expect(isAnagram('amanaplanacanalpanama', 'acanalmanplanpamana');
// expect(isAnagram('qwerty', 'qeywrt');
// expect(isAnagram('texttwisttime', 'timetwisttext');

describe('isAnagram()', () => {
  it('should return false with non-string inputs', () => {
    expect(isAnagram(null, undefined)).toBe(false);
    expect(isAnagram([], {})).toBe(false);
  });

  it('should return false with inputs of different lengths', () => {
    expect(isAnagram('', 'z')).toBe(false);
    expect(isAnagram('listen', 'silen')).toBe(false);
  });

  it('should return true with empty string inputs', () => {
    expect(isAnagram('', '')).toBe(true);
    expect(isAnagram(new String(''), new String(''))).toBe(true);
  });

  it('should return true for single word, non space anagrams', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
  });
});
