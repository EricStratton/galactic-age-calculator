export default class MercuryInfo {
  constructor(earthAge, earthLifeExpectancy) {
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.mercuryAge;
    this.yearsLeft;
  }

  calcMercuryAge() {
    return this.mercuryAge = (this.earthAge/(.24));
  }

  calcYearsLeft() {
    return this.yearsLeft = (this.earthLifeExpectancy - this.mercuryAge);
  }
};