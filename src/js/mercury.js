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
    if (this.earthAge > this.earthLifeExpectancy) {
      this.mercuryDifference = `Wow, you're ${this.mercuryAge - (this.earthLifeExpectancy/this.percentEarthYear)} Mercury years passed your life expectancy!`;
    } else {
      this.mercuryDifference = 0;
    }
    return this.mercuryDifference;
  }

};