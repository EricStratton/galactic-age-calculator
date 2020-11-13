import MercuryAge from '../src/js/mercury.js';

describe('MercuryAge', () => {

  test('should correctly calculate age on Mercury based on rotations around sun relative to Earth', () => {
  let age = new MercuryAge();
  expect(age).toEqual("mercuryAge"); 

  });
});