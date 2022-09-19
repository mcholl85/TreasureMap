import Case from "./case.js";

export default class Card {
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

  getCase(x, y) {
    if (!this.caseExist(x, y)) {
      throw Error("Case does not exist");
    }
    return this.cases[x][y];
  }

  caseExist(x, y) {
    return !!this.cases[x] && !!this.cases[x][y];
  }

  getPlayerCase(player) {
    return this.cases[player.x][player.y];
  }

  playerCanMoveOnCase(x, y) {
    return (
      this.caseExist(x, y) &&
      !this.getCase(x, y).hasPlayer() &&
      !this.getCase(x, y).hasMountain()
    );
  }

  print() {
    return `C - ${this.width} - ${this.height}\n`;
  }
}
