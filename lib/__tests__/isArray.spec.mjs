import { isArray } from '../isArray';

describe('isArray()', () => {
  describe('when param is not of type array', () => {
    it('shold return false', () => {
      [
        undefined,
        null,
        'some string',
        { id: 1 },
        /pattern/g,
      ].forEach(param => {
        expect(isArray(param)).toBe(false);
      });
    });
  });

  describe('when param is an array', () => {
    it('should return true', () => {
      [
        [],
        ['x', 'y', 'z'],
        new Array(-3, -2, -1, -0),
      ].forEach(param => {
        expect(isArray(param)).toBe(true);
      });
    });
  });
});
