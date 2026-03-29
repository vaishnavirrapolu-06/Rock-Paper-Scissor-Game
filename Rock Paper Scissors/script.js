let userScore = 0;
let aiScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const aiScorePara = document.querySelector("#ai-score");

const genAiChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw!!! Play again...";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, aiChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win!!! Your ${userChoice} beats ${aiChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    aiScore++;
    aiScorePara.innerText = aiScore;
    msg.innerText = `You lost... ${aiChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const aiChoice = genAiChoice();

  if (userChoice === aiChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = aiChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = aiChoice === "scissors" ? false : true;
    } else {
      userWin = aiChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, aiChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

 