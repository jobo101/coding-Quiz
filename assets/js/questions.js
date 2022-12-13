
var backBtn =document.querySelector("#back-btn");
var clearBtn=document.querySelector("#clear");  


var answers = document.querySelector("#choices");
var timerEl = document.querySelector("#countdown");
var score = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var submit = document.querySelector("#submit");
var highscores = document.querySelector("#feedback");

// buttons
var submitScoreBtn = document.querySelector("#submit-score");
var clearScoreBtn = document.querySelector("#clearScores");
var viewScoreBtn = document.querySelector("#view-scores");
var goBackButton = document.querySelector("#goBack");
   

   
   //Define questions (Object)
   var myQuestions = [
    {
        question: "Questions 1 : JavaScript is a ___ -side programming language.",
        choices: ["a. client", "b. server", "c. both", "d. none"],
        answer: "c"
    },
    {
        question: "Questions 2 : Which of the following will write the message “Hello DataFlair!” in an alert box?",
        choices: ["a. alertBox(“Hello DataFlair!”);", "b.  alert(Hello DataFlair!);" , "c. msgAlert(“Hello DataFlair!”); ",  "d.  alert(“Hello DataFlair!”); "],
        answer: "d"
    },
    {
        question: "Questions 3 : How do you create a function in JavaScript",
        choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b"
    },
    {
        question: "Questions 4 : Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        choices: ["a. if(x 2)", "b. if(x = 2) )", "c. if(x == 2) ", "d. if(x != 2 ) "],
        answer: "c"
    },
    {
        question: "Questions 5 : What does HTML stand for?",
        choices: ["a. How to make Lasagne", "b. Hot Mail", "c. Hyper Text Markup Language", "d. Hyper Type Matrix Language"],
        answer: "c"
    },
    {
        question: "Questions 6 : The first index of an array is ____.",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a"
    },
  {
        question: "Questions 7 : What does < a  h r e f = ”h t t p : / / w w w . g o o g l e . c o m“  t i t l e = ” L i n k  t o   G o o g l e  ” t a r g e t = ” _  b l a n k  ” > G o o g l e  < / a > do??",
        choices: ["a. Adds a link to google on the page", "b. Adds a search engine to the page", "c. nothing", "d. Adds on another page."],
        answer: "a"
    },

    {
        question: "Questions 8 : How to write an IF statement in JavaScript?",
        choices: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
        answer: "c"
    },
    {
        question: "Questions 9 : Which of these cannot be manipulated by HTML?",
        choices: ["a. Site cookies", "b. Browser security", "c. Browser settings", "d. Cookies"],
        answer: "c"
    },
    {
        question: "Questions 10 : What is the correct CSS syntax for making all the <span> elements bold?",
        choices: ["a. span {text-size: bold}", "b. span {font-weight: bold}", "c. <span style='font-size: bold'>", "d. <span style='text-size: bold'>"],
        answer: "b"
    }
  
];

//declare the variables

var time = document.querySelector(".timer");
var score = document.querySelector(".scores");
var secondsLeft = 60;

//variables for buttons
var start = document.querySelector("#start");

//variable for start page
var startScreen = document.querySelector("#start-screen");

//call load element
var questionsEl = document.querySelector(".start");

//elements locations variables
var questionEl = document.querySelector("#answers");
var correctIncorrect = document.querySelector("#correct-incorrect");
var questionCount = 0;

//final score variables

var finalScore = document.querySelector("#final-score");
var initialsInput = document.querySelector("#initials");
var highScore = [];

// answer button
var answerButton = document.querySelectorAll("button.answer-btn")
var answerBtn1 = document.querySelector("#answer-btn1");
var answerBtn2 = document.querySelector("#answer-btn2");
var answerBtn3 = document.querySelector("#answer-btn3");
var answerBtn4 = document.querySelector("#answer-btn4");


    
    //On clicking the start button the timer will start
function setTime() {
        
        var timerInterval = setInterval(function () {

          secondsLeft--;
          timeLeft.textContent = "Time left: " + secondsLeft + " s";
    
            if (secondsLeft <= 0){
                clearInterval(timerInterval);
                timeLeft.textContent = "Time is up!"; 
                // if time is up, show on score board content instead of "all done!"
                finish.textContent = "Time is up!";
                gameOver();

            } else  if(questionCount >= myQuestions.length +1) {
                clearInterval(timerInterval);
                gameOver();
                } 
    }, 1000);
}

//set question funtion
function setQuestion(id) {
    if (id < myQuestions.length) {
    questionEl.textContent = myQuestions[id].activeQuestion;
    answerBtn1.textContent = myQuestions[id].choices[0];
    answerBtn2.textContent = myQuestions[id].choices[1];
    answerBtn3.textContent = myQuestions[id].choices[2];
    answerBtn4.textContent = myQuestions[id].choices[3];
}
}

function checkAnswer(event) {
    event.preventDefault();

    var p = document.createElement("p");
    correctIncorrect.appendChild(p);

    setTimeout(function () {
        p.style.display = "none";
    }, 1000);


    //check the answers
    
    if (myQuestions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    }
    else if (myQuestions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "Incorrect!";
    }

if (questionCount < myQuestions.length) {
    questionCount++;
}
setQuestion(questionCount);
}

   //event listener to start timer and quiz
   start.addEventListener("click", start);
      

   //check answer listener
   answerButton.forEach(item => {
    item.addEventListener("click", checkAnswer);

   });

   submitScoreBtn.addEventListener("click", addScore);
//event listener to go back on click
   goBackButton.addEventListener("click", function() {
    secondsLeft = 60;
    time.textContent = `time:${secondsLeft}`;
   });