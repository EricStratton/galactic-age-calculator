import MercuryInfo from '../src/js/mercury.js';

describe('MercuryInfo', () => {

  let info;

  beforeEach(() => {
    info = new MercuryInfo(25, 75.3);
  });

  test('should correctly calculate age on Mercury based on rotations around sun relative to Earth', () => {
  info.calcMercuryAge();
  expect(info.mercuryAge).toEqual(25/(.24)); 
  });

  test('should correctly calculate how many years user has left on Mercury based on Earth life-expectantcy', () => {
  expect(info.yearsLeft).toEqual("howManyYearsLeft");
  });
});