export default class MarsInfo {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.marsAge;
  }

  calcMarsAge() {
    return this.marsAge = (this.earthAge/(1.88));
  }
};