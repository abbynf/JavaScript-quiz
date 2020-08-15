var startButton = document.getElementById("start")
var questionContent = document.getElementById("questionEl");
var button1 = document.getElementById("opt1");
var button2 = document.getElementById("opt2");
var button3 = document.getElementById("opt3");
var button4 = document.getElementById("opt4");
var i = 1;


function startTimer(){
    console.log(window);
    // added empty function to start the timer, i don't know how to do it yet
}

function showQuestions(){
    document.getElementById("quizQuestions").style.display = "block";
}

function listQuestions(list){
    questionContent.innerHTML = list.question;
    button1.innerHTML = list.choice1;
    button2.innerHTML = list.choice2;
    button3.innerHTML = list.choice3;
    button4.innerHTML = list.choice4;
    i++;
}

startButton.addEventListener("click", function(){
    // This function hides the welcome/starting screen
    document.getElementById("startingScreen").style.display = "none";

    //Starts the display of the quiz questions
    document.getElementById("quizQuestions").style.display = "block";

    //Starts function that fills in the quiz questions div
    showQuestions();

    listQuestions(questions[0]);

    // Starts the timer in the upper right hand corner
    startTimer();
})

// document.getElementById("buttonWrapper").addEventListener("click", function(){
//     var i = 0
//     listQuestions(questions[i])
//     i++;
// })

button1.addEventListener("click", function(){
    listQuestions(questions[i]);
})