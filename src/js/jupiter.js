export default class JupiterAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.jupiterAge;
  }

  calcJupiterAge() {
    return this.jupiterAge = (this.earthAge/(11.86));
  }
};