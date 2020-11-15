export default class JupiterInfo {
  constructor(earthAge, earthLifeExpectancy) {
    this.percentEarthYear = 11.86;
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.jupiterAge;
    this.jupiterYearsLeft;
    this.jupiterDifference;
  }

  calcJupiterAge() {
    return this.jupiterAge = (this.earthAge/this.percentEarthYear);
  }

  calcJupiterYearsLeft() {
    return this.jupiterYearsLeft = ((this.earthLifeExpectancy/this.percentEarthYear) - this.jupiterAge);
  }

  calcJupiterDifference() {
    if (this.earthAge > this.earthLifeExpectancy) {
      this.jupiterDifference = `Wow, you're ${this.jupiterAge - (this.earthLifeExpectancy/this.percentEarthYear)} Jupiter years passed your life expectancy!`;
    } else {
      this.jupiterDifference = 0;
    }
    return this.jupiterDifference;
  }

};