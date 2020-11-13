import JupiterAge from '../src/js/jupiter.js';

describe ('JupiterInfo', () => {

  let info;

  beforeEach(() => {
    info = new JupiterInfo (25)
  });

  test('should correctly calculate age on Jupiter based on rotations around sun relative to Earth', () => {
  info.calcJupiterAge();
  expect(age.jupiterAge).toEqual(25/(11.86));
  });
});