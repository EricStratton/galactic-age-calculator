import MercuryAge from '../src/js/mercury.js';

describe('MercuryAge', () => {

  test('should correctly calculate age on Mercury based on rotations around sun relative to Earth', () => {
  let age = new MercuryAge(25);
  age.calcMercuryAge();
  expect(age.mercuryAge).toEqual(25/(.24)); 
  });
});