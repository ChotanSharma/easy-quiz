
var startButton = document.querySelector(".start-button");
var questionsContainerEl = document.querySelector("#questions-container");
var nextButtonEl = document.querySelector(".next-button");
var introDivEl = document.querySelector("#intro");
var submitButton = document.getElementById("btn-submit");

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

var timeRemain = 60;
var select =document.querySelector(".timer");
select.textContent = "Remaining time:" + timeRemain;
// Timer function to countdown
var timer =  function() {
    timeRemain--;
    select.textContent = "Remaining time:" + timeRemain;
    console.log(timeRemain);
    if(timeRemain<=0) {
        alert("The quiz ends as you lost your time.");
        clearInterval();
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
        nextButtonEl.addEventListener("click", function() {
            setQuestion(k);
            checkAnswer(k);
            remainingTime();
            setNextQuestion();
            k++;
            if (k == arrayOfQuestionData.length) {
                nextButtonEl.classList.add("hide");
                submitButton.classList.remove("hide");
                submitAnswers();
            };
        });
        
        
        
    })
    
};

//select the div(class="questions-container") to insert the questions using for loop
var k = 0;
var setQuestion = function(k) {
        var questionTextEl = document.querySelector(".question");
        var optionOne = document.querySelector("#a");
        var optionTwo = document.querySelector("#b");
        var optionThree = document.querySelector("#c");
        var optionFour = document.querySelector("#d");

        questionTextEl.textContent = arrayOfQuestionData[k].question;
        optionOne.textContent = arrayOfQuestionData[k].optionA;
        optionTwo.textContent = arrayOfQuestionData[k].optionB; 
        optionThree.textContent = arrayOfQuestionData[k].optionC;
        optionFour.textContent = arrayOfQuestionData[k].optionD
        questionsContainerEl.classList.remove("hide");
};

var answerClick = document.querySelector(".answer");

function checkAnswer(k) { 
    var answerDiv = document.createElement("div");
        answerDiv.classList.add("answer");
        //answerDiv.innerHTML ="Check Answer!!!";
        questionsContainerEl.append(answerDiv);

    answerClick.addEventListener("click", function(e) {
        var answer = e.target.innerHTML;
        if(answer == arrayOfQuestionData[k].correctAnswer) {
            console.log("correct answer!!!");
            answerDiv.innerHTML ="Correct Answer!!!";
            
        
        
        } else {
            answerDiv.innerHTML ="Incorrect Answer!!!";
            timeRemain = timeRemain - 5;
            
    
        }
    })

}

function setNextQuestion() {
    
        setQuestion(k);
        
        checkAnswer(k);
        
};


function submitAnswers() {
    submitButton.addEventListener("click", function() {
        clearInterval(timer);
        var highScore = timeRemain;
        var storingScore = window.prompt("Your total score is " + highScore + " . To save your score, would you please enter your name?");
        console.log(storingScore);
        
         if(!storingScore || storingScore == "") {
             window.prompt("Sorry, fail to save your score. Your input is not valid");

         } else {
             localStorage.setItem(storingScore, JSON.stringify(highScore));

         }
    });
};


var getHighScore = function() {
    var getData = localStorage.getItem(storingScore);
    var parseData = JSON.parse(getData);
    console.log(parseData);
}

var highScoreEl = document.getElementById("high-score");
highScoreEl.addEventListener("click", function() {
    getHighScore();
})

startQuiz();