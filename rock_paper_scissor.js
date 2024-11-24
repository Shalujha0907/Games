console.log(" WELCOME 🤩😉");

const p1Name = prompt("Enter player1's name = ");
const p2Name = prompt("Enter player2's name = ");
let p1Score = 0;
let p2Score = 0;

console.log("Enter '1' for stone 🪨\n");
console.log("Enter '2' for paper 📜\n");
console.log("Enter '3' for scissor ✂️\n");

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
      return "🪨";
    case 2:
      return "📜";
    case 3:
      return "✂️";
  }
}

function selectWinner(p1Score, p2Socre) {
  if (p1Score === p2Socre) {
    return " The Match is Draw 🫤🫤";
  }

  return p1Score > p2Socre ? p1Name + " WONN🥳😎" : p2Name + " WON🥳😎";
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
    console.log("this round is Draw 🫤");
  }
}

function startGame() {
  for (let matchCount = 0; matchCount < 3; matchCount++) {
    prompt(p1Name + " Shake your Hand with " + p2Name + " and press enter");
    prompt(p2Name + " Shake your Hand with " + p1Name + " and press enter");

    const input1 = Math.ceil(Math.random() * 3);
    const input2 = Math.ceil(Math.random() * 3);

    console.log(p1Name + " you got this: " + getEmoji(input1) + "\n");
    console.log(p2Name + " you got this: " + getEmoji(input2) + "\n");

    const combo = '' + input1 + input2;
    selectWinningRound(combo);
  }

  return selectWinner(p1Score, p2Score);
}

console.log(startGame());
