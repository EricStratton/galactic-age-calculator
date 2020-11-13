import MarsAge from '../src/js/mars.js';

describe ('MarsAge', () => {

  test('should correctly calculate age on Mars based on rotations around sun relative to Earth', () => {
    let age = new MarsAge(25);
    age.calcMarsAge();
    expect(age.marsAge).toEqual(25/(1.88));
  });
});