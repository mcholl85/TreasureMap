import Game from "../models/game.js";

export default class GameFactory {
  static create(input) {
    const game = new Game();
    const cmdLines = input.split("\n");

    cmdLines.forEach((cmdLine) => {
      const cmds = cmdLine.split(" - ");
      const [firstCmd, ...params] = cmds;

      switch (firstCmd) {
        case "C":
          game.addCard(params);
          break;
        case "M":
          game.addMountain(params);
          break;
        case "T":
          game.addTreasures(params);
          break;
        case "A":
          game.addPlayer(params);
          break;
        case "#":
          break;
        default:
          Error("Wrong first letters");
      }
    });
    return game;
  }
}
