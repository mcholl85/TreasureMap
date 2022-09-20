import {
  cardParamsAreValid,
  mountainParamsAreValid,
  treasureParamsAreValid,
  playerParamsAreValid,
} from "../utils/validation";

describe("Testing validation params :", () => {
  describe("Card :", () => {
    it("Should return true when I use valid params", () => {
      const validParams = ["2", "3"];
      expect(cardParamsAreValid(validParams)).toBeTruthy();
    });
    it("Should return false when I use a negative params", () => {
      const invalidCardParams = ["-1", "3"];
      expect(cardParamsAreValid(invalidCardParams)).toBeFalsy();
    });
    it("Should return false when I have 0 in params", () => {
      const cardParamsWithZero = ["0", "1"];
      expect(cardParamsAreValid(cardParamsWithZero)).toBeFalsy();
    });
    it("Should return false when a params is in excess", () => {
      const cardExcessParams = ["1", "2", "3"];
      expect(cardParamsAreValid(cardExcessParams)).toBeFalsy();
    });
    it("Should return false when I use a non string params", () => {
      const nonStringParams = [true, "2"];
      expect(cardParamsAreValid(nonStringParams)).toBeFalsy();
    });
    it("Should return false when I use a float number", () => {
      const floatParams = ["0.1", "2"];
      expect(cardParamsAreValid(floatParams)).toBeFalsy();
    });
  });
  describe("Mountain :", () => {
    it("Should return true when I use valid params", () => {
      const validParams = ["0", "3"];
      expect(mountainParamsAreValid(validParams)).toBeTruthy();
    });
    it("Should return false when I use a negative params", () => {
      const negativeParams = ["-1", "3"];
      expect(mountainParamsAreValid(negativeParams)).toBeFalsy();
    });
    it("Should return false when a params is in excess", () => {
      const mountainExcessParams = ["1", "2", "3"];
      expect(mountainParamsAreValid(mountainExcessParams)).toBeFalsy();
    });
    it("Should return false when I use a non string params", () => {
      const nonStringParams = [true, "2"];
      expect(cardParamsAreValid(nonStringParams)).toBeFalsy();
    });
    it("Should return false when I use a float number", () => {
      const floatParams = ["0.1", "2"];
      expect(mountainParamsAreValid(floatParams)).toBeFalsy();
    });
  });
  describe("Treasure :", () => {
    it("Should return true when I use valid params", () => {
      const validParams = ["0", "3", "1"];
      expect(treasureParamsAreValid(validParams)).toBeTruthy();
    });
    it("Should return false when a params is in excess", () => {
      const mountainExcessParams = ["1", "2", "3", "4"];
      expect(treasureParamsAreValid(mountainExcessParams)).toBeFalsy();
    });
    it("Should return false when I use a negative params", () => {
      const negativeParams = ["-1", "3", "2"];
      expect(treasureParamsAreValid(negativeParams)).toBeFalsy();
    });
    it("Should return false when I use a non string params", () => {
      const nonStringParams = [true, "2", "3"];
      expect(treasureParamsAreValid(nonStringParams)).toBeFalsy();
    });
    it("Should return false when I put 0 treasure", () => {
      const nonStringParams = ["1", "3", "0"];
      expect(treasureParamsAreValid(nonStringParams)).toBeFalsy();
    });
    it("Should return false when I use a float number", () => {
      const floatParams = ["0.1", "2", "2"];
      expect(treasureParamsAreValid(floatParams)).toBeFalsy();
    });
  });
  describe("Player :", () => {
    it("Should return true when I use valid params", () => {
      const validParams = ["Lara", "0", "1", "S", "AAAA"];
      expect(playerParamsAreValid(validParams)).toBeTruthy();
    });
    it("Should return false when a params is in excess", () => {
      const mountainExcessParams = ["Lara", "0", "1", "S", "AAAA", "3"];
      expect(playerParamsAreValid(mountainExcessParams)).toBeFalsy();
    });
    it("Should return false when I use a negative params", () => {
      const negativeParams = ["Lara", "0", "-1", "S", "AAAA"];
      expect(playerParamsAreValid(negativeParams)).toBeFalsy();
    });
    it("Should return false when I use a invalid orientation", () => {
      const invalidOrientationParams = ["Lara", "0", "1", "A", "AAAA"];
      expect(playerParamsAreValid(invalidOrientationParams)).toBeFalsy();
    });
    it("Should return false when I use a invalid orientation", () => {
      const invalidMoveParams = ["Lara", "0", "1", "S", true];
      expect(playerParamsAreValid(invalidMoveParams)).toBeFalsy();
    });
  });
});
