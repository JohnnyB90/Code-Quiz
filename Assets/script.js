//Necessary Variables
var currentQuestionIndex = 0;
var questionEl = document.querySelector("#start-paragraph-container");

// List of questions for the quiz.
const questions = [
  "1. Inside which HTML element do we put the JavaScript?",
  "2. Where is the correct place to insert a JavaScript?",
  '3. What is the correct syntax for referring to an external script called "xxx.js"?',
  "4. The external JavaScript file must contain the <script> tag.",
  '5. How do you write "Hello World" in an alert box?'
];

// Anwsers
let answers1 = {
  a: "<js>",
  b: "<scripting",
  c: "script",
  d: "<javascript>"
};

let answers2 = {
  a: "The <body> section",
  b: "The <head> section",
  c: "Both the <head> section and the <body> section are correct",
};

let answers3 = {
  a: '<script name="xxx.js">',
  b: '<script src="xxx.js"> ',
  c: '<script href="xxx.js">'
};

let answers4 = {
  a: "True",
  b: "False"
};

let answers5 = {
  a: 'msgBox("Hello World");',
  b: 'alertBox("Hello World");',
  c: 'alert("Hello World");',
  d: 'msg("Hello World");'
};

// Start button event listener
const startButton = document.getElementById("start");
// add the "start-quiz-button" class to the "Start Quiz" button
startButton.classList.add("start-quiz-button");
startButton.addEventListener("click", function () {
  const startContainer = document.getElementById("start-paragraph-container");
  startContainer.innerHTML = ""; // remove the start button and paragraph

  const questionContainer = document.createElement("div");
  questionEl = document.createElement("p");

  // Set the initial question
  questionEl.textContent = questions[0];

  // Creates a next button
  const nextButton = document.createElement("button");
  nextButton.classList.add("quiz-button");
  nextButton.textContent = "Next";

  // Creates a questions container for display the next questions
  questionContainer.appendChild(questionEl);
  questionContainer.appendChild(nextButton);
  startContainer.appendChild(questionContainer);

  let currentQuestionIndex = 0;
 
  // Beginning of the timer function and variable declarations
  // set time to 2 minutes (120 seconds)
  let time = 120;

  // create timer element and display initial time
  const timerEl = document.getElementById("timer-display");
  timerEl.textContent = "Time: " + formatTime(time);

// decrease time every second using setInterval
const timerInterval = setInterval(function() {
  time--;
  timerEl.textContent = "Time: " + formatTime(time);
  if (time <= 0) {
    // clear the interval and end the quiz if time runs out
    clearInterval(timerInterval);
    questionEl.textContent = "Game Over!";
    nextButton.remove();
    const tryAgain = document.createElement("button");
    tryAgain.classList.add("quiz-button", "try-again-button");
    tryAgain.textContent = "Try Again";
    const viewHighscoresButton = document.createElement("button");
    viewHighscoresButton.classList.add(
      "quiz-button",
      "view-highscores-button"
    );
    viewHighscoresButton.textContent = "View Highscores";
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(tryAgain);
    buttonContainer.appendChild(viewHighscoresButton);
    questionContainer.appendChild(buttonContainer);
  }
}, 1000);

// function to format time in "00:00" format
function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return minutes + ":" + seconds;
}

  // The next button event listener to change the questions
  nextButton.addEventListener("click", function () {
    if (questions[currentQuestionIndex] === undefined) {
      questionEl.textContent = "Game Over!";
      nextButton.remove();
      clearInterval(timerInterval);
      // add the "quiz-button" and "try-again-button" classes
      const tryAgain = document.createElement("button");
      tryAgain.classList.add("quiz-button", "try-again-button");
      tryAgain.textContent = "Try Again";
      // Try again button will now take the user back to the start quiz 
      tryAgain.addEventListener("click", function() {
        location.reload();
      });
      // add the "quiz-button" and "view-highscores-button" classes
      const viewHighscoresButton = document.createElement("button");
      viewHighscoresButton.classList.add( "quiz-button", "view-highscores-button" );
      viewHighscoresButton.textContent = "View Highscores";
      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("button-container");
      buttonContainer.appendChild(tryAgain);
      buttonContainer.appendChild(viewHighscoresButton);
      questionContainer.appendChild(buttonContainer);
    // Display the questions as the next button is clicked
    } else {
      questionEl.textContent = questions[currentQuestionIndex];
      currentQuestionIndex++;
    }

    // Add an if statement for correct questions add time and +1 the score, incorrect questions remove time and -1 the score.
  });
});



