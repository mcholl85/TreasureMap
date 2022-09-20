import GameFactory from "../factories/game.js";
import Game from "../models/game.js";
import { validInput, invalidFirstParams } from "../__mocks__/input.js";

jest.mock("../models/game.js");

describe("Testing factory game: ", () => {
  it("Should create a game with valid input data", () => {
    const game = GameFactory.create(validInput);
    const addCardSpy = jest.spyOn(game, "addCard");
    const addTreasureSpy = jest.spyOn(game, "addTreasures");
    const addPlayerSpy = jest.spyOn(game, "addPlayer");

    expect(Game).toBeCalled();
    expect(addCardSpy).toBeCalled();
    expect(addTreasureSpy).toBeCalled();
    expect(addPlayerSpy).toBeCalled();
    expect(typeof game).toBe("object");
  });
  it("Should throw a error when I try to create a game with invalid data", () => {
    expect(() => {
      GameFactory.create(invalidFirstParams);
    }).toThrow("Wrong first letters");
  });
});
