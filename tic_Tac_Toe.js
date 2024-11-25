const player1Name = prompt("Enter player1's name: ");
const player2Name = prompt("Enter player2's name: ");
const header = "    A     B      C   ";
const horizontalLine = " ━━━━━━╋━━━━━━╋━━━━━━";
let row1 = "1      ┃      ┃      ";
let row2 = "2      ┃      ┃      ";
let row3 = "3      ┃      ┃      ";

function addString(f1, f2, f3, f4, f5) {
  return f1 + '\n' + f2 + '\n' + f3 + '\n' + f4 + '\n' + f3 + '\n' + f5 + '\n';
}

function replaceAt(string, char, position) {
  let replaceString = "";

  for (let index = 0; index < string.length; index++) {
    replaceString += index === position ? char : string[index];
  }

  return replaceString;
}

function updatedGrid(location, replacedRow) {
  if (location === "a1" || location === "b1" || location === "c1") {
    row1 = replacedRow;
  }

  if (location === "a2" || location === "b2" || location === "c2") {
    row2 = replacedRow;
  }

  if (location === "a3" || location === "b3" || location === "c3") {
    row3 = replacedRow;
  }

  return addString(header, row1, horizontalLine, row2, row3);
}

function placeSymbol(location, icon) {
  switch (location) {
    case "a1":
      return replaceAt(row1, icon, 4);
    case "a2":
      return replaceAt(row2, icon, 4);
    case "a3":
      return replaceAt(row3, icon, 4);
    case "b1":
      return replaceAt(row1, icon, 10);
    case "b2":
      return replaceAt(row2, icon, 10);
    case "b3":
      return replaceAt(row3, icon, 10);
    case "c1":
      return replaceAt(row1, icon, 17);
    case "c2":
      return replaceAt(row2, icon, 17);
    case "c3":
      return replaceAt(row3, icon, 17);
  }
}

function isRowMatched(row, getSymbol) {
  if (row[4] === getSymbol && row[10] === getSymbol && row[17] === getSymbol) {
    return true;
  }

  return false;
}

function isColumnMatched(index, getSymbol) {
  if (row1[index] === getSymbol && row2[index] === getSymbol && row3[index] === getSymbol) {
    return true;
  }

  return false;
}

function isDiagonalMatched(index1, index2, index3, getSymbol) {
  if (row1[index1] === getSymbol && row2[index2] === getSymbol && row3[index3] === getSymbol) {
    return true;
  }

  return false;
}

function isRowHasSameSymbol(symbol) {
  return isRowMatched(row1, symbol) 
         || isRowMatched(row2, symbol) 
         || isRowMatched(row3, symbol);
}

function isColumnHasSameSymbol(symbol) {
  return isColumnMatched(4, symbol) 
         || isColumnMatched(10, symbol)
         || isColumnMatched(17, symbol);
}

function isDiagonalHasSameSymbol(symbol) {
  return isDiagonalMatched(4, 10, 17, symbol)
         || isDiagonalMatched(17, 10, 4, symbol);
}

function whoWon(symbol) {
  return isDiagonalHasSameSymbol(symbol)
         || isColumnHasSameSymbol(symbol)
         || isRowHasSameSymbol(symbol);
}

function userInput(selectPlayer) {
  if (selectPlayer === "1") {
    return prompt(player1Name + " enter your position:- ");
  }

  return prompt(player2Name + " enter your position:- ");
}

function gameLoop() {
  console.log("\nsooooo letsssss go 😁😁 \n");
  console.log(addString(header, row1, horizontalLine, row2, row3));
  let turn = 1;
  let isP1Turn = true;
  let getSymbol = "";

  while (turn <= 9) {
    const currentPlayerLocation = isP1Turn ? userInput("1") : userInput();
    getSymbol = isP1Turn ? "O" : "X";
    console.clear();
    const updatedRow = placeSymbol(currentPlayerLocation, getSymbol);
    console.log(updatedGrid(currentPlayerLocation, updatedRow));

    if (whoWon(getSymbol)) {
      console.log(player1Name + " is Winner 🤩🤩");
      break;
    }

    turn++;
    isP1Turn = !isP1Turn;
  }

  if (!whoWon(getSymbol)) {
    console.log("The Match is Draw 😕😕");
  }
}

gameLoop();
