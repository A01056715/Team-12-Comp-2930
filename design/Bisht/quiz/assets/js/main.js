// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const explanation = document.getElementById("explanation_container");
const submit_button = document.getElementById("submit_button");
const progress_circles = document.getElementsByClassName("prog")

// create our questions
let questions = [
    {
        question: "Why is Taj-Mahal turning yellow ?",
        imgSrc: "assets/img/tajmahal.jpeg",
        choiceA: "Due to reaction with SO2",
        choiceB: "pollution",
        choiceC: "friction",
        choiceD: "Supernatural Effects",
        correct: "A",
        explanation: "This is the explanation.",
    },{
        question: "Which Letter Comes after B in ALPHABETS?",
        imgSrc: "assets/img/bimg.png",
        choiceA: "C",
        choiceB: "D",
        choiceC: "E",
        choiceD: "F",
        correct: "C",
        explanation: "This is the explanation.",
    },{
        question: "Which is the heaviest 1kg of feathers or 1kg of iron?",
        imgSrc: "assets/img/bimg.png",
        choiceA: "1 kg of wheat",
        choiceB: "1 kg of iron",
        choiceC: "I give up",
        choiceD: "Equal",
        correct: "D",
        explanation: "This is the explanation.",
    },
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
    explanation.style.display = "none";
    quiz.style.display = "block";
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    // qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);
submit_button.addEventListener("click", display_explanation);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    // renderCounter();
    // TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
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
        count++
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

// check Answer

function checkAnswer(answer){
    if( answer === questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();

        explanation.innerHTML = "Correct" + "<br>"
        console.log(score)
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();

        explanation.innerHTML = "Incorrect" + "<br>"
    }
    count = 0;
}


// display explanation
function display_explanation() {
    quiz.style.display = "none";
    explanation.style.display = "block";
    explanation.innerHTML += questions[runningQuestion].explanation;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        setTimeout(renderQuestion, 10000);
    } else {
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

// score render
function scoreRender(){
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);

    scoreDiv.innerHTML = "<p>"+ scorePerCent +"%</p>";
}
