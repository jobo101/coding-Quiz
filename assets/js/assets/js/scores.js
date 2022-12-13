

 //event listener to go back to the main page
 backToStart.addEventListener("click", function() {
    window.location.replace("./index.html");
    secondsLeft = 60;
    TimeRanges.textContent = `Time:${secondsLeft}`;
});
// function to add scores
function addScore(event) {
   event.preventDefault();

   var init = initialsInput.value.toUppercase();
   scoreList.push({initials: init, score: secondsLeft});


scoreListEl.innerHTML="";
for (let i = 0; i < scoreList.length; i++) {
let li = document.createElement("li");
li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
}
storeScores();
displayScores();

function storeScores(); {
   localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function displayScores() {
   var storeScoresList = JSON.parse(localStorage.getItem("scoreList"));
   if (storeScoresList !== null) {
       scoreList = storeScoresList;
   }
}

// to clear the scores
function clearScores() {
   localStorage.clear();
   scoreListEl.innerHTML="";
}
}
//to view the highscores

