import MarsAge from '../src/js/mars.js';

describe ('MarsAge', () => {

  test('should correctly calculate age on Mars based on rotations around sun relative to Earth', () => {
    let age = new MarsAge();
    expect(age).toEqual("marsAge");
  });
});