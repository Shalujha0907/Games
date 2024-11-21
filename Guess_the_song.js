const message = confirm("Readyyyy ❓ 🤩");
let alreadyGotHintNo = "";
console.log(" sooooo letsssss go 😁😁 \n ");
console.log("INSTRUCTIONS - Enter only intials of each word of that song \n");
console.log(" For EX: song = Dagabaaz ree then\n ANSWER -> (D R) or (d r)");

console.log("\n Ready for New Guess ?");

function getEmoji(selectHint) {
  switch (selectHint) {
    case 1:
      return "Hint: 🇮🇳🇮🇳🫡🫡";

    case 2:
      return "Hint: 👞 = 🇯🇵";

    case 3:
      return "Hint: 🩷 = 👶";

    case 4:
      return "Hint: 😳 YA 😌";

    case 5:
      return "Hint: 👉🏻 ⚫️ ⚫️ 👀";

    case 6:
      return "Hint: 7️⃣ 🌊 🏃🏻‍♂️";

    case 7:
      return "Hint: 📩 ➕ 🤜🏻";

    case 8:
      return "Hint: 🔟 🔟 🔟 🔟 🔟 ➕ ⭐️ ➕ 💃🏻 🕘 🕛 ";

    case 9:
      return "Hint: 👀 🏹 ";

    case 0:
      return "Hint:🤳🏻🤳🏻 ";
  }
}

function isSubstring(subString) {
  for (let index = 0; index < alreadyGotHintNo.length; index++) {
    if (subString === alreadyGotHintNo[index]) {
      return true;
    }
  }

  return false;
}

function getRandomizeHintNum() {
  const randomNum = Math.floor(Math.random() * 10);
  const doesNumberExist = isSubstring('' + randomNum);

  if (doesNumberExist) {
    return getRandomizeHintNum();
  }

  if (!doesNumberExist) {
    alreadyGotHintNo += randomNum;
    return randomNum;
  }
}

function startGuessing() {
  let finalScore = 0;

  for (let count = 0; count < 10; count++) {

    const randomNum = getRandomizeHintNum();

    console.log(getEmoji(randomNum));

    const guessTheSong = (prompt("enter the song 🎶🎵🎶 name \n ")).toLowerCase();

    switch (guessTheSong) {

      case "j g m":
        console.log("Ohhhhh Niceeeee guesssss 🤩\n");
        console.log("get ready for next guess 😁\n");

        finalScore = finalScore + 2;
        console.log("your current score is : " + finalScore, "\n");
        break;

      case "m j h j":
        console.log("correct guess 🤩\n");
        console.log("get ready for next guess 😁\n");

        finalScore = finalScore + 2;
        console.log("your current score is : " + finalScore, "\n");
        break;

      case "d t b h j":
        console.log("coollllll🤩\n");
        console.log("get ready for next guess 😁\n");

        finalScore = finalScore + 2;
        console.log("your current score is :" + finalScore, "\n");
        break;

      case "a k h y h b":
        console.log("Ohhhhh Niceeeee guesssss 🤩\n");
        console.log("get ready for next guess 😁\n");

        finalScore = finalScore + 2;
        console.log("your current score is :" + finalScore, "\n");
        break;

      case "y k k a":
        console.log(" superrbbbbb !!!! 🤩\n");
        console.log("get ready for next guess 😁 \n");

        finalScore = finalScore + 2;
        console.log("your current score is :" + finalScore, "\n");
        break;

      case "s s p":
        console.log("correct guess 🤩\n");
        console.log("get ready for next guess 😁\n");

        finalScore = finalScore + 2;
        console.log("your current score is :" + finalScore, "\n");
        break;

      case "c k v":
        console.log("coollllll🤩\n");
        console.log("get ready for next guess 😁\n");

        finalScore = finalScore + 2;
        console.log("your current score is :" + finalScore, "\n");
        break;

      case "c h k 9 s 12":
        console.log("nice guesssss 🤩\n");
        console.log("get ready for next guess 😁\n");

        finalScore = finalScore + 2;
        console.log("your current score is :" + finalScore, "\n");
        break;

      case "c n n s b r":
        console.log(" superrbbbbb !!!! 🤩\n");
        console.log("get ready for next guess 😁\n");

        finalScore = finalScore + 2;
        console.log("your current score is :" + finalScore, "\n");
        break;

      case "s l l r":
        console.log("fantastic !! coolllll 🤩\n");
        console.log("get ready for next guess 😁\n");

        finalScore = finalScore + 2;
        console.log("your current score is :" + finalScore, "\n");
        break;

      default:
        console.log("your guess is wrong \n");
        console.log(("get prepared for next hint 😁\n"));

        console.log("your score is ", finalScore, "\n");
    }
  }

  return finalScore;
}

if (message) {
  const score = startGuessing();

  if (score === 20) {
    console.log("Congratulations 🤩, youuuuuu WON \n");
  }

  if (score > 15 && score <= 18) {
    console.log(("Welllll Playyyyy 🤩 \n"));
  }

  if (score <= 15) {
    console.log(("Nice Play 🤩 \n"));
  }

  if (score <= 6) {
    console.log("Better Luck Next Time \n");
  }
} else {
  console.log(("Thank You"));
}
