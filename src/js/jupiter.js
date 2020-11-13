export default class JupiterInfo {
  constructor(earthAge, earthLifeExpectancy) {
    this.percentEarthYear;
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.jupiterAge;
    this.jupiterYearsLeft = "test";
  }

  calcJupiterAge() {
    return this.jupiterAge = (this.earthAge/(this.percentEarthYear));
  }

  calcJupiterYearsLeft() {
  }
};