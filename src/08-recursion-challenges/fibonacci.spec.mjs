import {
  // fib_v1, as fib,
  // fib_v2 as fib,
  fib_v3 as fib,
} from './fibonacci';

describe('fib()', () => {
  it('should return nth number in the fibonacci sequence', () => {
    expect(fib(1)).toEqual(1);
    expect(fib(2)).toEqual(1);
    expect(fib(4)).toEqual(3);
    // expect(fib(5)).toEqual(5);
    expect(fib(10)).toEqual(55);
    expect(fib(28)).toEqual(317811);
    expect(fib(35)).toEqual(9227465);
  });
});
