import { largestOfFour } from '../../../javascript/freecodecamp/basic/largestOfFour';

describe('largestOfFour', () => {
  it('should be return [27, 5, 39, 1001].', () => {
    expect(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])).toEqual([27, 5, 39, 1001]);
  });

  it('should be return [9, 35, 97, 1000000]', () => {
    expect(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])).toEqual([9, 35, 97, 1000000]);
  });

  it('should be return [9, 35, 97, 1000000]', () => {
    expect(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])).toEqual([25, 48, 21, -3]);
  });
});
