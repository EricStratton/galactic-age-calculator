import JupiterInfo from '../src/js/jupiter.js';

describe ('JupiterInfo', () => {

  let info;

  beforeEach(() => {
    info = new JupiterInfo (25, 75.3);
  });

  test('should correctly calculate age on Jupiter based on rotations around sun relative to Earth', () => {
    info.calcJupiterAge();
    expect(info.jupiterAge).toEqual(25/(11.86));
  });

  test('should correctly calculate number of Jupiter years left based on Earth life expectancy', () => {
    info.calcJupiterAge();
    info.calcJupiterYearsLeft();
    expect(info.jupiterYearsLeft).toEqual((75.3/11.86)-info.jupiterAge);  
  });

  test('should correctly calculate difference between age in Jupiter years and life expectancy in Jupiter years if user has passed their life expectancy', () => {
    info.earthAge = 80;
    info.calcJupiterAge();
    info.calcJupiterDifference();
    expect(info.jupiterDifference).toEqual(`Wow, you're ${info.jupiterAge - (info.earthLifeExpectancy/info.percentEarthYear)} Jupiter years passed your life expectancy!`);
  });

  test('should return 0 if user has not passed their life expectancy', () => {
    expect(info.jupiterDifference).toEqual(0)
  });

});