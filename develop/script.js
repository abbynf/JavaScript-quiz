var startButton = document.getElementById("start")
var questionContent = document.getElementById("questionEl");
var button1 = document.getElementById("opt1");
var button2 = document.getElementById("opt2");
var button3 = document.getElementById("opt3");
var button4 = document.getElementById("opt4");
var q = 0;
var score = 0;
var submitBtn = document.getElementById("submit");
var userInitials;
var highScores = [];


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

    listQuestions(questions[q]);

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
    document.getElementById("highScoresDiv").style.display = "block";
    for (i = 0; i < sessionStorage.length; i++){
        var storedScore = sessionStorage.getItem(sessionStorage.key(i))
        console.log(storedScore);
        var listScore = document.createElement("p");
        var listScoreContent = document.createTextNode(storedScore);
        listScore.appendChild(listScoreContent)
        document.getElementById("scoreListDiv").appendChild(listScore);
    }

}


button1.addEventListener("click", function(){
    if (button1.innerHTML === questions[q].rightAnswer){
        correctAnswer();
    }
    else {
        incorrectAnswer();
    }
    q++;
    if (q==10){
        document.getElementById("quizQuestions").style.display = "none";
        yourScore();
        return;
    }
    listQuestions(questions[q]);
})

button2.addEventListener("click", function(){
    if (button2.innerHTML === questions[q].rightAnswer){
        correctAnswer();
    }
    else {
        incorrectAnswer();
    }
    q++;
    if (q==10){
        document.getElementById("quizQuestions").style.display = "none";
        yourScore();
        return;
    }
    listQuestions(questions[q]);
})

button3.addEventListener("click", function(){
    if (button3.innerHTML == questions[q].rightAnswer){
        correctAnswer();
    }
    else {
        incorrectAnswer();
    }
    q++;
    if (q==10){
        document.getElementById("quizQuestions").style.display = "none";
        yourScore();
        return;
    }
    listQuestions(questions[q]);
})

button4.addEventListener("click", function(){

    if (button4.innerHTML === questions[q].rightAnswer){
        correctAnswer();
    }
    else {
        incorrectAnswer();
    }
    q++;
    if (q==10){
        document.getElementById("quizQuestions").style.display = "none";
        yourScore();
        return;
    }
    listQuestions(questions[q]);
})

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    userInitials = document.getElementById("intials").value;
    newSave = userInitials + "  --  " + score;
    function saveScores(newKey, newSaveInput){
        sessionStorage.setItem(newKey, newSaveInput)
    }
    var newKey = 1;
    saveScores(newKey, newSave);
    document.getElementById("submitScores").style.display = "none";
    showHighScores();
})


