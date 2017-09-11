/*
* File Name: quiz-script-climatologist.js
* Author(s): Bryle Castro
* Date: 7 September 2017
* Description: This file handles the all quiz functionality 
* for the climatologist pathway.
*/

var currentQuestion = 0; // The current question user is on.
var score = 0; // Answers the user answered correctly.
var totQuestions = questions.length; // The total number of questions for quiz.


//Get reference to the container and question for the quiz.
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');

// Get reference to the 4 answers the user could choose from.
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');

// Get reference to the buttons for the quiz/
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var tryAgain = document.getElementById('tryContainer');


/*
* Function: reloadQuiz
*
* Description: Handles the functionality for allowing the user
* to retake the quiz when clicking the "Try Again" button. NOTE: Button
* only shows up when the user completes all questions for the quiz.
*/
function reloadQuiz(){
    resultCont.style.display = 'none'; //Hide final score popup
    container.style.display = '';
    tryAgain.style.display = 'none'; //Hide "Try Again" button
    currentQuestion = 0; //Reset to the first question.
    loadQuestion(currentQuestion);
    nextButton.textContent = 'Next Question'; 
    score = 0; //Reset score
}

/*
* Function: loadQuestion
*
* Description: Handles the functionality for loading
* a question for the quiz along with the four answer choices.
*/
function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

/*
* Function: loadNextQuestion
*
* Description: Handles the functionality for loading
* a the next question for the quiz along with the four answer choices.
*/
function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	
    // Prompts the user to always select an answer for a question before moving
    // if user clicks "Next Question" button without selecting an answer.
     if(!selectedOption){
         var popup = document.getElementById( 'myPopup' );

          //Make popup visable
          popup.style.display = "flex";

          //Close popup upon clicking outside the box
          window.onclick = function(event) {
            if (event.target == popup) {
                popup.style.display = "none";
            }
          }
        return;
	}
    
    // Increment user score if user chooses correct answer.
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score++;
	}
    
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
    
    // Display final score when user finishes the quiz.
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
        tryAgain.style.display ='';
        var percentScore = (score/totQuestions)*100;
        percentScore = Math.round(percentScore * 100) / 100
		resultCont.textContent = 'Your Score: ' + percentScore + '%';
		return;
	}
    
    // Display the next question.
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
