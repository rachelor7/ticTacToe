var board;
var playerO = "O";
var playerX = "X";
var currPlayer = playerO;
var gameOver = false;

window.onload = function () {
  setGame();
};

const setGame = () => {
  // populate tiles into board
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      // create div, add id & class
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");

      // apply style to create grid lines
      if (r <= 1) {
        tile.classList.add("horizontal-line");
      }
      if (c <= 1) {
        tile.classList.add("vertical-line");
      }

      // add tile to div named board
      document.getElementById("board").append(tile);
    }
  }
};
