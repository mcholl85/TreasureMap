import Card from "../models/card.js";

describe("Testing class Card", () => {
  it("Should throw an error if I try to get a case outside the map", () => {
    const card = new Card(4, 5);

    expect(() => {
      card.getCase(8, 9);
    }).toThrow("Case does not exist");
  });
});
