
// variable for timer
var timer = 60
var timerEl = document.querySelector("#timer")

// variable for questions
var question1 = {
    question: "Javascript is a ________.",
    answer1: "A coffee shop",
    answer2: "A love language",
    answer3: "A programming language",
    answer4: "A well-caffeinated screenplay",
    correct: "A programming language"
}
var question2 = {
    question: "You can refer to a .css file as a ________.",
    answer1: "Boolean",
    answer2: "script",
    answer3: "stylesheet",
    answer4: "pretty colors",
    correct: "stylesheet"
}
var question3 = {
    question: "Which of the following is an array?",
    answer1: "'pie'",
    answer2: "2", 
    answer3: "true",
    answer4: "['pie', 2, true]",
    correct: "['pie', 2, true]"
}
var question4 = {
    question: "What follows an if/else?",
    answer1: "curly brackets", 
    answer2: "brackets", 
    answer3: "an ultimatum", 
    answer4:"paranthesis",
    correct: "paranthesis"
}
var question5 = {
    question: "What is my favorite programming language?",
    answer1: "German", 
    answer2: "HTML", 
    answer3: "javascript",
    answer4: "CSS",
    correct: "javascript"
}



// Create a variable to select the button
var startButton = document.querySelector("#startButton");
// Create variables for elements that will be removed
var disItems1 = document.querySelector("#intro");
var disItems2 = document.querySelector("#startButton");

//Create variable for questions, answers, and correct answer
var questionR = document.querySelector("#question")
var answer1R = document.querySelector("#choice1")
var answer2R = document.querySelector("#choice2")
var answer3R = document.querySelector("#choice3")
var answer4R = document.querySelector("#choice4")
var correctR = document.querySelector("#correctContainer")

// Function: if start button is pressed
startButton.addEventListener("click", function() {
    // intro p will disappear
    disItems1.remove();
    // start button will disappear
    disItems2.remove();
    // timer will show up
    // timer will countdown
    // if timer === 0, timer will stop and run function to end quiz
    var countdown = setInterval(function() {
        timer--;
        timerEl.textContent = timer;
        if (timer === 0) {
            clearInterval(countdown);
        }
        // function to end quiz
    }, 1000)
    
    // question1 question will appear
    questionR.textContent = question1.question;
    // question1 answer buttons will appear
    var choice1B = document.createElement("button");
    choice1B.type = "button";
    choice1B.id = "1button";
    choice1B.textContent = question1.answer1;
    answer1R.appendChild(choice1B)
    choice1B.setAttribute("style", "font-size:30px;")

    var choice2B = document.createElement("button");
    choice2B.type = "button";
    choice2B.id = "2button";
    choice2B.textContent = question1.answer2;
    answer2R.appendChild(choice2B)
    choice2B.setAttribute("style", "font-size:30px;")

    var choice3B = document.createElement("button");
    choice3B.type = "button";
    choice3B.id = "3button";
    choice3B.textContent = question1.answer3;
    answer3R.appendChild(choice3B)
    choice3B.setAttribute("style", "font-size:30px;")

    var choice4B = document.createElement("button");
    choice4B.type = "button";
    choice4B.id = "4button";
    choice4B.textContent = question1.answer4;
    answer4R.appendChild(choice4B)
    choice4B.setAttribute("style", "font-size:30px;")

    // if user selects a wrong answer, 2 seconds are taken away
    choice1B.addEventListener("click", function() {
        timer -= 2;
        timerEl.textContent = timer;
        if (timer <= 0) {
            clearInterval(countdown);
            timerEl.textContent = "0"
        };
        // The user is made aware they chose the wrong answer in the correctContainer
        correctR.textContent = "INCORRECT!";
        correctR.setAttribute("style", "font-size:50px; color:red;");
    })

    choice2B.addEventListener("click", function() {
        timer -= 2;
        timerEl.textContent = timer;
        if (timer <= 0) {
            clearInterval(countdown);
            timerEl.textContent = "0"
        }
        correctR.textContent = "INCORRECT!"
        correctR.setAttribute("style", "font-size:50px; color:red;")
    })

    choice4B.addEventListener("click", function() {
        timer -= 2;
        timerEl.textContent = timer;
        if (timer <= 0) {
            clearInterval(countdown);
            timerEl.textContent = "0"
        }
        correctR.textContent = "INCORRECT!"
        correctR.setAttribute("style", "font-size:50px; color:red;")
    })

    // if user selects the correct answer, function is invoked to take user to the next question
    choice3B.addEventListener("click", function() {
        correctR.textContent = "CORRECT! Javascript is a programming language!"
        correctR.setAttribute("style", "font-size:50px; color:green;")
        q2();
        
    })
    
    function q2() {
    var disItem1 = document.querySelector("#1button")
    var disItem1 = document.querySelector("#2button")
    var disItem1 = document.querySelector("#3button")
    var disItem1 = document.querySelector("#4button")

    disItem1.remove();
    disItem2.remove();
    disItem3.remove();
    disItem4.remove();
}
})

