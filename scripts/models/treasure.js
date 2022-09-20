/**
 * Class representinf a Treasure
 */
class Treasure {
  /**
   * Create a Treasure
   * @param {number} x
   * @param {number} y
   * @param {number} quantity
   */
  constructor(x, y, quantity) {
    this.x = x;
    this.y = y;
    this.quantity = quantity;
  }

  /**
   * Function to decremente the treasure's quantity
   */
  decrementTreasure() {
    if (this.quantity !== 0) this.quantity -= 1;
  }

  /**
   * Function to print Treasure's params
   * @returns {string}
   */
  print() {
    return `T - ${this.x} - ${this.y} - ${this.quantity}\n`;
  }
}

export default Treasure;
