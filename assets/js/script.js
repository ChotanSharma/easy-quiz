
var startButton = document.querySelector(".start-button");
var questionsContainerEl = document.querySelector("#questions-container");
var nextButtonEl = document.querySelector(".next-button");
var introDivEl = document.querySelector("#intro");

var arrayOfQuestionData = [
    {
        question: "What is JavaScript?",
        optionA: "A programming language",
        optionB: "A search engine",
        optionC: "A natural language",
        optionD: "A machine language",
        correctAnswer: "A programming language"
    },

    { 
        question: "What is a pseudo-class?",
        optionA: "A CSS rule that contains no declaration",
        optionB: "A CSS declaration that hides the elements",
        optionC: "An element that has more than one class",
        optionD: "A CSS element to target an element's state",
        correctAnswer: "A CSS element to target an element's state"
    },

    { 
        question: "What does z-index property do?",
        optionA: "Removes an element from the DOM",
        optionB: "Changes the stacking order of elements",
        optionC: "Changes the opacity of an element",
        optionD: "Forces the position of an element relatively",
        correctAnswer: "Changes the stacking order of elements"
    
    }
];

var timeRemain = 30;
var timerDiv = document.createElement("div");
timerDiv.textContent = "Remaining time:" + timeRemain;
var select =document.querySelector(".intro");
select.appendChild(timerDiv);

var timer =  function() {
    timeRemain--;
    timerDiv.textContent = "Remaining time:" + timeRemain;
    console.log(timeRemain);
    if(timeRemain<=0) {
        alert("The quiz ends as you lost your time.");
        clearInterval();
    };
};

var remainingTime = function() {
    setInterval(timer, 1000);
}
var startQuiz = function() {
    startButton.addEventListener("click", function() {
        startButton.classList.add("hide");
        nextButtonEl.classList.remove("hide");
        introDivEl.classList.add("hide");
        setQuestion();
        remainingTime();
    })

};

var setQuestion = function() {
    var questionTextEl = document.querySelector(".question");
    var optionA = document.querySelector(".a");
    var optionB = document.querySelector(".b");
    var optionC = document.querySelector(".c");
    var optionD = document.querySelector(".d");

    var questionArrayLength = arrayOfQuestionData.length;
    var i = 0;
    while(i <questionArrayLength) {
        nextButtonEl.addEventListener("click", function () {
            questionTextEl.textContent = arrayOfQuestionData[i].question;
            optionA.textContent = arrayOfQuestionData[i].optionA;
            optionB.textContent = arrayOfQuestionData[i].optionB;
            optionC.textContent = arrayOfQuestionData[i].optionC;
            optionD.textContent = arrayOfQuestionData[i].optionD
            questionsContainerEl.classList.remove("hide");
        })
        break;
    }

};

startQuiz();