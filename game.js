const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");
let userScore = 0;
let compScore = 0;

choices.forEach((choices) => {
  choices.addEventListener("click", () => {
    const userChoice = choices.getAttribute("id");
    playGame(userChoice);
  });
});
// code for game
const playGame = (userChoice) => {
  const compChoice = getCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = "false";
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "scissors") {
      userWin = compChoice === "rock" ? false : true;
    } else {
      userWin = compChoice === "rock" ? true : false;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

// to get computer choice
const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIndx = Math.floor(Math.random() * 3);
  return options[randIndx];
};

// draw game
const drawGame = () => {
  msg.innerText = "The game was draw.Play again!";
  msg.style.backgroundColor="orange";
};

// if the game is not draw then show the winner
const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you won! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="Green";
  } else {
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText = `computer won! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor="red";
  }
};
