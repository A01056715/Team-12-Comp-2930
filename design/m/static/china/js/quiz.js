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
        question : "What recycling-related thing does China do that heavily influenced the behaviour of other developed countries?",
        choiceA : "Banned import",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        explanation: "Explanation comes here",
        correct : "A"
    },{
        question : "Which Chinese city is home to the world's biggest air purifier?",
        choiceA : "Wrong",
        choiceB : "Xian",
        choiceC : "Wrong",
        choiceD : "Wrong",
        explanation: "Explanation comes here",
        correct : "B"
    },{
        question : "What is China's proportion of the global net increase in leaf area? ",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "25%",
        choiceD : "Wrong",
        explanation: "Explanation comes here",
        correct : "C"
    },{
        question : "Which part of China has the most efficient recycling systems in the world?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Taiwan",
        choiceD : "Wrong",
        explanation: "Explanation comes here",
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
    start.style.display = "none";
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
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++;
    }else{
        count = 0;
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
    clearInterval(TIMER);
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
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

//Explanation()
function explanationRender() {
  let q = questions[runningQuestion];
  ansDiv.style.display = "block";

  ansDiv.innerHTML = "<p>"+ q.explanation +"</p>";
  ansDiv.innerHTML += "<button onclick='goNext()'>" + "Go To Next Question" + "</button>"
}

function goNext() {
  ansDiv.style.display = "none";
  return;
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    scoreDiv.innerHTML = "<p>Score: "+ scorePerCent +"%</p>";
    scoreDiv.innerHTML += "<a href='https://conquez.herokuapp.com/home'>"+"Go Back" + "</a>";
}






















