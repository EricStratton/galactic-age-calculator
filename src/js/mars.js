export default class MarsInfo {
  constructor(earthAge, earthLifeExpectancy) {
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.marsAge;
    this.yearsLeft;
  }

  calcMarsAge() {
    return this.marsAge = (this.earthAge/(1.88));
  }

  calcYearsLeft() {
    return this.yearsLeft = (this.earthLifeExpectancy - this.marsAge);
  }
};