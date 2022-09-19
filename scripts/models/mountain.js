export default class Mountain {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  print() {
    return `M - ${this.x} - ${this.y}\n`;
  }
}
