export default class MercuryInfo {
  constructor(earthAge, earthLifeExpectancy) {
    this.percentEarthYear = .24;
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.mercuryAge;
    this.mercuryYearsLeft;
  }

  calcMercuryAge() {
    return this.mercuryAge = (this.earthAge/this.percentEarthYear);
  }

  calcYearsLeft() {
    return this.mercuryYearsLeft = ((this.earthLifeExpectancy/this.percentEarthYear) - this.mercuryAge);
  }
};