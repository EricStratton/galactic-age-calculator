import VenusInfo from '../src/js/venus.js';

describe('VenusInfo', () => {

  let info;

  beforeEach(() => {
    info = new VenusInfo(25, 75.3)
  });

  test('should correctly calculate age on Venus based on rotations around sun relative to Earth', () => {
  info.calcVenusAge();
  expect(info.venusAge).toEqual(25/(.62));  
  });

  test('should correctly calculate how many years user has left on Venus based on Earth life-expectantcy', () => {
  info.calcVenusAge();
  info.calcVenusYearsLeft();
  expect(info.venusYearsLeft).toEqual((75.3/.62)-info.venusAge);
  });
});