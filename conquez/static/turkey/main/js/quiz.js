const explain = document.getElementById('explanation');
const question = document.getElementsByClassName('wrapper');
const ques_1_A = document.getElementById('1A');
const ques_1_B = document.getElementById('1B');
const ques_1_C = document.getElementById('1C');
const ques_1_D = document.getElementById('1D');
const ques_2_A = document.getElementById('2A');
const ques_2_B = document.getElementById('2B');
const ques_2_C = document.getElementById('2C');
const ques_2_D = document.getElementById('2D');
const ques_3_A = document.getElementById('3A');
const ques_3_B = document.getElementById('3B');
const ques_3_C = document.getElementById('3C');
const ques_3_D = document.getElementById('3D');
const ques_4_A = document.getElementById('4A');
const ques_4_B = document.getElementById('4B');
const ques_4_C = document.getElementById('4C');
const ques_4_D = document.getElementById('4D');
const ansDiv1 = document.getElementById('answerContainer1');
const ansDiv2 = document.getElementById('answerContainer2');
const ansDiv3 = document.getElementById('answerContainer3');
const ansDiv4 = document.getElementById('answerContainer4');

// variables
let score = 0;

function checkAnswer1(answer){
    if (answer === 'A'){
        console.log('Correct');
        score++;
        document.getElementById("heading1").innerHTML = "CORRECT";
    }
    else {
        console.log('Incorrect');
        document.getElementById("heading1").innerHTML = "INCORRECT";

    }
    explanationRender1();
}

function explanationRender1() {
    document.getElementById('buttons1').innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
}
ques_1_A.addEventListener("click", function checkIt0() {checkAnswer1('A');});
ques_1_B.addEventListener("click", function checkIt1() {checkAnswer1('B');});
ques_1_C.addEventListener("click", function checkIt2() {checkAnswer1('C');});
ques_1_D.addEventListener("click", function checkIt3() {checkAnswer1('D');});


function checkAnswer2(answer){
    if (answer === 'B'){
        console.log('Correct');
        score++;
        document.getElementById("heading2").innerHTML = "CORRECT"
    }
    else {
        console.log('Incorrect');
        document.getElementById("heading2").innerHTML = "INCORRECT"

    }
    explanationRender2();
}

function explanationRender2() {
    document.getElementById('buttons2').innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
    }

ques_2_A.addEventListener("click", function checkIt4() {checkAnswer2('A');});
ques_2_B.addEventListener("click", function checkIt5() {checkAnswer2('B');});
ques_2_C.addEventListener("click", function checkIt6() {checkAnswer2('C');});
ques_2_D.addEventListener("click", function checkIt7() {checkAnswer2('D');});





function checkAnswer3(answer){
    if (answer === 'C'){
        console.log('Correct');
        score++;
        document.getElementById("heading3").innerHTML = "CORRECT"
    }
    else {
        console.log('Incorrect');
        document.getElementById("heading3").innerHTML = "INCORRECT"

    }
    explanationRender3()
}

function explanationRender3() {
    document.getElementById('buttons3').innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
}

ques_3_A.addEventListener("click", function checkIt8() {checkAnswer3('A');});
ques_3_B.addEventListener("click", function checkIt9() {checkAnswer3('B');});
ques_3_C.addEventListener("click", function checkIt10() {checkAnswer3('C');});
ques_3_D.addEventListener("click", function checkIt11() {checkAnswer3('D');});


function checkAnswer4(answer){
    if (answer === 'D'){
        console.log('Correct');
        score++;
        document.getElementById("heading4").innerHTML = "CORRECT";
    }
    else {
        console.log('Incorrect');
        document.getElementById("heading4").innerHTML = "INCORRECT";

    }
    explanationRender4();
}

function explanationRender4() {
    document.getElementById('buttons4').innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
    document.getElementById('checkscore_button').innerHTML = "<button id='checkscore' onclick='scoreRender()'>Check Score</button>";
}

function scoreRender(){
    document.getElementsByClassName('card__header--fourth')[0].style.display = "none";
    document.getElementsByClassName('card--fourth')[0].style.background = "#3494e6";
    document.getElementsByClassName('card--fourth')[0].style.background = "-webkit-linear-gradient(to bottom, #3494e6, #ec6ead)";
    document.getElementsByClassName('card--fourth')[0].style.background = "linear-gradient(to bottom, #3494e6, #ec6ead)";
    document.getElementById('checkscore_button').style.display = "none";
    scorePercent = (parseFloat(score/4))*100;
    document.getElementById('buttons4').innerHTML = '<div id="score"><h1>Score:</h1><br></div>';
    document.getElementById('buttons4').innerHTML += '<div id="score_percent"><h1>' + scorePercent + '%</h1><br></div>';
    document.getElementById('buttons4').innerHTML += '<div id="link"><a href="https://conquez.herokuapp.com/home">Go Back</a></div>';
}
ques_4_A.addEventListener("click", function checkIt12() {checkAnswer4('A');});
ques_4_B.addEventListener("click", function checkIt13() {checkAnswer4('B');});
ques_4_C.addEventListener("click", function checkIt14() {checkAnswer4('C');});
ques_4_D.addEventListener("click", function checkIt15() {checkAnswer4('D');});