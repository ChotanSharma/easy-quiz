
var startButton = document.querySelector(".start-button");
var questionsContainerEl = document.querySelector("#questions-container");
var nextButtonEl = document.querySelector(".next-button");
var introDivEl = document.querySelector("#intro");
var submitButton = document.getElementById("btn-submit");

// the array of questions
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

// select the timer by class name to update
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
    // add an event listener(click on start button) to start the uiz
    startButton.addEventListener("click", function() {
        // add the css to hide the buttons
        startButton.classList.add("hide");
        nextButtonEl.classList.remove("hide");
        introDivEl.classList.add("hide");
        setQuestion(k);
        checkAnswer(k);
        remainingTime();
        // every time click on  next button generates the function setNextQuestions call
        nextButtonEl.addEventListener("click", function() {
            setNextQuestion();
            // increment the value of question no. k
            k++;
            // if iteration reaches last question, the option to click submit button appears
            if (k == arrayOfQuestionData.length) {
                nextButtonEl.classList.add("hide");
                submitButton.classList.remove("hide");
                submitAnswers();
            };
        });
        
        
        
    })
    
};


// variable for setting initial question
var k = 0;
var setQuestion = function(k) {
=======
//select the div(class="questions-container") to insert the questions using for loop
var setQuestion = function() {
    nextButtonEl.addEventListener("click", function () {

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
// function to check if user clicks on a right answer 
function checkAnswer(k) { 
    var answerDiv = document.createElement("div");
        answerDiv.classList.add("answer");
        questionsContainerEl.append(answerDiv);

    answerClick.addEventListener("click", function(e) {
        var answer = e.target.innerHTML;
        // if answer correct, show the correct message
        if(answer == arrayOfQuestionData[k].correctAnswer) {
            console.log("correct answer!!!");
            answerDiv.innerHTML ="Correct Answer!!!";
        // deduct time for any wrong answer button clicks  
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

// function to listen to the click on submit button and generate catching the high score and store it in the local storage
function submitAnswers() {
    submitButton.addEventListener("click", function() {
        clearInterval(timer);
        // value for local storage
        var highScore = timeRemain;
        // prompt to create the key for local storage
        var storingScore = window.prompt("Your total score is " + highScore + " . To save your score, would you please enter your name?");
        console.log(storingScore);
        
         if(!storingScore || storingScore == "") {
             window.prompt("Sorry, fail to save your score. Your input is not valid");

         } else {
             // convert the highScore into a string value
             localStorage.setItem(storingScore, JSON.stringify(highScore));

         }
    });
  
        if(timeRemain>0) {
            var answerButtonEl = document.getElementsByClassName("answer");
            answerButtonEl.addEventListener("click", function() {
                k++;
                setQuestion(k);   
            });

            break;
            
        };
    };

};


var getHighScore = function() {
    var getData = localStorage.getItem(storingScore);
    var parseData = JSON.parse(getData);
    console.log(parseData);
}

// activate the highScore button of the page
var highScoreEl = document.getElementById("high-score");
highScoreEl.addEventListener("click", function() {
    getHighScore();
})

startQuiz();