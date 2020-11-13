export default class MercuryInfo {
  constructor(earthAge, earthLifeExpectancy) {
    this.percentEarthYear;
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.mercuryAge;
    this.yearsLeft;
  }

  calcMercuryAge() {
    return this.mercuryAge = (this.earthAge/this.percentEarthYear);
  }

  calcYearsLeft() {
    return this.yearsLeft = (this.earthLifeExpectancy - this.mercuryAge);
  }
};