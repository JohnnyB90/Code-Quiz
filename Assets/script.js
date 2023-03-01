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

    // remove the start button and paragraphanswer-label
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
        console.log(selectedAnswer);

        // Check if an answer is selected
        if (!selectedAnswer) {
          alert("Please select an answer!");
          return;
        }

        // A conditional that will deduct 10 seconds for wrong answers and add 10 seconds for correct answers
        if (selectedAnswer === questions[currentQuestionIndex].correctAnwser) {
          score++;
          time += 10;
          console.log(score);
        } else {
          time -= 10;
        }

        if (currentQuestionIndex >= totalQuestions - 1) {
          // Display final message and try again button...
          questionEl.textContent = "You have answered all questions";
          clearInterval(timerInterval);
          const scoreMessage = document.createElement("p");
          scoreMessage.textContent =
            "Your score is " + score + " out of " + totalQuestions;
          questionEl.appendChild(scoreMessage);
          const tryAgain = document.createElement("button");
          tryAgain.classList.add("quiz-button", "try-again-button");
          tryAgain.textContent = "Try Again";
          const buttonContainer = document.createElement("div");
          buttonContainer.classList.add("button-container");
          buttonContainer.appendChild(tryAgain);
          questionEl.appendChild(buttonContainer);

          // Create add highscore button and append it to the DOM
          const addHighscore = document.createElement("button");
          addHighscore.classList.add(
            "quiz-button",
            "view-highscores-button",
            "addHighscoreBtn"
          );
          addHighscore.textContent = "Add Highscore";
          buttonContainer.appendChild(addHighscore);

          // Adds function to submit a highscore
          var highscoreForm = document.querySelector("#highscore-form");
          console.log(highscoreForm);
          addHighscore.addEventListener("click", () => {
            // Get the current score value
            const currentScore = score;

            // Create a new form element to wrap the highscore form
            const form = document.createElement("form");
            form.id = "highscore-form";
            form.style.display = "flex";
            form.style.flexDirection = "column";
            form.style.justifyContent = "center";
            form.style.alignItems = "center";
            form.style.position = "fixed";
            form.style.top = "50%";
            form.style.left = "50%";
            form.style.transform = "translate(-50%, -50%)";
            form.style.width = "400px";
            form.style.height = "400px";
            form.style.padding = "20px";
            form.style.backgroundColor = "white";
            form.style.border = "3px solid black";
            form.style.borderRadius = "10px";

            // Create a new div element to display the score
            const scoreDiv = document.createElement("div");
            scoreDiv.textContent = `Score: ${currentScore}`;
            scoreDiv.style.marginBottom = "10px";
            scoreDiv.style = "x-large";
            form.appendChild(scoreDiv);

            // Create the name input element
            const nameInput = document.createElement("input");
            nameInput.id = "name";
            nameInput.type = "text";
            nameInput.placeholder = "Enter your name";
            nameInput.style.marginBottom = "10px";
            nameInput.style.width = "4%";
            nameInput.style.height = "4%";
            form.appendChild(nameInput);

            // Creates the submit button for highscore
            const submitHighscoreBtn = document.createElement("button");
            submitHighscoreBtn.id = "submit-highscore-btn";
            submitHighscoreBtn.textContent = "Submit";
            submitHighscoreBtn.type = "submit";
            submitHighscoreBtn.style.marginBottom = "10px";
            submitHighscoreBtn.style.width = "100%";
            submitHighscoreBtn.style.padding = "10px";
            submitHighscoreBtn.style.backgroundColor = "#ffff80";
            submitHighscoreBtn.style.color = "black";
            submitHighscoreBtn.style.fontSize = "x-large";
            submitHighscoreBtn.style.border = "none";
            submitHighscoreBtn.style.cursor = "pointer";
            form.appendChild(submitHighscoreBtn);

            // Adds mouseover color effect to submit button
            submitHighscoreBtn.addEventListener("mouseover", () => {
              submitHighscoreBtn.style.backgroundColor = "#ffb366";
            });

            // Leaves a color for the background when removing mouse from button
            submitHighscoreBtn.addEventListener("mouseout", () => {
              submitHighscoreBtn.style.backgroundColor = "#ffff80";
            });

            // Adds some style to the name input box for submit highscore
            nameInput.style.width = "100%";
            nameInput.style.padding = "10px";
            nameInput.style.marginBottom = "10px";
            nameInput.style.border = "1px solid #ccc";
            nameInput.style.borderRadius = "10px";

            // Attach the form to the document body
            document.body.appendChild(form);

            // Add event listener to the form submit button
            form.addEventListener("submit", (event) => {
              event.preventDefault();
            
              const name = nameInput.value;
            
              if (typeof name === "string" && name.trim().length > 0) {
                const highscore = { name, score: currentScore };
            // Gets highscores from the storage if they are there
                let highscores = JSON.parse(localStorage.getItem("highscores"));
            
                if (highscores === null) {
                  highscores = [];
                }
            
                highscores.push(highscore);
                highscores.sort((a, b) => b.score - a.score);
            // Adds the highscore to the local storage
                localStorage.setItem("highscores", JSON.stringify(highscores));

            // Ensures that there is a name added to the text field
                window.location.href = "highscores.html";
              } else {
                alert("Please enter a valid name.");
              }
            // Hides the form after a Highscore is added.
              form.classList.add("hidden");
              nameInput.value = "";
            });

            form.classList.remove("hidden");
            console.log("Hello World");
          });
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
    let time = 5;

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
        addHighscore.classList.add(
          "quiz-button",
          "view-highscores-button",
          "addHighscoreBtn"
        );
        addHighscore.textContent = "Add Highscore";
        buttonContainer.appendChild(addHighscore);

        // Adds function to submit a highscore
        var highscoreForm = document.querySelector("#highscore-form");
        console.log(highscoreForm);
        addHighscore.addEventListener("click", () => {
          // Get the current score value
          const currentScore = score;

          // Create a new form element to wrap the highscore form
          const form = document.createElement("form");
          form.id = "highscore-form";
          form.style.display = "flex";
          form.style.flexDirection = "column";
          form.style.justifyContent = "center";
          form.style.alignItems = "center";
          form.style.position = "fixed";
          form.style.top = "50%";
          form.style.left = "50%";
          form.style.transform = "translate(-50%, -50%)";
          form.style.width = "400px";
          form.style.height = "400px";
          form.style.padding = "20px";
          form.style.backgroundColor = "white";
          form.style.border = "3px solid black";
          form.style.borderRadius = "10px";

          // Create a new div element to display the score
          const scoreDiv = document.createElement("div");
          scoreDiv.textContent = `Score: ${currentScore}`;
          scoreDiv.style.marginBottom = "10px";
          scoreDiv.style = "x-large";
          form.appendChild(scoreDiv);

          // Create the name input element
          const nameInput = document.createElement("input");
          nameInput.id = "name";
          nameInput.type = "text";
          nameInput.placeholder = "Enter your name";
          nameInput.style.marginBottom = "10px";
          nameInput.style.width = "4%";
          nameInput.style.height = "4%";
          form.appendChild(nameInput);

          // Creates the submit button for highscore
          const submitHighscoreBtn = document.createElement("button");
          submitHighscoreBtn.id = "submit-highscore-btn";
          submitHighscoreBtn.textContent = "Submit";
          submitHighscoreBtn.type = "submit";
          submitHighscoreBtn.style.marginBottom = "10px";
          submitHighscoreBtn.style.width = "100%";
          submitHighscoreBtn.style.padding = "10px";
          submitHighscoreBtn.style.backgroundColor = "#ffff80";
          submitHighscoreBtn.style.color = "black";
          submitHighscoreBtn.style.fontSize = "x-large";
          submitHighscoreBtn.style.border = "none";
          submitHighscoreBtn.style.cursor = "pointer";
          form.appendChild(submitHighscoreBtn);

          // Adds mouseover color effect to submit button
          submitHighscoreBtn.addEventListener("mouseover", () => {
            submitHighscoreBtn.style.backgroundColor = "#ffb366";
          });

          // Leaves a color for the background when removing mouse from button
          submitHighscoreBtn.addEventListener("mouseout", () => {
            submitHighscoreBtn.style.backgroundColor = "#ffff80";
          });

          // Adds some style to the name input box for submit highscore
          nameInput.style.width = "100%";
          nameInput.style.padding = "10px";
          nameInput.style.marginBottom = "10px";
          nameInput.style.border = "1px solid #ccc";
          nameInput.style.borderRadius = "10px";

          // Attach the form to the document body
          document.body.appendChild(form);

          // Add event listener to the form submit button
          form.addEventListener("submit", (event) => {
            // prevent form from submitting and refreshing the page
            event.preventDefault();

            // Get the name value from the input
            const name = nameInput.value;

            // Check if name is a non-empty string
            if (typeof name === "string" && name.trim().length > 0) {
              // Create a new object to store the name and score
              const highscore = { name, score: currentScore };

              // Get the current highscores array from localStorage
              let highscores = JSON.parse(localStorage.getItem("highscores"));

              // If highscores is null or undefined, initialize it with an empty array
              if (!highscores) {
                highscores = [];
              }

              // Add the new highscore object to the array
              highscores.push(highscore);

              // Sort the highscores array in descending order of score
              highscores.sort((a, b) => b.score - a.score);

              // Store the highscores array in localStorage
              localStorage.setItem("highscores", JSON.stringify(highscores));

              // Redirect to the highscores page
              window.location.href = "highscores.html";
            } else {
              // Show an alert if the name is not a non-empty string
              alert("Please enter a valid name.");
            }
            // Hide the form
            form.classList.add("hidden");

            // Clear the name input
            nameInput.value = "";
          });

          form.classList.remove("hidden");
          console.log("Hello World");
        });

        // Create the try again button and append it to the DOM
        const tryAgain = document.createElement("button");
        tryAgain.classList.add("quiz-button", "try-again-button");
        tryAgain.textContent = "Try Again";
        buttonContainer.appendChild(tryAgain);

        // Add the function to just try again and start over
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

// Get the highscores array from localStorage, or create an empty one if it doesn't exist
let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// Get the table body element
const tableBody = document.querySelector("#highscores-table tbody");

// Loop through the highscores array and create a table row for each highscore
for (let i = 0; i < highscores.length; i++) {
  const highscore = highscores[i];
  const tr = document.createElement("tr");
  const tdName = document.createElement("td");
  tdName.textContent = highscore.name;
  tr.appendChild(tdName);
  const tdScore = document.createElement("td");
  tdScore.textContent = highscore.score;
  tr.appendChild(tdScore);
  if (tableBody) {
    tableBody.appendChild(tr);
  }
}
