import { isString } from '../isString';

describe('lib/is-type', () => {
  describe('isString()', () => {
    it('should return false input is NOT of type string', () => {
      [
        undefined,
        null,
        ['str'],
        { title: 'Tomb Raider 1996' },
        -1,
      ].forEach(param => {
        expect(isString(param)).toBe(false);
      });
    });

    it('should return true when inpt IS of type string', () => {
      [
        '',
        new String(''),
        '1',
        new String('1'),
      ].forEach(param => {
        expect(isString(param)).toBe(true);
      });
    });
  });
});

