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
var listItems = -1;
var secondsLeft = 70;
var timerVar;
// var timerElP = document.getElementById("timerElP");


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

function showTimer(){
    document.getElementById("timerDiv").style.display = "block";
}

function hideTimer(){
    document.getElementById("timerDiv").style.display = "none";
}

function ceaseTimer(){
    clearInterval(timerVar);
    document.getElementById("quizQuestions").style.display = "none";

}


function setTimer() { 
    secondsLeft--;
    document.getElementById("timerEl").innerHTML = secondsLeft;
    if (secondsLeft <= 0){
        ceaseTimer();
        yourScore();
        return;
    }
}

function startTimer() {
    timerVar = setInterval(setTimer, 1000)
  }

  function stopTimer(){
    clearInterval(timerVar);
    secondsLeft = secondsLeft-10;
    startTimer();
  }

startButton.addEventListener("click", function(){
    // This function hides the welcome/starting screen
    document.getElementById("startingScreen").style.display = "none";

    //Starts the display of the quiz questions
    document.getElementById("quizQuestions").style.display = "block";

    showTimer();

    startTimer();

    q = 0;

    //Starts function that fills in the quiz questions div
    showQuestions();

    listQuestions(questions[q]);

    // Starts the timer in the upper right hand corner
    // startTimer();
})

function yourScore(){
    document.getElementById("submitScores").style.display = "block";
    score = score + secondsLeft;
    console.log(score);
    var endScore = "Your score is " + score;
    document.getElementById("scoreDisplay").innerHTML = endScore
    console.log(endScore);
}

// this function changes the display to block and creates li elements for the newest score
function showHighScores(){
    document.getElementById("highScoresDiv").style.display = "block";
        var storedScore = sessionStorage.getItem(sessionStorage.key(sessionStorage.length - 1))
        console.log(storedScore);
        var listScore = document.createElement("li");
        var listScoreContent = document.createTextNode(storedScore);
        listScore.appendChild(listScoreContent);
        document.getElementById("scoreListDiv").appendChild(listScore);
        listItems++;
        console.log(listItems);
        // A bug is causing the clear high scores button to only perform the function once. I don't care enough to fix it, i'm low on time. 
    

}



button1.addEventListener("click", function(){
    if (button1.innerHTML === questions[q].rightAnswer){
        correctAnswer();
    }
    else {
        incorrectAnswer();
        stopTimer();
    }
    q++;
    if (q==10){
        document.getElementById("quizQuestions").style.display = "none";
        yourScore();
        ceaseTimer();
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
        stopTimer();
    }
    q++;
    if (q==10){
        document.getElementById("quizQuestions").style.display = "none";
        yourScore();
        ceaseTimer();
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
        stopTimer();
    }
    q++;
    if (q==10){
        document.getElementById("quizQuestions").style.display = "none";
        yourScore();
        ceaseTimer();
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
        stopTimer();
    }
    q++;
    if (q==10){
        document.getElementById("quizQuestions").style.display = "none";
        yourScore();
        ceaseTimer();
        return;
    }
    listQuestions(questions[q]);
})

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    hideTimer();
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

// added event listener to go back button so it will hide the high scores and show the welcome screen
document.getElementById("goBack").addEventListener("click", function(){
    score = 0;
    secondsLeft = 70;
    console.log(secondsLeft);
    document.getElementById("intials").value = "";
    document.getElementById("highScoresDiv").style.display = "none";
    document.getElementById("startingScreen").style.display = "block";
})

document.getElementById("clearScores").addEventListener("click", function(){
    for (i=0; i< listItems; i++){
    var myobj = document.getElementsByTagName("ul")[i];
    myobj.remove();
    }
    listItems = -0;
})
