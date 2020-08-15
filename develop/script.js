var startButton = document.getElementById("start")
var questionContent = document.getElementById("questionEl");
var button1 = document.getElementById("opt1");
var button2 = document.getElementById("opt2");
var button3 = document.getElementById("opt3");
var button4 = document.getElementById("opt4");
var i = 0;
var score = 0;
var submitBtn = document.getElementById("submit");
var userInitials;


// function startTimer(){
//     console.log(window);
//     // added empty function to start the timer, i don't know how to do it yet
// }

function showQuestions(){
    document.getElementById("quizQuestions").style.display = "block";
}

function listQuestions(list){
    questionContent.innerHTML = list.question;
    button1.innerHTML = list.choice1;
    button2.innerHTML = list.choice2;
    button3.innerHTML = list.choice3;
    button4.innerHTML = list.choice4;
}

function correctAnswer(){
    document.getElementById("rightAnswer").style.display = "block";
    setTimeout(function(){
        document.getElementById("rightAnswer").style.display = "none";
    }, 1000);
    score = score + 5;
}

function incorrectAnswer(){
    document.getElementById("wrongAnswer").style.display = "block";
    setTimeout(function(){
        document.getElementById("wrongAnswer").style.display = "none";
    }, 1000);
}

startButton.addEventListener("click", function(){
    // This function hides the welcome/starting screen
    document.getElementById("startingScreen").style.display = "none";

    //Starts the display of the quiz questions
    document.getElementById("quizQuestions").style.display = "block";

    //Starts function that fills in the quiz questions div
    showQuestions();

    listQuestions(questions[i]);

    // Starts the timer in the upper right hand corner
    // startTimer();
})

function yourScore(){
    document.getElementById("submitScores").style.display = "block";
    var endScore = "Your score is " + score;
    document.getElementById("scoreDisplay").innerHTML = endScore
    console.log(endScore);
}

function showHighScores(){
    
}


button1.addEventListener("click", function(){
    if (button1.innerHTML === questions[i].rightAnswer){
        correctAnswer();
    }
    else {
        incorrectAnswer();
    }
    i++;
    if (i==10){
        document.getElementById("quizQuestions").style.display = "none";
        yourScore();
        return;
    }
    listQuestions(questions[i]);
})

button2.addEventListener("click", function(){
    if (button2.innerHTML === questions[i].rightAnswer){
        correctAnswer();
    }
    else {
        incorrectAnswer();
    }
    i++;
    if (i==10){
        document.getElementById("quizQuestions").style.display = "none";
        yourScore();
        return;
    }
    listQuestions(questions[i]);
})

button3.addEventListener("click", function(){
    if (button3.innerHTML == questions[i].rightAnswer){
        correctAnswer();
    }
    else {
        incorrectAnswer();
    }
    i++;
    if (i==10){
        document.getElementById("quizQuestions").style.display = "none";
        yourScore();
        return;
    }
    listQuestions(questions[i]);
})

button4.addEventListener("click", function(){

    if (button4.innerHTML === questions[i].rightAnswer){
        correctAnswer();
    }
    else {
        incorrectAnswer();
    }
    i++;
    if (i==10){
        document.getElementById("quizQuestions").style.display = "none";
        yourScore();
        return;
    }
    listQuestions(questions[i]);
})

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    userInitials = document.getElementById("intials").value;
    function saveScores(initialsInput, scoreInput){
        sessionStorage.setItem(initialsInput, scoreInput)
    }
    saveScores(userInitials, score);
    document.getElementById("submitScores").style.display = "none";
    showHighScores();
})


