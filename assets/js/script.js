
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
var select =document.querySelector(".timer");
select.textContent = "Remaining time:" + timeRemain;

var timer =  function() {
    timeRemain--;
    select.textContent = "Remaining time:" + timeRemain;
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
        remainingTime();
        setNextQuestion();
    })

};

var setQuestion = function(i) {
    nextButtonEl.addEventListener("click", function () {
        var questionTextEl = document.querySelector(".question");
        var optionOne = document.querySelector(".a");
        var optionTwo = document.querySelector(".b");
        var optionThree = document.querySelector(".c");
        var optionFour = document.querySelector(".d");

        questionTextEl.textContent = arrayOfQuestionData[i].question;
        optionOne.textContent = arrayOfQuestionData[i].optionA;
        optionTwo.textContent = arrayOfQuestionData[i].optionB; 
        optionThree.textContent = arrayOfQuestionData[i].optionC;
        optionFour.textContent = arrayOfQuestionData[i].optionD
        questionsContainerEl.classList.remove("hide");
            
    })
};


var k = 0;
function setNextQuestion() {
    for(var j = 0; j < arrayOfQuestionData.length; j++) {
        setQuestion(k);
        if(timeRemain>0) {
            var answerButtonEl = document.querySelector(".answer-buttons");
            answerButtonEl.addEventListener("click", function() {
                k++;
                setQuestion(k);   
            });

            break;
            
        };
    };
};

startQuiz();