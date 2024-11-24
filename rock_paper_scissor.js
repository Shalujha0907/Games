console.log(" WELCOME 🤩😉");

const p1Name = prompt("Enter player1's name = ");
const p2Name = prompt("Enter player2's name = ");
let p1Score = 0;
let p2Score = 0;

console.log("Enter '1' for stone ✊\n");
console.log("Enter '2' for paper 🖐️\n");
console.log("Enter '3' for scissor ✂️\n");

const rock = "┏━━━━━━━━┓ \n┃   ✊   ┃ \n┗━━━━━━━━┛";
const paper = "┏━━━━━━━━┓ \n┃   🖐️    ┃ \n┗━━━━━━━━┛";
const scissor = "┏━━━━━━━━┓ \n┃   ✌️    ┃ \n┗━━━━━━━━┛";

function timeDelay() {
  for (let count = 0; count < 9; count++) {
    for (let timeDelay = 0; timeDelay < count * 10000000; timeDelay++) {
    }
  }
}

function animation(input) {
  console.clear();
  timeDelay();
  console.log(paper);
  timeDelay();
  console.clear();
  console.log(scissor);
  timeDelay();
  console.clear();
  console.log(rock);
  timeDelay();
  console.clear();
  console.log(scissor);
  timeDelay();
  console.clear();
  console.log(paper);
  timeDelay();
  console.clear();
  console.log(rock);
  timeDelay();
  console.clear();
  return input;
}

function getInput(combo) {
  switch (combo) {
    case "12":
      return p2Name;
    case "21":
      return p1Name;
    case "13":
      return p1Name;
    case "31":
      return p2Name;
    case "23":
      return p2Name;
    case "32":
      return p1Name;
    default:
      return "draw";
  }
}

function getEmoji(input) {
  switch (input) {
    case 1:
      return rock;
    case 2:
      return paper;
    case 3:
      return scissor;
  }
}

function selectWinner(p1Score, p2Socre) {
  if (p1Score === p2Socre) {
    return "OOOPSS!!! The Match is Draw 🫤🫤";
  }

  return p1Score > p2Socre ? p1Name + " WONN🥳😎 \n" : p2Name + " WON🥳😎\n";
}

function selectWinningRound(combo) {
  if (getInput(combo) === p1Name) {
    p1Score = p1Score + 1;
    console.log(p1Name + " cool!! You won this Round 😎\n");
  }

  if (getInput(combo) === p2Name) {
    p2Score = p2Score + 1;
    console.log(p2Name + " superbb!! You won this Round 😎\n ");
  }

  if (getInput(combo) === "draw") {
    console.log("this round is Draw 🫤 \n");
  }
}

function startGame() {
  for (let matchCount = 0; matchCount < 3; matchCount++) {
    prompt(p1Name + " Shake your Hand with " + p2Name + " and press enter");
    const input1 = Math.ceil(Math.random() * 3);
    console.log(p1Name + " you got this:\n" + animation(getEmoji(input1) + "\n"));

    prompt(p2Name + " Shake your Hand with " + p1Name + " and press enter");
    const input2 = Math.ceil(Math.random() * 3);
    console.log(p2Name + " you got this:\n" + animation(getEmoji(input2)) + "\n");

    const combo = '' + input1 + input2;
    selectWinningRound(combo);
  }

  return selectWinner(p1Score, p2Score);
}

console.log(startGame());
