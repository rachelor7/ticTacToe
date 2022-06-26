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

      // add event listener for when tile is clicked to call a function
      tile.addEventListener("click", setTile);

      // add tile to div named board
      document.getElementById("board").append(tile);
    }
  }
};

const setTile = (e) => {
  // if gameOver = T, then tile is unclickable
  if (gameOver) return;

  // get coordinates of each tile (this refers to tile clicked)
  const coords = e.target.id.split("-");
  const r = parseInt(coords[0]);
  const c = parseInt(coords[1]);

  // check to see if there is already something in that tile:
  if (board[r][c] !== "") return;

  // mark the board
  board[r][c] = currPlayer;

  // update html
  e.target.innerText = currPlayer;

  // update current player
  if (currPlayer === playerO) {
    currPlayer = playerX;
  } else if (currPlayer === playerX) {
    currPlayer = playerO;
  }

  // check winner
  checkWinner();
};

const checkWinner = () => {
  // horizontally
  for (let r = 0; r < 3; r++) {
    if (
      board[r][0] === board[r][1] &&
      board[r][1] === board[r][2] &&
      board[r][0] !== ""
    ) {
      // apply winner style to each of the tiles
      for (let c = 0; c < 3; c++) {
        const tile = document.getElementById(`${r.toString()}-${c.toString()}`);
        tile.classList.add("winner");
      }
      gameOver = true;
      return;
    }
  }

  // vertically
  for (let c = 0; c < 3; c++) {
    if (
      board[0][c] === board[1][c] &&
      board[1][c] === board[2][c] &&
      board[0][c] !== ""
    ) {
      // apply winner style to each of the tiles
      for (let i = 0; i < 3; i++) {
        const tile = document.getElementById(`${i.toString()}-${c.toString()}`);
        tile.classList.add("winner");
      }
      gameOver = true;
      return;
    }
  }

  // diagonally
  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] !== ""
  ) {
    for (let i = 0; i < 3; i++) {
      const tile = document.getElementById(`${i.toString()}-${i.toString()}`);
      tile.classList.add("winner");
    }
    gameOver = true;
    return;
  }

  // anti diagonal
  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2] !== ""
  ) {
    for (let r = 0; r < 3; r++) {
      c = 2 - r;
      const tile = document.getElementById(`${r.toString()}-${c.toString()}`);
      tile.classList.add("winner");
    }
  }
};

const setWinnerClass = (r, c) => {};
