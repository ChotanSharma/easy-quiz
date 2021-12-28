
var startButton = document.querySelector(".start-button");
var questionsContainerEl = document.querySelector(".hide");
var nextButtonEl = document.querySelector("#btn-next");
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startButton.classList.add("hide");
    questionsContainerEl.classList.remove("hide");
    nextButtonEl.classList.remove("hide");
};

/*
var questionOne = {
    question = "What is JavaScript?",

    optionA = "A programming language",
    optionB = "A search engine",
    optionC = "A natural language",
    optionD = "A machine language",

    correctAnswer = "A programming language",

};

var questionTwo = {
    question = "What is a pseudo-class?",

    optionA = "A CSS rule that contains no declaration",
    optionB = "A CSS declaration that hides the elements",
    optionC = "An element that has more than one class",
    optionD = "A CSS element to target an element's state",

    correctAnswer = "A CSS element to target an element's state"
};

var questionThree = {
    question = "What does z-index property do?",

    optionA = "Removes an element from the DOM",
    optionB = "Changes the stacking order of elements",
    optionC = "Changes the opacity of an element",
    optionD = "Forces the position of an element relatively",

    correctAnswer = "Changes the stacking order of elements"
};

// call the select answer
     selectAnswer();

// Increment the score if the answer is correct

countScore();

// decrement the timer function by 10 if false answer

// call setNextQuestion() for the next question
setNextQuestion();*/


function setNextQuestion() {

};

function selectAnswer() {


};

function countScore() {
    // if answer is coreect, the  variable score will be incremented
};