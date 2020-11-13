export default class MarsInfo {
  constructor(earthAge, earthLifeExpectancy) {
    this.percentEarthYear = 1.88;
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.marsAge;
    this.marsYearsLeft;
  }

  calcMarsAge() {
    return this.marsAge = (this.earthAge/this.percentEarthYear);
  }

  calcMarsYearsLeft() {
    return this.marsYearsLeft = ((this.earthLifeExpectancy/this.percentEarthYear) - this.marsAge);
  }
};