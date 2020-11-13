export default class MarsInfo {
  constructor(earthAge, earthLifeExpectancy) {
    this.percentEarthYear = 1.88;
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.marsAge;
    this.yearsLeft;
  }

  calcMarsAge() {
    return this.marsAge = (this.earthAge/this.percentEarthYear);
  }

  calcYearsLeft() {
    // return this.yearsLeft = (this.earthLifeExpectancy - this.marsAge);
  }
};