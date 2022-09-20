import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import handleChangeFile from "../utils/handleChangeFile.js";
import { validInput } from "../__mocks__/input.js";

describe("Given I am on the homepage,", () => {
  beforeEach(() => {
    document.body.innerHTML = `<h1>Carte au trésor</h1>
    <div>
      <form>
        <input id="input" data-testid="input" type="file" />
      </form>
      <div id="output" data-testid="output"></div>
    </div>`;
    document
      .getElementById("input")
      .addEventListener("change", handleChangeFile);
  });

  describe("When I load a incorrect file", () => {
    it("Should render an error message and remove file", async () => {
      const file = new File(["file"], "invalidFile.png", { type: "image/png" });
      const input = screen.getByTestId("input");

      await waitFor(() => userEvent.upload(input, file));
      expect(screen.getByTestId("output").innerText).toBe("fichier incorrect");
      expect(input.file).toBeUndefined();
    });
  });
  describe("When I load a valid file", () => {
    it("Should render the result", async () => {
      const blob = new Blob([validInput]);
      const file = new File([blob], "file.text", { type: "text/plain" });
      const input = screen.getByTestId("input");

      userEvent.upload(input, file);

      await waitFor(() => {
        const result = screen.getByTestId("output").innerText;
        expect(result.includes("C - 3 - 4")).toBeTruthy();
      });
    });
  });
});
