import MarsInfo from '../src/js/mars.js';

describe ('MarsInfo', () => {

  let info;

  beforeEach(() => {
    info = new MarsInfo(25, 75.3)
  });

  test('should correctly calculate age on Mars based on rotations around sun relative to Earth', () => {
  info.calcMarsAge();
  expect(info.marsAge).toEqual(25/(1.88));
  });

  test('should correctly calculate how many years user has left on Mars based on Earth life-expectantcy', () => {
  info.calcMarsAge();
  info.calcMarsYearsLeft();
  expect(info.marsYearsLeft).toEqual((75.3/1.88)-info.marsAge);  
  });

  test('should correctly calculate difference between age in Mars years and life expectancy in Mars years if user has passed their life expectancy', () => {
    info.earthAge = 80;
    info.calcMarsAge();
    info.calcMarsDifference();
    expect(info.marsDifference).toEqual(`Wow, you're ${info.marsAge - (info.earthLifeExpectancy/info.percentEarthYear)} Mars years passed your life expectancy!`);
  });

  test('should return 0 if users has not passed their life expectancy', () => {
    expect(info.marsDifference).toEqual(0);
  });
});