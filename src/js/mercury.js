export default class MercuryAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge;
  }

  calcMercuryAge() {
    return this.mercuryAge = (this.earthAge/(.24));
  }

};