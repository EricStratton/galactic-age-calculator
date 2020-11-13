export default class VenusInfo {
  constructor(earthAge, earthLifeExpectancy) {
    this.percentEarthYear;
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.venusAge;
    this.yearsLeft;
  }

  calcVenusAge() {
    return this.venusAge = (this.earthAge/this.percentEarthYear);
  }

  calcYearsLeft() {
    return this.yearsLeft = (this.earthLifeExpectancy - this.venusAge);
  }
};