/**
 * Class representinf a Case
 */
class Case {
  /**
   * initialize a Case
   * @property {moutain} - Object Mountain
   * @property {treasure} - Object Treasure
   * @property {player} - Object Player
   */
  constructor() {
    this.mountain = undefined;
    this.treasure = undefined;
    this.player = undefined;
  }

  /**
   * Set a Mountain in the Case
   * @param {Object<Mountain>} mountain
   */
  setMountain(mountain) {
    if (this.mountain) {
      throw Error("A mountain is already on this case");
    }

    this.mountain = mountain;
  }

  /**
   * Set a Player in the Case
   * @param {Object<Player>} player
   */
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

  /**
   * Remove the player's Case
   */
  removePlayer() {
    this.player = undefined;
  }

  /**
   * Set a Treasure in the Case
   * @param {Object<Treasure>} treasure
   */
  setTreasure(treasure) {
    if (this.hasMountain()) {
      throw Error("You can't put a treasure on a mountain");
    }
    if (this.treasure) {
      throw Error("This case has already a treasure");
    }
    this.treasure = treasure;
  }

  /**
   * Check if player's property is empty
   * @returns {boolean}
   */
  hasPlayer() {
    return this.player;
  }

  /**
   * Check if mountain's property is empty
   * @returns {boolean}
   */
  hasMountain() {
    return this.mountain;
  }
}

export default Case;
