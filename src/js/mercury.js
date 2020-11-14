export default class MercuryInfo {
  constructor(earthAge, earthLifeExpectancy) {
    this.percentEarthYear = .24;
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.mercuryAge;
    this.mercuryYearsLeft;
    this.mercuryYearsBeyond;
    this.niceMesage = `Wow, you're ${this.mercuryYearsBeyond} Mercury years passed your life expectancy!`;
  }

  calcMercuryAge() {
    return this.mercuryAge = (this.earthAge/this.percentEarthYear);
  }

  calcMercuryYearsLeft() {
    return this.mercuryYearsLeft = ((this.earthLifeExpectancy/this.percentEarthYear) - this.mercuryAge);
  }

  calcMercuryYearsBeyond() {
    return this.mercuryYearsBeyond = (this.mercuryAge - (this.earthLifeExpectancy/this.percentEarthYear));
  }
};