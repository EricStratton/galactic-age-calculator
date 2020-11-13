import VenusAge from '../src/js/venus.js';

describe('VenusAge', () => {

  test('should correctly calculate age on Venus based on rotations around sun relative to Earth', () => {
  let age = new VenusAge(25);
  age.calcVenusAge();
  expect(age.venusAge).toEqual(25/(.62));  
  });
});