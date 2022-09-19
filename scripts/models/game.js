import Card from "./card.js";
import Treasure from "./treasure.js";
import Player from "./player.js";
import Mountain from "./mountain.js";
import {
  cardParamsAreValid,
  mountainParamsAreValid,
  playerParamsAreValid,
  treasureParamsAreValid,
} from "../utils/validation.js";

export default class Game {
  constructor() {
    this.card = undefined;
    this.players = [];
    this.treasures = [];
    this.mountains = [];
  }

  addCard(params) {
    if (this.card) {
      throw Error("Game has already a card");
    }

    if (!cardParamsAreValid(params)) {
      throw Error("Card params are invalid");
    }

    const [width, height] = params;

    this.card = new Card(parseInt(width, 10), parseInt(height, 10));
  }

  addMountain(params) {
    if (!mountainParamsAreValid(params)) {
      throw Error("Mountain params are invalid");
    }

    const x = parseInt(params[0], 10);
    const y = parseInt(params[1], 10);

    if (!this.card.caseExist(x, y)) {
      throw Error("Mountain is out of the map");
    }

    const mountainCase = this.card.getCase(x, y);
    const mountain = new Mountain(x, y);

    mountainCase.setMountain(mountain);
    this.mountains.push(mountain);
  }

  addTreasures(params) {
    if (!treasureParamsAreValid(params)) {
      throw Error("Treasure params are invalid");
    }

    const x = parseInt(params[0], 10);
    const y = parseInt(params[1], 10);

    if (!this.card.caseExist(x, y)) {
      throw Error("Treasure is out of the map");
    }

    const quantity = parseInt(params[2], 10);
    const treasureCase = this.card.getCase(x, y);
    const treasure = new Treasure(x, y, parseInt(quantity, 10));

    treasureCase.setTreasure(treasure);
    this.treasures.push(treasure);
  }

  addPlayer(params) {
    if (!playerParamsAreValid(params)) {
      throw Error("Player params are invalid");
    }

    const [name, x, y, orientation, move] = params;
    const coordX = parseInt(x, 10);
    const coordY = parseInt(y, 10);

    if (!this.card.caseExist(coordX, coordY)) {
      throw Error("Mountain is out of the map");
    }

    const playerCase = this.card.getCase(coordX, coordY);
    const player = new Player(name, coordX, coordY, orientation, move);

    playerCase.setPlayer(player);
    this.players.push(player);
  }

  movePlayer(player) {
    const { x, y } = player.nextCoordinates;
    const playerCase = this.card.getPlayerCase(player);

    if (this.card.playerCanMoveOnCase(x, y)) {
      const nextCase = this.card.getCase(x, y);

      player.setNewCoordinates(x, y);
      playerCase.removePlayer();
      nextCase.setPlayer(player);
    }
    player.changeOrientation();
    player.removeFirstMove();
  }

  play() {
    while (!this.gameIsOver()) {
      this.players.forEach((player) => {
        this.movePlayer(player);
      });
    }
  }

  gameIsOver() {
    return this.players.every((player) => player.hasNoMove());
  }

  treasureNotFound() {
    return this.treasures.filter((treasure) => treasure.quantity > 0);
  }

  output() {
    let results = this.card.print();

    this.mountains.forEach((mountain) => {
      results += mountain.print();
    });

    results +=
      "# {T comme Trésor} - {Axe horizontal} - {Axe vertical} - {Nb. de trésors restants}\n";

    this.treasureNotFound().forEach((treasure) => {
      results += treasure.print();
    });

    results +=
      "# {A comme Aventurier} - {Nom de l’aventurier} - {Axe horizontal} - {Axe vertical} - {Orientation} - {Nb. trésors ramassés}\n";

    this.players.forEach((player) => {
      results += player.print();
    });

    return results;
  }
}
