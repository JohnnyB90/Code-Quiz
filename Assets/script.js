//Necessary Variables
var currentQuestionIndex = 0;
var questionEl = document.querySelector("#start-paragraph-container")
// List of questions for the quiz.
const questions = [
   '1. Inside which HTML element do we put the JavaScript?',
   '2. Where is the correct place to insert a JavaScript?',
   '3. What is the correct syntax for referring to an external script called "xxx.js"?',
   ]
//    '4. The external JavaScript file must contain the <script> tag.',
//    '5. How do you write "Hello World" in an alert box?',
//    '6. How do you create a function in JavaScript?',
//    '7. How do you call a function named "myFunction"?',
//    '8. How to write an IF statement in JavaScript?',
//    '9. How to write an IF statement for executing some code if "i" is NOT equal to 5?',
//    '10. How does a WHILE loop start?',
//    '11. How does a FOR loop start?',
//    '12. How can you add a comment in a JavaScript?',
//    '13. How to insert a comment that has more than one line?',
//    '14. What is the correct way to write a JavaScript array?',
//    '15. How do you round the number 7.25, to the nearest integer?',
//    '16. How do you find the number with the highest value of x and y?',
//    '17. What is the correct JavaScript syntax for opening a new window called "w2"?',
//    '18. JavaScript is the same as Java',
//    "19. How can you detect the client's browser name?",
//    '20. Which event occurs when the user clicks on an HTML element?',
//    '21. How do you declare a JavaScript variable?',
//    '22. Which operator is used to assign a value to a variable?',
//    '23. What will the following code return: Boolean(10 > 9)',
//    '24. Is JavaScript case-sensitive?'
// ]


// Anwsers
let answers1 = {
    a: '<js>',
    b: '<scripting',
    c: 'script',
    d: '<javascript>'
}

let answers2 = {
    a: 'The <body> section',
    b: 'The <head> section',
    c: 'Both the <head> section and the <body> section are correct'
}

let answers3 = {
    a: '<script name="xxx.js">',
    b: '<script src="xxx.js"> ',
    c: '<script href="xxx.js">'
}


// Start Button Click Event
const startButton = document.getElementById("start");
startButton.addEventListener("click", function() {
  // Your code for handling the click event goes here
  console.log(questions[currentQuestionIndex]);
  if ((questions[currentQuestionIndex]) === undefined){
    questionEl.textContent = "Game Over!";
    } else {
        questionEl.textContent = questions[currentQuestionIndex];
        currentQuestionIndex++;
    }
});
