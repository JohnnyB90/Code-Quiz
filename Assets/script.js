//Necessary Variables
var currentQuestionIndex = 0;
var questionEl = document.querySelector("#start-paragraph-container");

// List of questions for the quiz.
const questions = [
  "1. Inside which HTML element do we put the JavaScript?",
  "2. Where is the correct place to insert a JavaScript?",
  '3. What is the correct syntax for referring to an external script called "xxx.js"?',
  "4. The external JavaScript file must contain the <script> tag.",
  '5. How do you write "Hello World" in an alert box?',
];

// Anwsers
let answers1 = {
  a: "<js>",
  b: "<scripting",
  c: "script",
  d: "<javascript>",
};

let answers2 = {
  a: "The <body> section",
  b: "The <head> section",
  c: "Both the <head> section and the <body> section are correct",
};

let answers3 = {
  a: '<script name="xxx.js">',
  b: '<script src="xxx.js"> ',
  c: '<script href="xxx.js">',
};

let answers4 = {
  a: 'True',
  b: 'False',
};

let answers5 = {
  a: 'msgBox("Hello World");',
  b: 'alertBox("Hello World");',
  c: 'alert("Hello World");',
  d: 'msg("Hello World");'
};

// Start button event listener
const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
  const startContainer = document.getElementById("start-paragraph-container");
  startContainer.innerHTML = ""; // remove the start button and paragraph

  const questionContainer = document.createElement("div");
  const questionEl = document.createElement("p");

  // Set the initial question
  questionEl.textContent = questions[0];

  // Creates a next button
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";

  // Creates a questions container for display the next questions
  questionContainer.appendChild(questionEl);
  questionContainer.appendChild(nextButton);
  startContainer.appendChild(questionContainer);

  let currentQuestionIndex = 0;

  // The next button event listener to change the questions
  nextButton.addEventListener("click", function () {
    if (questions[currentQuestionIndex] === undefined) {
      questionEl.textContent = "Game Over!";
      nextButton.remove();
      const viewHighscoresButton = document.createElement("button");
      viewHighscoresButton.textContent = "View Highscores";
      questionContainer.appendChild(viewHighscoresButton);
    } else {
      questionEl.textContent = questions[currentQuestionIndex];
      currentQuestionIndex++;
    }

    // Add an if statement for correct questions add time and +1 the score, incorrect questions remove time and -1 the score. 
  });
});
