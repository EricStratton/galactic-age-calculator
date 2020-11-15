import MercuryInfo from '../src/js/mercury.js';

describe('MercuryInfo', () => {

  let info;

  beforeEach(() => {
    info = new MercuryInfo(25, 75.3);
  });

  test('should correctly calculate age on Mercury based on rotations around sun relative to Earth', () => {
    info.calcMercuryAge();
    expect(info.mercuryAge).toEqual(25/(.24)); 
  });

  test('should correctly calculate how many years user has left on Mercury based on Earth life-expectantcy', () => {
    info.calcMercuryAge();
    info.calcMercuryYearsLeft();
    expect(info.mercuryYearsLeft).toEqual((75.3/.24)-info.mercuryAge);
  });

  test('should calculate difference between age in Mercury years and life expectancy in Mercury years', () => {
    info.calcMercuryAge();
    info.calcMercuryDifference();
    expect(info.mercuryDifference).toEqual(info.mercuryAge - (info.earthLifeExpectancy/info.percentEarthYear))
  });
});
