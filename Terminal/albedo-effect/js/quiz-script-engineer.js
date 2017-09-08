
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var tryAgain = document.getElementById('tryContainer');


function reloadQuiz(){
    resultCont.style.display = 'none';
    container.style.display = '';
    tryAgain.style.display = 'none';
    currentQuestion = 0;
    loadQuestion(currentQuestion);
    nextButton.textContent = 'Next Question';
    score = 0;
}

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score++;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
        tryAgain.style.display ='';
        var percentScore = (score/totQuestions)*100;
        percentScore = Math.round(percentScore * 100) / 100
		resultCont.textContent = 'Your Score: ' + percentScore + '%';
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);

