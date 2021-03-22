import { logAtLeast5 } from "./log-at-least-5";

global.console = {
  log: jest.fn(),
};

beforeEach(() => {
  jest.spyOn(global.console, "log").mockImplementation(jest.fn());
});

describe("logAtLeast5()", () => {
  describe("when the input is less than or equalt to 5", () => {
    [0, 3, 5].forEach((num) => {
      it(`for number ${num} it should log exactly 5 times`, () => {
        logAtLeast5(num);
        expect(global.console.log).toHaveBeenCalledTimes(5);
        jest.clearAllMocks(); // <1>
      });
    });
  });

  describe("when the input is more than 5", () => {
    [6, 9, 42].forEach((num) => {
      it(`for number ${num} it should log exactly ${num} times`, () => {
        logAtLeast5(num);
        expect(global.console.log).toHaveBeenCalledTimes(num);
        jest.clearAllMocks();
      });
    });
  });
});

//
// <1>: ‘jest.clearAllMocks()’ makes jest forget rest the amount of
// times our ‘console.log’ has been called.
//

//
// vim: set tw=72:
//
