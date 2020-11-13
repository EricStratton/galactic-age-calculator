export default class JupiterInfo {
  constructor(earthAge, earthLifeExpectancy) {
    this.percentEarthYear = 11.86;
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.jupiterAge;
    this.jupiterYearsLeft;
  }

  calcJupiterAge() {
    return this.jupiterAge = (this.earthAge/(this.percentEarthYear));
  }

  calcJupiterYearsLeft() {
    return this.jupiterYearsLeft = ((this.earthLifeExpectancy/this.percentEarthYear) - this.jupiterAge);
  }
};