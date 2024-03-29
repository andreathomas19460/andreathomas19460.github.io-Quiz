var timeSpan = document.getElementById("time");
function updateTime(time) {
  timeSpan.innerHTML = time;
}

var secondsRemaining = questions.length * 15;
function updateSecondsRemaining() {
  if (secondsRemaining <= 0) {
    updateTime("You are out of Horcruxes!");
    endQuiz();
  } else {
    updateTime(secondsRemaining + " seconds remaining");
  }
}

var mainDiv = document.getElementById("main");

var previousAnswerCorrect;

function askQuestion() {
  var question = questions[questionsAnswered];
  var html = "";
  html += `<div class="qDiv"><p class="question">${question.title}</p><ul class="choiceList">`;
  question.choices.forEach(function(choice) {
    html += `<li class="choice" onclick="answer(${choice ===
      question.answer})">${choice}</li>`;
  });
  html += `</ul></div>`;
  if (previousAnswerCorrect === true) {
    html += `<p class="correct">Correct! Very witty.</p>`;
  } else if (previousAnswerCorrect === false) {
    html += `<p class="incorrect">Wrong! 15 points from Gryffindor.</p>`;
  }
  mainDiv.innerHTML = html;
}

var secondsRemaining;
var everySecondIntervalId;
var questionsAnswered;
var correctAnswers;

function beginQuiz() {
  secondsRemaining = questions.length * 15;
  everySecondIntervalId = setInterval(everySecond, 1000);
  questionsAnswered = 0;
  correctAnswers = 0;
  askQuestion();
}

function endQuiz() {
  clearInterval(everySecondIntervalId);
  var score = Math.round((correctAnswers / questions.length) * 100);
  var highScores = localStorage.getItem('highScores') || [];
  if (highScores.length < 5) {
    var html = "";
    html += `<p class="score">You scored ${score} percent.</p><input type="text" id="initials" name="initials" class="textarea" value="Add your initials..."><button id="logScore" onclick="<a id="scoresLink" href="scores.html">Log Score</button>`;
    mainDiv.innerHTML = html;
    document.getElementById("logScore").addEventListener("click",
      function () {
        var record = {
          initials: document.getElementById("initials").value,
          score: score
        };
        localStorage.setItem("highScores", record) ;
        console.log(record);
    });
  // } else {
  //   var html = "";
  //   html += `<p class="score">You scored ${score} precent...unimpressive.</p><button id="navButton"><a id="scoresLink" href="scores.html">See Highscores</a></button>`;
  //   mainDiv.innerHTML = html;
  // }
}
 

function everySecond() {
  secondsRemaining -= 1;
  updateSecondsRemaining();
}

function answer(correct) {
  previousAnswerCorrect = correct;
  if (correct) {
    correctAnswers += 1;
  } else {
    secondsRemaining -= 15;
    updateSecondsRemaining();
  }
  questionsAnswered += 1;
  if (questionsAnswered < questions.length) {
    askQuestion();
  } else {
    endQuiz();
  }
}

var score = 0;
var highscore = localStorage.getItem("highscore");

if(highscore !== null){
    if (score > highscore) {
        localStorage.setItem("highscore", score);      
    }
}
else{
    localStorage.setItem("highscore", score);
}