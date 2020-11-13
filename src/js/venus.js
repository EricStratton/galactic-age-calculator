export default class VenusInfo {
  constructor(earthAge, earthLifeExpectancy) {
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.venusAge;
    this.yearsLeft;
  }

  calcVenusAge() {
    return this.venusAge = (this.earthAge/(.62));
  }

  calcYearsLeft() {
    return this.yearsLeft = (this.earthLifeExpectancy - this.venusAge);
  }
};