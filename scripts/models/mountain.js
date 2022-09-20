/**
 * Class representing a Mountain
 */
class Mountain {
  /**
   * Create a Mountain
   * @param {number} x - X-axis
   * @param {number} y - Y-axis
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Function to print Mountain's params
   * @returns {string}
   */
  print() {
    return `M - ${this.x} - ${this.y}\n`;
  }
}

export default Mountain;
