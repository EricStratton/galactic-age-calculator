import JupiterAge from '../src/js/jupiter.js';

describe ('JupiterAge', () => {

  test('should correctly calculate age on Jupiter based on rotations around sun relative to Earth', () => {
  let age = new JupiterAge(25);
  age.calcJupiterAge();
  expect(age.jupiterAge).toEqual(25/(11.86));
  });
});