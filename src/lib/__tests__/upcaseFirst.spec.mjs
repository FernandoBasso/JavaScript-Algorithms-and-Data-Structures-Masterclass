import {
  upcaseFirst,
} from '../upcaseFirst';

describe('upcaseFirst()', () => {
  describe('when input is an empty string', () => {
    it('should return an empty string', () => {
      expect(upcaseFirst('')).toEqual('');
    });
  });

  describe('when input contains only one char', () => {
    it('should return the uppercased char', () => {
      expect(upcaseFirst('x')).toEqual('X');
      expect(upcaseFirst('p')).toEqual('P');
    });
  });

  describe('when input contains multiple chars', () => {
    it('should return string with first char uppercased', () => {
      expect(upcaseFirst('linux')).toEqual('Linux');
      expect(upcaseFirst('lINUX')).toEqual('LINUX');
    });
  });

  describe('when input first char is already upper case', () => {
    it('should return the unmodified string', () => {
      expect(upcaseFirst('Linux')).toEqual('Linux');
      expect(upcaseFirst('Haskell')).toEqual('Haskell');
    });
  });
});
