var currentQuestionIndex = 0;
var questionEl = document.querySelector("#start-paragraph-container");
var nextButton = document.createElement("button");
nextButton.textContent = "Next";
nextButton.className = "next-button";
var score = 0;

const questions = [
  {
    question: "1. Inside which HTML element do we put the JavaScript?",
    anwsers: {
      a: "<js>",
      b: "<scripting>",
      c: "<script>",
      d: "<javascript>",
    },
    correctAnwser: "c",
  },
  {
    question: "2. Where is the correct place to insert a JavaScript?",
    anwsers: {
      a: "Both the <head> section and the <body> section",
      b: "The <head> section",
      c: "The <body> section",
    },
    correctAnwser: "a",
  },
  {
    question:
      '3. What is the correct syntax for referring to an external script called "xxx.js"?',
    anwsers: {
      a: "<script src='xxx.js'>",
      b: "<script href='xxx.js'>",
      c: "<script name='xxx.js'>",
    },
    correctAnwser: "c",
  },
  {
    question: "4. The external JavaScript file must contain the <script> tag.",
    anwsers: {
      a: "True",
      b: "False",
    },
    correctAnwser: "b",
  },
  {
    question: '5. How do you write "Hello World" in an alert box?',
    anwsers: {
      a: 'msgBox("Hello World");',
      b: 'alertBox("Hello World");',
      c: 'alert("Hello World");',
      d: 'msg("Hello World");',
    },
    correctAnwser: "c",
  },
];

const startButton = document.getElementById("start");
if (startButton) {
  startButton.addEventListener("click", function () {
  const startContainer = document.getElementById("start-paragraph-container");
  // remove the start button and paragraph
  startContainer.innerHTML = "";

  let currentQuestionIndex = 0;
  const totalQuestions = questions.length;

  function showQuestion(index) {
    const questionObj = questions[index];
    const question = document.createElement("h2");
    question.textContent = questionObj.question;
    const choices = document.createElement("ul");
    for (const [key, value] of Object.entries(questionObj.anwsers)) {
      const choice = document.createElement("li");
      choice.className = "anwsersList";
      choice.style.listStyleType = "none";
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("name", questionObj.question);
      input.setAttribute("value", key);
      input.className = "radios";
      label.appendChild(input);
      label.appendChild(document.createTextNode(value));
      choice.appendChild(label);
      label.className = "answer-label";
      choices.appendChild(choice);
    }


    const container = document.createElement("div");
    container.appendChild(question);
    container.appendChild(choices);
    questionEl.innerHTML = "";
    questionEl.appendChild(container);
    
    // Create the next button
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.className = "next-button";
    container.appendChild(nextButton);
  
 nextButton.addEventListener("click", function () {
// Select the container that includes all the radio button inputs
const currentContainer = questionEl.querySelector("ul");

// Find the selected input element within the container
const selectedInput = currentContainer.querySelector("input:checked");

// Get the value of the selected input (i.e., the answer key)
const selectedAnswer = selectedInput ? selectedInput.value : null;
  console.log(selectedAnswer)

  if (selectedAnswer === questions[currentQuestionIndex].correctAnwser) {
    score++;
    console.log(score);
  }
  
  if (currentQuestionIndex >= totalQuestions - 1) {
    // Display final message and try again button...
    questionEl.textContent = "You have answered all questions";
    const scoreMessage = document.createElement("p");
    scoreMessage.textContent = "Your score is " + score + " out of " + totalQuestions;
    questionEl.appendChild(scoreMessage);
    const tryAgain = document.createElement("button");
    tryAgain.classList.add("quiz-button", "try-again-button");
    tryAgain.textContent = "Try Again";
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(tryAgain);
    questionEl.appendChild(buttonContainer);
    const addHighscore = document.createElement("button");
    addHighscore.classList.add("quiz-button", "view-highscores-button");
    addHighscore.textContent = "Add Highscore";
    buttonContainer.appendChild(addHighscore);
    tryAgain.addEventListener("click", function () {
      location.reload();
    });
  } else {
    currentQuestionIndex++;
    // Show the next question...
    showQuestion(currentQuestionIndex);
  }
});
  }
  showQuestion(currentQuestionIndex);

  // Variable for timer seconds starting out
  let time = 15;
// Grabbing the timer element from the DOM
  const timerEl = document.getElementById("timer-display");
  timerEl.textContent = "Time: " + formatTime(time);
// Function to begin the time count using the seconds at bottom of function
  const timerInterval = setInterval(function () {
    time--;
    timerEl.textContent = "Time: " + formatTime(time);
    // Included if time runs out statement, offer the player to try again, or to add their highscore.
    if (time <= 0) {
      clearInterval(timerInterval);
      questionEl.textContent = "Game Over!";
      nextButton.remove();
      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("button-container");
      questionEl.appendChild(buttonContainer);
      // Create add highscore button and append it to the DOM
      const addHighscore = document.createElement("button");
      addHighscore.classList.add("quiz-button", "view-highscores-button");
      addHighscore.textContent = "Add Highscore";
      buttonContainer.appendChild(addHighscore);
      // Create the try again button and append it to the DOM
      const tryAgain = document.createElement("button");
      tryAgain.classList.add("quiz-button", "try-again-button");
      tryAgain.textContent = "Try Again";
      buttonContainer.appendChild(tryAgain);
      tryAgain.addEventListener("click", function () {
        location.reload();
      });
    }
  }, 1000);
  // Format the time to be display in minutes and seconds.
  function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  }
});
}