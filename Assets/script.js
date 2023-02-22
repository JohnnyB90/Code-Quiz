var currentQuestionIndex = 0;
var questionEl = document.querySelector("#start-paragraph-container");
var nextButton = document.createElement("button");
nextButton.textContent = "Next";
nextButton.className = "next-button";
var score = 0

const questions = [
  {
    question: "1. Inside which HTML element do we put the JavaScript?",
    anwsers: {
      a: "<js>",
      b: "<scripting>",
      c: "<script>",
      d: "<javascript>",
    },
    correctAnwser: "C",
  },
  {
    question: "2. Where is the correct place to insert a JavaScript?",
    anwsers: {
      a: "Both the <head> section and the <body> section",
      b: "The <head> section",
      c: "The <body> section",
    },
    correctAnwser: "A",
  },
  {
    question:
      '3. What is the correct syntax for referring to an external script called "xxx.js"?',
    anwsers: {
      a: "<script src='xxx.js'>",
      b: "<script href='xxx.js'>",
      c: "<script name='xxx.js'>",
    },
    correctAnwser: "C",
  },
  {
    question: "4. The external JavaScript file must contain the <script> tag.",
    anwsers: {
      a: "True",
      b: "False",
    },
    correctAnwser: "B",
  },
  {
    question: '5. How do you write "Hello World" in an alert box?',
    anwsers: {
      a: 'msgBox("Hello World");',
      b: 'alertBox("Hello World");',
      c: 'alert("Hello World");',
      d: 'msg("Hello World");',
    },
    correctAnwser: "C",
  },
];

const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
  const startContainer = document.getElementById("start-paragraph-container");
  startContainer.innerHTML = ""; // remove the start button and paragraph

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
    questionEl.appendChild(container);

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.className = "next-button";
    container.appendChild(nextButton);

    nextButton.addEventListener("click", function () {
      removeCurrentQuestion();
      currentQuestionIndex++;
      // const currentContainer = questionEl.querySelector("input");
      // const selectedAnswer = currentContainer.querySelector
      // ("input:checked");
      // if (currentQuestionIndex >= totalQuestions) {
      //   questionEl.textContent = "You have answered all questions";
      //   const tryAgain = document.createElement("button");
      //   tryAgain.classList.add("quiz-button", "try-again-button");
      //   tryAgain.textContent = "Try Again";
      //   const buttonContainer = document.createElement("div");
      //   buttonContainer.classList.add("button-container");
      //   buttonContainer.appendChild(tryAgain);
      //   questionEl.appendChild(buttonContainer);
      //   tryAgain.addEventListener("click", function () {
      //     location.reload();
      //   });
      // } else if (!selectedAnswer) {
      //   // If no answer is selected, show an alert and return
      //     alert("Please select an answer");
      //     return;
      //   }
      

      // const answerValue = selectedAnswer.value.toUpperCase();
      // const currentQuestion = questions[currentQuestionIndex];
      // const correctAnswer = currentQuestion.correctAnwser;
      // if (answerValue === correctAnswer) {
      //   // If the answer is correct, add 10 seconds to the timer and increment the score
      //   time += 10;
      //   score++;
      // } else {
      //   // If the answer is incorrect, subtract 10 seconds from the timer and decrement the score
      //   time -= 10;
      // }
    });
  }

  function removeCurrentQuestion() {
    const currentContainer = questionEl.querySelector("div");
    if (currentContainer) {
      questionEl.removeChild(currentContainer);
    }
  }
  showQuestion(currentQuestionIndex);

  // Start the timer
  let time = 15;

  const timerEl = document.getElementById("timer-display");
  timerEl.textContent = "Time: " + formatTime(time);

  const timerInterval = setInterval(function () {
    time--;
    timerEl.textContent = "Time: " + formatTime(time);
    if (time <= 0) {
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
      viewHighscoresButton.textContent = "Submit a Highscore";
      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("button-container");
      buttonContainer.appendChild(tryAgain);
      buttonContainer.appendChild(viewHighscoresButton);
      questionEl.appendChild(buttonContainer);
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