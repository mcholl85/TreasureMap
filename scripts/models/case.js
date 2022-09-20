export default class Case {
  constructor() {
    this.mountain = undefined;
    this.treasure = undefined;
    this.player = undefined;
  }

  setMountain(mountain) {
    if (this.mountain) {
      throw Error("A mountain is already on this case");
    }

    this.mountain = mountain;
  }

  setPlayer(player) {
    if (this.player) {
      throw Error("A player is already on this case");
    }

    if (this.mountain) {
      throw Error("You can't put a player on a mountain");
    }

    this.player = player;

    if (this.treasure) {
      this.treasure.decrementTreasure();
      this.player.foundTreasure();
    }
  }

  removePlayer() {
    this.player = undefined;
  }

  setTreasure(treasure) {
    if (this.hasMountain()) {
      throw Error("You can't put a treasure on a mountain");
    }
    if (this.treasure) {
      throw Error("This case has already a treasure");
    }
    this.treasure = treasure;
  }

  hasPlayer() {
    return this.player;
  }

  hasMountain() {
    return this.mountain;
  }
}
