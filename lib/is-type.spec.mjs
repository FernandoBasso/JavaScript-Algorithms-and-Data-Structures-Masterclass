import {
  isString,
} from './is-type';

describe('lib/is-type', () => {
  describe('isString()', () => {
    it('should return false input is NOT of type string', () => {
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
      expect(isString([])).toBe(false);
      expect(isString(1)).toBe(false);
      expect(isString(1)).toBe(false);
    });

    it('should return true when inpt IS of type string', () => {
      expect(isString('')).toBe(true);
      expect(isString(new String(''))).toBe(true);
      expect(isString('1')).toBe(true);
      expect(isString(new String('1'))).toBe(true);
    });
  });
});

