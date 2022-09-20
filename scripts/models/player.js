/**
 * Class representing a Player
 */
class Player {
  /**
   * Create a Player
   * @param {string} name - Player's name
   * @param {number} x - X-axis
   * @param {number} y - Y-axis
   * @param {string} orientation List of orientation S, N, E or O
   * @param {string} move - List of move A D or G
   */
  constructor(name, x, y, orientation, move) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    this.move = [...move];
    this.treasureFound = 0;
  }

  /**
   * Function to incremente the treasureFound's number
   */
  foundTreasure() {
    this.treasureFound += 1;
  }

  /**
   * Set the new player's coordinates
   * @param {number} x - X-axis
   * @param {number} y - Y-axis
   */
  setNewCoordinates(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Function to print Player's params
   * @returns {string}
   */
  print() {
    return `A - ${this.name} - ${this.x} - ${this.y} - ${this.orientation} - ${this.treasureFound}\n`;
  }

  /**
   * Function to return the new coordinates according to the orientation and the movement
   * @returns {Object<string>}
   */
  get nextCoordinates() {
    switch (this.orientation) {
      case "S":
        if (this.nextMove === "A") {
          return { x: this.x, y: this.y + 1 };
        }
        if (this.nextMove === "D") {
          return { x: this.x - 1, y: this.y };
        }
        return { x: this.x + 1, y: this.y };
      case "N":
        if (this.nextMove === "A") {
          return { x: this.x, y: this.y - 1 };
        }
        if (this.nextMove === "D") {
          return { x: this.x + 1, y: this.y };
        }
        return { x: this.x - 1, y: this.y };
      case "E":
        if (this.nextMove === "A") {
          return { x: this.x + 1, y: this.y };
        }
        if (this.nextMove === "D") {
          return { x: this.x, y: this.y + 1 };
        }
        return { x: this.x, y: this.y - 1 };
      case "O":
        if (this.nextMove === "A") {
          return { x: this.x - 1, y: this.y };
        }
        if (this.nextMove === "D") {
          return { x: this.x, y: this.y - 1 };
        }
        return { x: this.x, y: this.y + 1 };
      default:
        throw Error("Wrong Orientation");
    }
  }

  /**
   * Function that return the first element of move's array
   * @returns {string}
   */
  get nextMove() {
    return this.move[0];
  }

  /**
   * Set the new orientation according to the actual orientation and the next movement
   */
  changeOrientation() {
    switch (this.orientation) {
      case "S":
        if (this.nextMove === "D") {
          this.orientation = "O";
          break;
        }
        if (this.nextMove === "G") {
          this.orientation = "E";
          break;
        }
        break;
      case "N":
        if (this.nextMove === "D") {
          this.orientation = "E";
          break;
        }
        if (this.nextMove === "G") {
          this.orientation = "O";
          break;
        }
        break;
      case "E":
        if (this.nextMove === "G") {
          this.orientation = "N";
          break;
        }
        if (this.nextMove === "D") {
          this.orientation = "S";
          break;
        }
        break;
      case "O":
        if (this.nextMove === "G") {
          this.orientation = "S";
          break;
        }
        if (this.nextMove === "D") {
          this.orientation = "N";
          break;
        }
        break;
      default:
        throw Error("Wrong orientation");
    }
  }

  /**
   * Remove the first element of move's array
   */
  removeFirstMove() {
    this.move.shift();
  }

  /**
   * Check if the player can't move, property move is empty
   * @returns {boolean}
   */
  hasNoMove() {
    return this.move.length === 0;
  }
}

export default Player;
