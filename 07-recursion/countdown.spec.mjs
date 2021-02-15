import {
  countdown,
} from './countdown';

global.console = {
  info: jest.fn(),
  log: jest.fn(),
};

beforeEach(() => {
  jest.spyOn(global.console, 'log').mockImplementation(jest.fn());
});

afterEach(jest.clearAllMocks);

describe('countdown()', () => {
  it('should count 0 times when input is 0', () => {
    countdown(0);
    expect(global.console.log).toHaveBeenCalledTimes(0);
  });

  it('should count a single time when input is 1', () => {
    countdown(1);
    expect(global.console.log).toHaveBeenCalledTimes(1);
    expect(global.console.log).toHaveBeenCalledWith(1);
  });

  it('should count a n times when input is n', () => {
    countdown(5);
    expect(global.console.log).toHaveBeenCalledTimes(5);

    [5, 4, 3, 2, 1].forEach(n => {
      expect(global.console.log).toHaveBeenCalledWith(n);
    });
  });
});
