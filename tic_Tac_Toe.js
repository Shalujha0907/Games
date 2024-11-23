const message = confirm("Readyyyy ❓ 🤩");
const player1Name = prompt("Enter player1's name = ");
const player2Name = prompt("Enter player2's name = ");

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

function updatedFrame(location, replacedRow) {
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

function selectInput(location, icon) {
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

function userInput(selectPlayer) {
  if (selectPlayer === "1") {
    return prompt(player1Name + " enter your Input:- ").toLowerCase();
  }

  return prompt(player2Name + " enter your Input:- ").toLowerCase();
}

function isRowMatched(row) {
  if (row[4] === "X" && row[10] === "X" && row[17] === "X") {
    return true;
  }

  if (row[4] === "O" && row[10] === "O" && row[17] === "O") {
    return true;
  }

  return false;
}

function isColumnMatched(index) {
  if (row1[index] === "X" && row2[index] === "X" && row3[index] === "X") {
    return true;
  }

  if (row1[index] === "O" && row2[index] === "O" && row3[index] === "O") {
    return true;
  }

  return false;
}

function isDiagonalMatched(index1, index2, index3) {
  if (row1[index1] === "X" && row2[index2] === "X" && row3[index3] === "X") {
    return true;
  }

  if (row1[index1] === "O" && row2[index2] === "O" && row3[index3] === "O") {
    return true;
  }

  return false;
}

function isRowHasX() {
  return isRowMatched(row1) || isRowMatched(row2) || isRowMatched(row3);
}

function isRowHasO() {
  return isRowMatched(row1) || isRowMatched(row2) || isRowMatched(row3);
}

function isColumnHasO() {
  return isColumnMatched(4) || isColumnMatched(10) || isColumnMatched(17);
}

function isColumnHasX() {
  return isColumnMatched(4) || isColumnMatched(10) || isColumnMatched(17);
}

function isDiagonalHasX() {
  return isDiagonalMatched(4, 10, 17) || isDiagonalMatched(17, 10, 4);
}

function isDiagonalHasO() {
  return isDiagonalMatched(4, 10, 17) || isDiagonalMatched(17, 10, 4);
}

function isPlayer1Winner() {
  if (isDiagonalHasO() || isColumnHasO() || isRowHasO()) {
    return true;
  }

  return false;
}
function isPlayer2Winner() {
  if (isDiagonalHasX() || isColumnHasX() || isRowHasX()) {
    return true;
  }

  return false;
}

function gameLoop() {
  console.log("\nsooooo letsssss go 😁😁 \n");
  console.log(addString(header, row1, horizontalLine, row2, row3));

  for (let turn = 1; turn < 10; turn++) {
    if (turn % 2 !== 0) {
      const p1Location = userInput("1");
      console.clear();
      console.log(updatedFrame(p1Location, selectInput(p1Location, 'O')));
    }

    if (isPlayer1Winner()) {
      console.log(player1Name + " is Winnerrr 🤩🤩");
      break;
    }

    if (turn % 2 === 0) {
      const p2Location = userInput();
      console.clear();
      console.log(updatedFrame(p2Location, selectInput(p2Location, 'X')));
    }

    if (isPlayer2Winner()) {
      console.log(player2Name + " is Winnerrr 🤩🤩");
      break;
    }
  }

  if (!(isPlayer1Winner() && isPlayer2Winner())) {
    console.log("OOPSS The Match is Draw 😕😕");
  }
}

gameLoop();
