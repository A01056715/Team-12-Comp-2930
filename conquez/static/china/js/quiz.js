// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const ansDiv = document.getElementById("answerContainer");

// create our questions
let questions = [
    {
        question : "What does HTML stand for?",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        explanation: "Blah Blah Blah",
        correct : "A"
    },{
        question : "What does CSS stand for?",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        choiceD : "Wrong",
        explanation: "Blah Blah Blah",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        explanation: "Blah Blah Blah",
        correct : "C"
    },{
        question : "What does JS stand for?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Correct",
        explanation: "Blah Blah Blah",
        correct : "D"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;
let scorePerCent;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    $("#start").animate({
        top: '0',
        fontSize: '10px',
        width: '75px',
        height: '25px'
    }).fadeOut( function () {
        $("#quiz").fadeIn();
    });
    renderQuestion();
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++;
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            explanationRender();
            runningQuestion++
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer === questions[runningQuestion].correct){
        // answer is correct
        increasescore();
        console.log(score);

        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        explanationRender();
        runningQuestion++;
        renderQuestion();
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

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

//Explanation()
function explanationRender() {
  let q = questions[runningQuestion];
  $("#answerContainer").fadeIn("slow")

  ansDiv.innerHTML = "<p>"+ q.explanation +"</p>";
  ansDiv.innerHTML += "<button onclick='goNext()'>" + "Go To Next Question" + "</button>"
}

function goNext() {
    $("#answerContainer").hide(1000);
    count = 0
}



// score render
function scoreRender() {
    scoreDiv.style.display = "block";
    console.log(score)
    // calculate the amount of question percent answered by the user
    scorePerCent = Math.round(100 * score / questions.length);
    scoreDiv.innerHTML = "<p>" + scorePerCent + "%</p>";
    scoreDiv.innerHTML += "<a href='https://conquez.herokuapp.com/home'>" + "Go Back" + "</a>";
    scoreDiv.innerHTML += "<a href='javascript:validateScore()'>" + "Validate" + "</a>";
}

function increasescore() {
    score++;
}

//AJAX for Retrieving Score
function validateScore() {
    console.log("sucessfully validating score");
    $.ajax({
        type:"GET",
        url: "/get_score/",
        data: { 
            the_score: scorePerCent, country_id: 1 
        },
        dataType: 'json',
        success: function(json) {
            console.log('success');
            // window.location.href = "http://conquez.herokuapp.com/home";
        },
        error: function(xhr, errmsg, err) {
            console.log('Cannot Validate Score');
        }
    });
}





















