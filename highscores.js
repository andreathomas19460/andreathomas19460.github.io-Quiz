var logScoreBtn = document.querySelector("#logScore");
var highscoresDiv = document.querySelector("#clearScores");

function clearLocal(){
    
}
logScoreBtn.addEventListener("click", function () {
	document.getElementById("highscores").innerHTML = "";
	var  = JSON.parse(localStorage.getItem("Highscore")).highscoreArr || [];
	if (scoresDiv.style.display === "none") {
submitBtn.addEventListener("click", function () {
	// localStorage.setItem("")
	// highscoreStorage = JSON.parse(localStorage.getItem("Highscore")).highscore || [];
	if (localStorage.getItem("Highscore") === null) {
localStorage.setItem("Highscore", JSON.stringify({
    highscore: 0,
    highscoreArr: []
}));
}
var input = document.querySelector("#initials").value;
	var score = totalPoints + totalTime;
	highscore = JSON.parse(localStorage.getItem("Highscore")).highscore;
	var allscores = JSON.parse(localStorage.getItem("Highscore")).highscoreArr;

	if (score > highscore) {
		highscore = score;
	}
	allscores.push(input + score);
	localStorage.setItem('Highscore', JSON.stringify({
		highscore,
		highscoreArr: allscores
	}));

	startAgain();
});