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
});