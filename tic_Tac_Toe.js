const horizontalLine = " ━━━━━━╋━━━━━━╋━━━━━━";
let row1 = "    1  ┃   4  ┃   7  ";
let row2 = "    2  ┃   5  ┃   8  ";
let row3 = "    3  ┃   6  ┃   9  ";
let usedLocation = "";

function addString(row1, horizontalLine, row2, row3) {
  return row1 + '\n' + horizontalLine + '\n' + row2 +
   '\n' + horizontalLine + '\n' + row3 + '\n';
}

function replaceAt(string, char, position) {
  let replaceString = "";

  for (let index = 0; index < string.length; index++) {
    replaceString += index === position ? char : string[index];
  }

  return replaceString;
}

function updateGrid(location, replacedRow) {
  if (location === "1" || location === "4" || location === "7") {
    row1 = replacedRow;
  }

  if (location === "2" || location === "5" || location === "8") {
    row2 = replacedRow;
  }

  if (location === "3" || location === "6" || location === "9") {
    row3 = replacedRow;
  }

  return addString(row1, horizontalLine, row2, row3);
}

function placeSymbol(location, icon) {
  switch (location) {
    case "1":
      return replaceAt(row1, icon, 4);
    case "2":
      return replaceAt(row2, icon, 4);
    case "3":
      return replaceAt(row3, icon, 4);
    case "4":
      return replaceAt(row1, icon, 11);
    case "5":
      return replaceAt(row2, icon, 11);
    case "6":
      return replaceAt(row3, icon, 11);
    case "7":
      return replaceAt(row1, icon, 18);
    case "8":
      return replaceAt(row2, icon, 18);
    case "9":
      return replaceAt(row3, icon, 18);
  }
}

function isRowMatched(icon, pos1, pos2, pos3) {
  return row1[pos1] === icon && row1[pos2] === icon && row1[pos3] === icon;
}

function isColumnMatched(icon, pos) {
  return row1[pos] === icon && row2[pos] === icon && row3[pos] === icon;
}

function isDiagonalMatched(icon, pos1, pos2, pos3) {
  return row1[pos1] === icon && row2[pos2] === icon && row3[pos3] === icon;
}

function isRowHasSameSymbol(icon) {
  return isRowMatched(icon, 4, 11, 18)
    || isRowMatched(icon, 4, 11, 18)
    || isRowMatched(icon, 4, 11, 18);
}

function isColumnHasSameSymbol(icon) {
  return isColumnMatched(icon, 4)
    || isColumnMatched(icon, 11)
    || isColumnMatched(icon, 18);
}

function isDiagonalHasSameSymbol(icon) {
  return isDiagonalMatched(icon, 4, 11, 18)
    || isDiagonalMatched(icon, 18, 11, 4);
}

function didSomeOneWin(icon) {
  return isDiagonalHasSameSymbol(icon)
    || isColumnHasSameSymbol(icon)
    || isRowHasSameSymbol(icon);
}

function isCharPresent(char) { 
  for (let index = 0; index < usedLocation.length; index++) {
    if (char === usedLocation[index]) {
      return true;
    }
  }

  return false;
}

function getValidInput(currentPlayer) {
  const location = prompt(currentPlayer + " Enter your position:- ");
  const doesInputExist = isCharPresent(location);

  if (doesInputExist) {
    return getValidInput(currentPlayer);
  }

  usedLocation += location;
  return location;
}

function display(message) {
  console.log(message);
}

function startGame(p1Name, p2Name) {
  let turn = 1;
  let isP1Turn = true;

  while (turn <= 9) {
    const icon = isP1Turn ? "O" : "⛌";
    const currentPlayer = isP1Turn ? p1Name : p2Name;
    const location = getValidInput(currentPlayer);
    console.clear();
    const updatedRow = placeSymbol(location, icon);
    display(updateGrid(location, updatedRow));

    if (didSomeOneWin(icon)) {
      return currentPlayer + " is Winner 🤩🤩";
    }

    turn++;
    isP1Turn = !isP1Turn;
  }

  return "The Match is Draw 😕😕";
}

function startPlay() {
  display("\nsooooo letsssss go 😁😁 \n");
  const p1Name = prompt("Enter first player name: "); 
  const p2Name = prompt("Enter second player name: ");
  display(addString(row1, horizontalLine, row2, row3));
  display(startGame(p1Name, p2Name));
}

startPlay();
