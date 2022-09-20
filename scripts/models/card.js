import Case from "./case.js";

/**
 * Class representing a Map
 */
class Card {
  /**
   * Create a map with array of Cases
   * @param {number} width - the map's width
   * @param {number} height - the map's height
   */
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.cases = [];

    for (let x = 0; x < width; x += 1) {
      this.cases.push([]);
      for (let y = 0; y < height; y += 1) {
        this.cases[x].push(new Case());
      }
    }
  }

  /**
   * Get the object Case with the coordinates x & y
   * @param {number} x - X-axis
   * @param {number} y - Y-axis
   * @returns {Object<Case>}
   */
  getCase(x, y) {
    if (!this.caseExist(x, y)) {
      throw Error("Case does not exist");
    }
    return this.cases[x][y];
  }

  /**
   * Check if a case exists with this coordinates
   * @param {number} x - X-axis
   * @param {number} y - Y-axis
   * @returns {boolean}
   */
  caseExist(x, y) {
    return !!this.cases[x] && !!this.cases[x][y];
  }

  /**
   * Get the case where the player is
   * @param {Object<Player>} player
   * @returns {Object<Case>}
   */
  getPlayerCase(player) {
    return this.cases[player.x][player.y];
  }

  /**
   * Check if the player can move on this coordinates
   * @param {number} x - X-axis
   * @param {number} y - Y-axis
   * @returns {boolean}
   */
  playerCanMoveOnCase(x, y) {
    return (
      this.caseExist(x, y) &&
      !this.getCase(x, y).hasPlayer() &&
      !this.getCase(x, y).hasMountain()
    );
  }

  /**
   * Function to print Card's params
   * @returns {string}
   */
  print() {
    return `C - ${this.width} - ${this.height}\n`;
  }
}

export default Card;
