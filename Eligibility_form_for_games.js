const name = prompt('enter your name');
const age = +(prompt('enter your age'));
const gender = prompt('enter the gender 💁‍♀️/💁');

const firstTimePlaying = confirm(" are you playing first time 🤔! ");
const noOfTimesPlayed = +(prompt("enter number of times you played 😛 ❓"));

const ageUnder5Years = confirm(" are you under 5 ❓😁");

if (firstTimePlaying) {
  console.log("🤩 then your first game is free 🆓 🤩");
} else {
  console.log("try this game, it's very interested ");
}

if (underTenYears) {
  console.log('your next game is free 🤩🤩');
} else {
  console.log(" pay for the next game 😁😁");
}

if (ageUnder5Years) {
  console.log(" It's good news 😁 \n for you price of first game is got halfed"); 
} else {
  console.log('oops !  BAD LUCK 🥲 \n try next time');
}
