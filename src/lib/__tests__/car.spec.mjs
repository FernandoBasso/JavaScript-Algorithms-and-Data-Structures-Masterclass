import { car } from '../car';

describe('car()', () => {
  describe('when not an array', () => {
    it('should trow a ‘TypeError’', () => {
      expect(() => car(null)).toThrow(TypeError);
      expect(
        () => car({})
      ).toThrow('car(): parameter must be of type Array');
    });
  });

  describe('when the array is empty', () => {
    it('should throw a type error', () => {
      expect(
        () => car([])
      ).toThrow('car(): cannot get car/head of empty Array');
    });
  });

  describe('when array contains one element', () => {
    it('should return the first and only element', () => {
      expect(car([-13])).toEqual(-13);
      expect(car([['x', 'y', 'z']])).toEqual(['x', 'y', 'z']);
    });
  });

  describe('when array contains two or more elements', () => {
    it('shouldl return the first element', () => {
      expect(car([4, -13, -9, 0, 7])).toEqual(4);
      expect(
        car([['x', 'y', 'z'], ['a', 'b'], ['j']])
      ).toEqual(['x', 'y', 'z']);
    });
  });
});
