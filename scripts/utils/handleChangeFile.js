import GameFactory from "../factories/game.js";
/**
 * Function to import file configuration
 * @function
 * @param {ChangeEvent} e Event
 * @return {void}
 */
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

export default handleChangeFile;
