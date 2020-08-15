var startButton = document.getElementById("start")


function startTimer(){
    console.log(window);
    // added empty function to start the timer, i don't know how to do it yet
}

function listQuestions(){
    document.getElementById("quizQuestions").style.display = "block";

}

startButton.addEventListener("click", function(){
    // This function hides the welcome/starting screen
    document.getElementById("startingScreen").style.display = "none";

    //Starts the display of the quiz questions
    document.getElementById("quizQuestions").style.display = "block";

    //Starts function that fills in the quiz questions div
    listQuestions();

    // Starts the timer in the upper right hand corner
    startTimer();


})

console.log(questions.Q1.choice1.accuracy)