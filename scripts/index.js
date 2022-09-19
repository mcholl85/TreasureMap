/* eslint-disable no-undef */
import GameFactory from "./factories/game.js";

const handleChangeFile = (e) => {
  const preview = document.getElementById("output");
  const file = document.getElementById("input").files[0];

  if (file && !(file.type === "text/plain")) {
    preview.innerText = "fichier incorrect";
    e.target.value = "";
  } else {
    const reader = new FileReader();

    reader.onload = (evt) => {
      const inputFile = evt.target.result;

      try {
        const game = GameFactory.create(inputFile);
        game.play();
        preview.innerText = game.output();
      } catch (error) {
        preview.innerText = error;
      }
    };

    reader.readAsText(file);
  }
};

document.getElementById("input").addEventListener("change", handleChangeFile);
