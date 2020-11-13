export default class MarsAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.marsAge;
  }

  calcMarsAge() {
    return this.marsAge = (this.earthAge/(1.88));
  }
};