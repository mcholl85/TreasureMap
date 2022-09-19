export default class Player {
  constructor(name, x, y, orientation, move) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    this.move = [...move];
    this.treasureFound = 0;
  }

  foundTreasure() {
    this.treasureFound += 1;
  }

  setNewCoordinates(x, y) {
    this.x = x;
    this.y = y;
  }

  print() {
    return `A - ${this.name} - ${this.x} - ${this.y} - ${this.orientation} - ${this.treasureFound}\n`;
  }

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
        return new Error("Wrong Orientation");
    }
  }

  get nextMove() {
    return this.move[0];
  }

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
          this.orientation = "S";
          break;
        }
        if (this.nextMove === "D") {
          this.orientation = "N";
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
        Error("Wrong orientation");
    }
  }

  removeFirstMove() {
    this.move.shift();
  }

  hasNoMove() {
    return this.move.length === 0;
  }
}
