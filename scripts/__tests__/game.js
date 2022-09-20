import Game from "../models/game";
import FactoryGame from "../factories/game";
import { validInput } from "../__mocks__/input.js";

describe("Testing class Game: ", () => {
  it("Should initiate a empty game when i create a new instance", () => {
    const game = new Game();

    expect(game.card).toBeUndefined();
    expect(game.players.length).toBe(0);
    expect(game.treasures.length).toBe(0);
    expect(game.mountains.length).toBe(0);
  });
  describe("function addCard: ", () => {
    it("Should create a new card", () => {
      const game = new Game();

      game.addCard(["3", "4"]);
      expect(game.card.height).toBe(4);
    });
    it("Should throw an error when I add invalid params", () => {
      const game = new Game();

      expect(() => {
        game.addCard(["0", "5"]);
      }).toThrow("Card params are invalid");
    });
    it("Should throw an error when I add another card in the game", () => {
      const game = new Game();

      game.addCard(["3", "3"]);
      expect(() => {
        game.addCard(["3", "5"]);
      }).toThrow("Game has already a card");
    });
  });
  describe("function addMountain: ", () => {
    const game = new Game();
    game.addCard(["5", "5"]);

    it("Should create a new mountain when I add params", () => {
      game.addMountain(["3", "4"]);
      expect(game.mountains.length).toBe(1);
      expect(game.mountains[0].x).toBe(3);
      expect(game.mountains[0].y).toBe(4);
    });
    it("Should throw an error when I add invalid params", () => {
      expect(() => {
        game.addMountain([true, "5"]);
      }).toThrow("Mountain params are invalid");
    });
    it("Should throw an error when I try to put a mountain outside the card", () => {
      expect(() => {
        game.addMountain(["8", "4"]);
      }).toThrow("Mountain is out of the map");
    });
    it("Should throw an error when I try to put a mountain on a case who already have one", () => {
      expect(() => {
        game.addMountain(["3", "4"]);
      }).toThrow("A mountain is already on this case");
    });
  });
  describe("function addTreasures : ", () => {
    const game = new Game();
    game.addCard(["3", "4"]);

    it("Should create a new treasure when I use valid params", () => {
      game.addTreasures(["1", "0", "1"]);
      expect(game.treasures.length).toBe(1);
      expect(game.treasures[0].x).toBe(1);
      expect(game.treasures[0].x).toBe(1);
      expect(game.treasures[0].quantity).toBe(1);
    });
    it("Should throw an error when I try to put a treasure outside the card", () => {
      expect(() => {
        game.addTreasures(["8", "4", "2"]);
      }).toThrow("Treasure is out of the map");
    });
    it("Should throw an error when I try to put invalid params", () => {
      expect(() => {
        game.addTreasures(["8", "4", true]);
      }).toThrow("Treasure params are invalid");
    });
    it("Should throw an error when I try to put a treasure on a mountain", () => {
      game.addMountain(["0", "0"]);
      expect(() => {
        game.addTreasures(["0", "0", "1"]);
      }).toThrow("You can't put a treasure on a mountain");
    });
    it("Should throw an error when I try to put a treasure on a case who already have one", () => {
      expect(() => {
        game.addTreasures(["1", "0", "1"]);
      }).toThrow("This case has already a treasure");
    });
  });
  describe("function addPlayer : ", () => {
    const game = new Game();
    game.addCard(["5", "5"]);
    it("Should create a new player when I add valid params", () => {
      game.addPlayer(["Lara", "1", "1", "S", "AAAAA"]);
      expect(game.players.length).toBe(1);
      expect(game.players[0].x).toBe(1);
      expect(game.players[0].y).toBe(1);
      expect(game.players[0].orientation).toBe("S");
      expect(game.players[0].move).toStrictEqual([..."AAAAA"]);
    });
    it("Should throw an error when I try to add invalid params", () => {
      expect(() => {
        game.addPlayer(["Lara", "1", "1", true, "AAAA"]);
      }).toThrow("Player params are invalid");
    });
    it("Should throw an error when I try to put a player on a mountain", () => {
      game.addMountain(["2", "1"]);
      expect(() => {
        game.addPlayer(["Lara", "2", "1", "S", "AAAAA"]);
      }).toThrow("You can't put a player on a mountain");
    });
    it("Should throw an error when I try to put a player outside the card", () => {
      expect(() => {
        game.addPlayer(["Lara", "8", "1", "S", "AAAAA"]);
      }).toThrow("Player is out of the map");
    });
    it("Should throw an error when I try to put a player on a case who already have one", () => {
      expect(() => {
        game.addPlayer(["Lara", "1", "1", "S", "AAAAA"]);
      }).toThrow("A player is already on this case");
    });
  });
  describe("Function movePlayer: ", () => {
    const game = new Game();
    game.addCard(["5", "5"]);
    game.addPlayer(["Lara", "1", "1", "S", "GAAAA"]);

    it("Should modify the coordinates,the orientation and the move of the player on the map when it's possible", () => {
      game.movePlayer(game.players[0]);

      expect(game.players[0].x).toBe(2);
      expect(game.players[0].y).toBe(1);
      expect(game.players[0].orientation).toBe("E");
      expect(game.players[0].move).toStrictEqual([..."AAAA"]);
    });
    it("Should only change the orientation et remove last move when the player can't move", () => {
      game.addMountain(["3", "1"]);
      game.movePlayer(game.players[0]);

      expect(game.players[0].x).toBe(2);
      expect(game.players[0].y).toBe(1);
      expect(game.players[0].orientation).toBe("E");
      expect(game.players[0].move).toStrictEqual([..."AAA"]);
    });
  });
  describe("Function gameIsOver :", () => {
    const game = new Game();
    game.addCard(["5", "5"]);

    it("Should return true if the players have no more movements", () => {
      game.addPlayer(["Lara", "1", "1", "S", ""]);
      game.addPlayer(["Momo", "2", "1", "S", ""]);
      expect(game.gameIsOver()).toBeTruthy();
    });
    it("Should return false if the players have movements", () => {
      game.addPlayer(["Lara", "2", "2", "S", "AA"]);
      game.addPlayer(["Momo", "3", "1", "S", ""]);
      expect(game.gameIsOver()).toBeFalsy();
    });
  });
  describe("Function play :", () => {
    it("Should move the player until he is no longer moving", () => {
      const game = new Game();

      game.addCard(["5", "5"]);
      game.addPlayer(["Lara", "1", "1", "S", "AAAAA"]);
      game.play();

      expect(game.gameIsOver());
    });
  });
  describe("Function treasureRemaining", () => {
    it("Should return object treasure with quantity > 0", () => {
      const game = new Game();

      game.addCard(["5", "5"]);
      game.addTreasures(["2", "0", "1"]);
      game.addTreasures(["1", "0", "8"]);
      game.addTreasures(["1", "1", "2"]);
      game.treasures[0].decrementTreasure();

      expect(game.treasuresRemaining()).toStrictEqual([
        game.treasures[1],
        game.treasures[2],
      ]);
    });
  });
  describe("Function output :", () => {
    const game = FactoryGame.create(validInput);

    game.play();
    const results = game.output();

    it("Should return a string with the params card", () => {
      const card = game.card.print();

      expect(results.includes(card)).toBeTruthy();
    });
    it("Should return a string with the params mountains", () => {
      const moutains = game.mountains.map((mountain) => mountain.print());

      moutains.forEach((mountain) => {
        expect(results.includes(mountain)).toBeTruthy();
      });
    });
    it("Should return a string with the params of remaining treasure", () => {
      const treasures = game
        .treasuresRemaining()
        .map((treasure) => treasure.print());

      treasures.forEach((treasure) => {
        expect(results.includes(treasure)).toBeTruthy();
      });
    });
    it("Should return a string with the players results", () => {
      const players = game.players.map((player) => player.print());

      players.forEach((player) => {
        expect(results.includes(player)).toBeTruthy();
      });
    });
  });
});
