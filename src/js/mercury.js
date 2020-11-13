export default class MercuryInfo {
  constructor(earthAge, earthLifeExpectancy) {
    this.percentEarthYear = .24;
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.mercuryAge;
    this.mercuryYearsLeft;
    this.mercuryYearsBeyond = "test";
  }

  calcMercuryAge() {
    return this.mercuryAge = (this.earthAge/this.percentEarthYear);
  }

  calcMercuryYearsLeft() {
    return this.mercuryYearsLeft = ((this.earthLifeExpectancy/this.percentEarthYear) - this.mercuryAge);
  }

  calcMercuryYearsBeyond() {

  }
};