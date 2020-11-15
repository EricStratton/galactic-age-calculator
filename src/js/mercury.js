export default class MercuryInfo {
  constructor(earthAge, earthLifeExpectancy) {
    this.percentEarthYear = .24;
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.mercuryAge;
    this.mercuryYearsLeft;
    this.mercuryDifference;
  }

  calcMercuryAge() {
    return this.mercuryAge = (this.earthAge/this.percentEarthYear);
  }

  calcMercuryYearsLeft() {
    return this.mercuryYearsLeft = ((this.earthLifeExpectancy/this.percentEarthYear) - this.mercuryAge);
  }

  calcMercuryDifference() {
    return this.mercuryDifference = (this.mercuryAge - (this.earthLifeExpectancy/this.percentEarthYear));
  }

  makeNiceMessage() {
    return this.niceMessage = `Wow, you're ${this.mercuryDifference} Mercury years passed your life expectancy!`;
  }
};