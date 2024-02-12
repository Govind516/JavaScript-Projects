let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const drawGame = () => {
  console.log("Game is Draw.");
  msg.innerText = "Game is Draw";
  msg.style.backgroundColor = "#081b31";
  msg.style.color = "white";
};

const showResult = (userWin) => {
  if (userWin) {
    console.log("User Won");
    msg.innerText = "User Won";
    msg.style.backgroundColor = "green";
  } else {
    console.log("Computer Won");
    msg.innerText = "Computer Won";
    msg.style.backgroundColor = "red";
  }
};
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  idx = Math.random() * 3;
  return options[Math.floor(idx)];
};

const playGame = (userChoice) => {
  console.log("User Choice : ", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer Choice : ", compChoice);
  if (userChoice == compChoice) drawGame();
  else {
    let userWin = true;
    if (userChoice === "rock") userWin = compChoice === "paper" ? false : true;
    else if (userChoice === "paper")
      userWin = compChoice === "scissors" ? false : true;
    else userWin = compChoice === "rock" ? false : true;
    showResult(userWin);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
