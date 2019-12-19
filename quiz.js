// var questions = [];



// $("#time").on("click", function(){
// var count = 15;
// var interval = setInterval(function(){
//   document.getElementById('time').innerHTML=count;
//   count--;
//   if (count === 0){
//     alert("You're out of Horcruxes!");
//     clearInterval(interval);

//   }
// }, 1000);
// });

var timeSpan = document.getElementById('time');
function updateTime(time) {
  timeSpan.innerHTML = time;
}

var secondsRemaining = questions.length * 15;
function updateSecondsRemaining() {
  if (secondsRemaining <= 0) {
    updateTime('You are out of Horcruxes!');
    endQuiz();
  }
  else {
    updateTime(secondsRemaining + ' seconds remaining');
  }
}


var mainDiv = document.getElementById('main');

var previousAnswerCorrect;

function askQuestion() {
  var question = questions[questionsAnswered];
  var html = '';
  html += `<p class="question">${question.title}</p><ul>`;
  question.choices.forEach(function(choice) {
    html += `<li class="choice" onclick="answer(${choice === question.answer})">${choice}</li>`;
  });
  html += `</ul>`;
  if (previousAnswerCorrect === true) {
    html += `<p>Correct!</p>`
  } else if (previousAnswerCorrect === false) {
    html += `<p>Wrong! 15 points from Gryffindor.</p>`
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
  var score = Math.round(correctAnswers / questions.length * 100);
  var html = '';
  html += `<p>You scored ${score} percent.</p>`;
  mainDiv.innerHTML = html;
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
// for (var i = 0; i < questions.length; i++) {
//     var score = 0;
//     var title = window.body(questions[i].title);
//     var choices = window.body(questions[i].choices);
//     if (answer == questions[i].answer){
//         score ++;
//         alert("Very witty!");
//     } else counter -= 15;
//       alert("15 points from Gryffindor!");

//     }
//     alert("You've earned " + score + " points for Gryffindor!");





