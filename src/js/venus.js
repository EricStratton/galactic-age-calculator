export default class VenusInfo {
  constructor(earthAge, earthLifeExpectancy) {
    this.percentEarthYear = .62;
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.venusAge;
    this.venusYearsLeft;
    this.venusDifference;
  }

  calcVenusAge() {
    return this.venusAge = (this.earthAge/this.percentEarthYear);
  }

  calcVenusYearsLeft() {
    return this.venusYearsLeft = ((this.earthLifeExpectancy/this.percentEarthYear) - this.venusAge);
  }

  calcVenusDifference() {
    if (this.earthAge > this.earthLifeExpectancy) {
      this.venusDifference = `Wow, you're ${this.venusAge - (this.earthLifeExpectancy/this.percentEarthYear)} Venus years passed your life expectancy!`;
    } else {
      this.venusDifference = 0;
    }
    return this.venusDifference;
  }
};