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
//sound effect
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

//  play wrong/right sound effect
 sfxWrong.play;
 sfxRight.play();


//adds question and answer elements to html
var questionTitle = document.createElement("p");
var answerList = document.createElement("ol");
answerBtn1 = document.createElement("li");
answerBtn2= document.createElement("li");
answerBtn3 = document.createElement("li");
answerBtn4 = document.createElement("li");
