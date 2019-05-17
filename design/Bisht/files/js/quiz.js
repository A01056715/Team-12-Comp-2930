// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choices = document.getElementById("choices");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const ansDiv = document.getElementById("answerContainer");
const timer = document.getElementById("timer");


// create our questions
let questions = [
    {
        question : "1. What does HTML stand for?",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        explanation: "Blah Blah Blah",
        correct : "A"
    },{
        question : "2. What does CSS stand for?",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        choiceD : "Wrong",
        explanation: "Blah Blah Blah",
        correct : "B"
    },{
        question : "3. What does JS stand for?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        explanation: "Blah Blah Blah",
        correct : "C"
    },{
        question : "4. What does JS stand for?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        explanation: "Blah Blah Blah",
        correct : "D"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
const questionTime = 10; // 10s
let count = questionTime;
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

let progressGaugeWidth = 350;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

// start quiz
function startQuiz(){
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,2000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count >= 0){

        if (count >= 10) {
            counter.innerHTML = "0:" + count;
        } else {
            counter.innerHTML = "0:0" + count;
        }

        timeGauge.style.width = count * gaugeUnit + "px";
        count--;
    }else{
        count = questionTime;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    count = questionTime;
    if( answer === questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = questionTime;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        explanationRender();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

//Explanation()
function explanationRender() {
  let q = questions[runningQuestion];
    ansDiv.innerHTML = "<p>"+ q.explanation +"</p>";
    ansDiv.innerHTML += "<button onclick='goNext()' class = 'next'>" + "Go To Next Question" + "</button>"

  // $("#timer").animate({visibility: "hidden"});
  // $("#question").fadeOut('slow');
  // $(".choice").fadeOut("slow",$("#answerContainer").fadeIn('slow'));


    ansDiv.style.display = "block";
    timer.style.visibility = "hidden";
    question.style.display = "none";
    choices.style.visibility = "hidden";
}

function goNext() {
    // $("#answerContainer").fadeOut();
    // $("#question").fadeIn(10000);
    // $("#timer").animate({
    //     visibility: "visible",
    // });
    // $(".choice").fadeIn();
    question.style.display = "block";
    ansDiv.style.display = "none";
    timer.style.visibility = "visible";
    choices.style.visibility = "visible";
    renderQuestion();
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    progress.style.display = "none";
    timer.style.visibility = "hidden";
    timeGauge.style.display = "none";
    question.style.visibility = "hidden";


    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    scoreDiv.innerHTML = "<p>Score: "+ scorePerCent +"%</p>";

    if (scorePerCent >= 75) {
        scoreDiv.innerHTML += "<p>Congratulations; you've conquered this country!</p>"
    } else {
        scoreDiv.innerHTML += "<p>Try again!</p>"
    }

    scoreDiv.innerHTML += "<a href='https://conquez.herokuapp.com/home'>"+"Go Back" + "</a>";
}

function quit() {
    prompt("Are you sure you want to quit? Your progress will not be saved if you do so");
}




















