const questionList = [
  {
    question: "Which is the planet nearest to the Sun?  ",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: true },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "Which is the planet farthest from the Sun?  ",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false },
      { text: "Neptune", correct: true },
      { text: "Uranus", correct: false },
    ],
  },
  {
    question: "Name the hottest planet in our solar system.",
    answers: [
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false },
      { text: "Venus", correct: true },
    ],
  },
  {
    question: "Can you name the largest planet in our solar system?  ",
    answers: [
      { text: "Jupiter", correct: true },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "Can you name the smallest planet in our solar system?  ",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Mars", correct: false },
      { text: "Uranus", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "Which is the coldest planet in our solar system?",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Mars", correct: false },
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: true },
    ],
  },
];

const questionText = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetOptions();
  const currQuestion = questionList[currentQuestionIndex];
  const quesNumber = currentQuestionIndex + 1;
  questionText.innerHTML = quesNumber + ". " + currQuestion.question;

  currQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    options.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", () => {
      const isCorrect = button.dataset.correct === "true";
      if (isCorrect) {
        button.classList.add("correct");
        score++;
      } else {
        button.classList.add("incorrect");
      }

      Array.from(options.children).forEach((button) => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
        }
        button.disabled = true;
      });
      nextBtn.style.display = "block";
    });
  });
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questionList.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    displayScore();
  }
});

function resetOptions() {
  nextBtn.style.display = "none";
  while (options.firstChild) {
    options.removeChild(options.firstChild);
  }
}

function displayScore() {
  resetOptions();
  questionText.innerHTML = `You Scored ${score} out of  ${questionList.length}`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";

  nextBtn.addEventListener("click", () => {
    startQuiz();
  });
}
startQuiz();
