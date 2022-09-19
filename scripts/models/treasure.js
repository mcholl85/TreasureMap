export default class Treasure {
  constructor(x, y, quantity) {
    this.x = x;
    this.y = y;
    this.quantity = quantity;
  }

  decrementTreasure() {
    if (this.quantity !== 0) this.quantity -= 1;
  }

  print() {
    return `T - ${this.x} - ${this.y} - ${this.quantity}\n`;
  }
}
