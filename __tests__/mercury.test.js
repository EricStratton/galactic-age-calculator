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

  test('if user is passed life expectancy, should return how far passed in Mercury years', () => {
  info.earthAge = 80;
  info.calcMercuryAge();
  info.calcMercuryYearsBeyond();
  expect(info.mercuryYearsBeyond).toEqual(info.mercuryAge - (info.earthLifeExpectancy/info.percentEarthYear))
  });

  
});
