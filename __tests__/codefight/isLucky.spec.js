import { isLucky } from './../../javascript/codefight/isLucky';

describe('testing isLucky', () => {
  it('should be sum of the first half of the digits is equal to the sum of the second half.', () => {
    expect(isLucky(1230)).toEqual(true);
    expect(isLucky(239017)).toEqual(false);
    expect(isLucky(134008)).toEqual(true);
    expect(isLucky(10)).toEqual(false);
    expect(isLucky(11)).toEqual(true);
  });
});