
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
// Timer function to countdown
var timer =  function() {
    timeRemain--;
    select.textContent = "Remaining time:" + timeRemain;
    console.log(timeRemain);
    if(timeRemain===0) {
        
        clearInterval();
        select.classList.add("hide");
        var replay = window.confirm("Would you like to retry the quiz?");
        if(replay) {
            introDivEl.classList.remove("hide");
            startQuiz();

        } else {
            // show the result
        }
    };
};
 // use the setInterval() to set the countdown at a regular interval
var remainingTime = function() {
    setInterval(timer, 1000);
};

var startQuiz = function() {
    startButton.addEventListener("click", function() {
        startButton.classList.add("hide");
        nextButtonEl.classList.remove("hide");
        introDivEl.classList.add("hide");
        remainingTime();
        setNextQuestion();
    })

};

// select the answer and add the score


//select the div(class="questions-container") to insert the questions using for loop
var currentQuestion = 0;
var setQuestion = function() {
        var questionTextEl = document.querySelector(".question");
        var optionOne = document.getElementById("a_text");
        var optionTwo = document.getElementById("b_text");
        var optionThree = document.getElementById("c_text");
        var optionFour = document.getElementById("d_text");

        var currentQuiz = arrayOfQuestionData[currentQuestion];

        questionTextEl.innerHTML = currentQuiz.question;
        optionOne.innerHTML = currentQuiz.optionA;
        optionTwo.innerHTML = currentQuiz.optionB; 
        optionThree.innerHTML = currentQuiz.optionC;
        optionFour.innerHTML = currentQuiz.optionD

        questionsContainerEl.classList.remove("hide");
};

var answerEls = document.querySelectorAll('.answer');

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
};

function getSelected() {
    var answer="";
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
};
// if the user click answer button and next button, the next question appears
var score = 0;
function setNextQuestion() {
    for(var j = 0; j < arrayOfQuestionData.length; j++) {
        setQuestion();
        nextButtonEl.addEventListener("click", function() {
            if(timeRemain>0) {
                getSelected();
                if(answer === arrayOfQuestionData[currentQuestion].correctAnswer) {
                        score = timeRemain;
                    }
                currentQuestion++; 
            }

        });
             
    }
    console.log(score);
};

startQuiz();
