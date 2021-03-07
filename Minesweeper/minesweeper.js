document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener("click", checkForWin)
document.addEventListener("contextmenu", checkForWin);


// Define your `board` object here!
// Create variable board with cells as an empty array within it
let board = { cells: []};

function makeBoard() {
  //for loop over first rows and then cells up to length of 6 
  for (let r = 0; r < 6; r++){
    //internal for loop
    for (let c = 0; c < 6; c++){
      //  and then add elements to each of the array
      board.cells.push({
        row: r,
        col: c,
        //assigns value with 0.7 probability of being true
        isMine: Math.random() >= 0.7,
        isMarked: false,
        hidden: true,
        isMarked: false,
        surroundingMines: 0

        
      })
    }
  }
}
//call function makeBoard to build the board
 makeBoard();   






  
  

function startGame () {
   
  // Don't remove this function call: it makes the game work!
  lib.initBoard()

  for (let i = 0; i <board.cells.length ; i++) {
    let cell = board.cells[i]

    cell.surroundingMines = countSurroundingMines(cell)
  }
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  var didWin = true;

  for (let i = 0; i <board.cells.length ; i++) {
    let cell = board.cells[i]

  if (cells.hidden && !cells.isMine) {
    didWin = false;

    if (cells.isMine && !cells.isMarked) {
      didWin = false;
    }
  }
  }
  if(didWin){
    lib.displayMessage('You win!')
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {

var surrounding = lib.getSurroundingCells(cell.row, cell.col)
var count = 0

for (var i = 0; i < surrounding.length; i++) {
  var surroundingCell = surrounding[i]

  if (surroundingCell.isMine) {
    count++
  }
}
  return count
}

