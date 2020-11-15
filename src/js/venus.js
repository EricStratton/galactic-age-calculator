export default class VenusInfo {
  constructor(earthAge, earthLifeExpectancy) {
    this.percentEarthYear = .62;
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.venusAge;
    this.venusYearsLeft;
    this.venusDifference = "test";
  }

  calcVenusAge() {
    return this.venusAge = (this.earthAge/this.percentEarthYear);
  }

  calcVenusYearsLeft() {
    return this.venusYearsLeft = ((this.earthLifeExpectancy/this.percentEarthYear) - this.venusAge);
  }

  calcVenusDifference() {
    return this.venusDifference;
  }
};