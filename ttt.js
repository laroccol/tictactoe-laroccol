// Create a 2D array to keep track of our board state
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// Create a variable to keep track of whose turn it is
let playerTurn = "X";

// Loop through the board array to add event listeners to each cell
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    // We get the button element by its ID which is <row>-<column>
    let cell = document.getElementById(`${i}-${j}`);

    // Tell the button what to do when it is clicked
    cell.addEventListener("click", (event) => {
      // Set the value on our board array to the letter that corresponds to the player turn
      board[i][j] = playerTurn;
      // This will update the HTML to show an X or an O when the button is clicked
      cell.innerHTML = playerTurn;

      // Switch the player turn
      if (playerTurn === "X") {
        playerTurn = "O";
      } else {
        playerTurn = "X";
      }
    });
  }
}

const CheckForWinner = () => {
  // Check if any row or column is all equal
  for (let i = 0; i < 3; i++) {
    // If every value in the array is equal to the first one, then they are all equal
    if (board[i].every((v) => v === board[i][0])) {
      return true;
    }
    // ...
  }
  // ...
};

// ...
