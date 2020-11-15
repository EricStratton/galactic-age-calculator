export default class MarsInfo {
  constructor(earthAge, earthLifeExpectancy) {
    this.percentEarthYear = 1.88;
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.marsAge;
    this.marsYearsLeft;
    this.marsDifference;
  }

  calcMarsAge() {
    return this.marsAge = (this.earthAge/this.percentEarthYear);
  }

  calcMarsYearsLeft() {
    return this.marsYearsLeft = ((this.earthLifeExpectancy/this.percentEarthYear) - this.marsAge);
  }

  calcMarsDifference() {
    if (this.earthAge > this.earthLifeExpectancy) {
      this.marsDifference = `Wow, you're ${this.marsAge - (this.earthLifeExpectancy/this.percentEarthYear)} Mars years passed your life expectancy!`;
    } else {
      this.marsDifference = 0;
    }
    return this.marsDifference;
  }
  
};