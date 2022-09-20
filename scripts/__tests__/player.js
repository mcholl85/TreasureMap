import Player from "../models/player.js";

describe("Testing function nextCoordinates :", () => {
  describe("when the player faces south", () => {
    const player = new Player("Lara", 1, 1, "S", "A");

    it("And that it must move forward", () => {
      expect(player.nextCoordinates).toStrictEqual({ x: 1, y: 2 });
    });
    it("And that it must turn left", () => {
      player.move = ["G"];
      expect(player.nextCoordinates).toStrictEqual({ x: 2, y: 1 });
    });
    it("And that it must turn right", () => {
      player.move = ["D"];
      expect(player.nextCoordinates).toStrictEqual({ x: 0, y: 1 });
    });
  });
  describe("when the player faces north", () => {
    const player = new Player("Lara", 1, 1, "N", "A");
    it("And that it must move forward", () => {
      expect(player.nextCoordinates).toStrictEqual({ x: 1, y: 0 });
    });
    it("And that it must turn left", () => {
      player.move = ["G"];
      expect(player.nextCoordinates).toStrictEqual({ x: 0, y: 1 });
    });
    it("And that it must turn right", () => {
      player.move = ["D"];
      expect(player.nextCoordinates).toStrictEqual({ x: 2, y: 1 });
    });
  });
  describe("when the player faces east", () => {
    const player = new Player("Lara", 1, 1, "E", "A");
    it("And that it must move forward", () => {
      expect(player.nextCoordinates).toStrictEqual({ x: 2, y: 1 });
    });
    it("And that it must turn left", () => {
      player.move = ["G"];
      expect(player.nextCoordinates).toStrictEqual({ x: 1, y: 0 });
    });
    it("And that it must turn right", () => {
      player.move = ["D"];
      expect(player.nextCoordinates).toStrictEqual({ x: 1, y: 2 });
    });
  });
  describe("when the player faces west", () => {
    const player = new Player("Lara", 1, 1, "O", "A");
    it("And that it must move forward", () => {
      expect(player.nextCoordinates).toStrictEqual({ x: 0, y: 1 });
    });
    it("And that it must turn left", () => {
      player.move = ["G"];
      expect(player.nextCoordinates).toStrictEqual({ x: 1, y: 2 });
    });
    it("And that it must turn right", () => {
      player.move = ["D"];
      expect(player.nextCoordinates).toStrictEqual({ x: 1, y: 0 });
    });
  });
  describe("When the orientation is invalid value", () => {
    it("Should throw an error", () => {
      const player = new Player("Lara", 1, 1, "L", "A");
      expect(() => player.nextCoordinates).toThrow("Wrong Orientation");
    });
  });
});

describe("Testing function changeOrientation", () => {
  describe("when the player faces south", () => {
    const player = new Player("Lara", 1, 1, "S", "A");
    it("And it must move forward", () => {
      player.changeOrientation();
      expect(player.orientation).toBe("S");
    });
    it("And it must turn left", () => {
      player.move = ["G"];
      player.orientation = "S";
      player.changeOrientation();
      expect(player.orientation).toBe("E");
    });
    it("And it must turn right", () => {
      player.move = ["D"];
      player.orientation = "S";
      player.changeOrientation();
      expect(player.orientation).toBe("O");
    });
  });
  describe("when the player faces north", () => {
    const player = new Player("Lara", 1, 1, "N", "A");
    it("And it must move forward", () => {
      player.changeOrientation();
      expect(player.orientation).toBe("N");
    });
    it("And it must turn left", () => {
      player.move = ["G"];
      player.orientation = "N";
      player.changeOrientation();
      expect(player.orientation).toBe("O");
    });
    it("And it must turn right", () => {
      player.move = ["D"];
      player.orientation = "N";
      player.changeOrientation();
      expect(player.orientation).toBe("E");
    });
  });
  describe("when the player faces east", () => {
    const player = new Player("Lara", 1, 1, "E", "A");
    it("And it must move forward", () => {
      player.changeOrientation();
      expect(player.orientation).toBe("E");
    });
    it("And it must turn left", () => {
      player.move = ["G"];
      player.orientation = "E";
      player.changeOrientation();
      expect(player.orientation).toBe("N");
    });
    it("And it must turn right", () => {
      player.move = ["D"];
      player.orientation = "E";
      player.changeOrientation();
      expect(player.orientation).toBe("S");
    });
  });
  describe("when the player faces west", () => {
    const player = new Player("Lara", 1, 1, "O", "A");
    it("And it must move forward", () => {
      player.changeOrientation();
      expect(player.orientation).toBe("O");
    });
    it("And it must turn left", () => {
      player.move = ["G"];
      player.orientation = "O";
      player.changeOrientation();
      expect(player.orientation).toBe("S");
    });
    it("And it must turn right", () => {
      player.move = ["D"];
      player.orientation = "O";
      player.changeOrientation();
      expect(player.orientation).toBe("N");
    });
  });
  describe("When the orientation is invalid value", () => {
    it("Should throw an error", () => {
      const player = new Player("Lara", 1, 1, "L", "A");
      expect(() => player.changeOrientation()).toThrow("Wrong orientation");
    });
  });
});
