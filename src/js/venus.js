export default class VenusAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.venusAge;
  }

  calcVenusAge() {
    return this.venusAge = (this.earthAge/(.62));
  }
};