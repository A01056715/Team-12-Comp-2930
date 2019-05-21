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
        is_correct1();
        explanationRender1();
        return true
    }
    else {
        is_wrong1();
        explanationRender1();
        return false
    }
}

function is_correct1() {
    console.log('Correct');
    score++;
    document.getElementById("heading1").innerHTML = "CORRECT";
}
function is_wrong1() {
    console.log('Incorrect');
    document.getElementById("heading1").innerHTML = "INCORRECT";
}
function explanationRender1() {
    document.getElementById('buttons1').innerText = "This is the explanation of qus1"
}

ques_1_A.addEventListener("click", function checkIt0() {checkAnswer1('A');});
ques_1_B.addEventListener("click", function checkIt1() {checkAnswer1('B');});
ques_1_C.addEventListener("click", function checkIt2() {checkAnswer1('C');});
ques_1_D.addEventListener("click", function checkIt3() {checkAnswer1('D');});


// for question 2

function checkAnswer2(answer){
    if (answer === 'B'){
        is_correct2();
        explanationRender2();
        return true
    }
    else {
        is_wrong2();
        explanationRender2();
        return false
    }
}

function is_correct2() {
    console.log('Correct');
    score++;
    document.getElementById("heading2").innerHTML = "CORRECT";
}
function is_wrong2() {
    console.log('Incorrect');
    document.getElementById("heading2").innerHTML = "INCORRECT";
}
function explanationRender2() {
    document.getElementById('buttons2').innerText = "This is the explanation of qus2"
}

ques_2_A.addEventListener("click", function checkIt4() {checkAnswer2('A');});
ques_2_B.addEventListener("click", function checkIt5() {checkAnswer2('B');});
ques_2_C.addEventListener("click", function checkIt6() {checkAnswer2('C');});
ques_2_D.addEventListener("click", function checkIt7() {checkAnswer2('D');});


// for question 3


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
    document.getElementById('buttons3').innerText = "This is the explanation of qus1"
}

ques_3_A.addEventListener("click", function checkIt8() {checkAnswer3('A');});
ques_3_B.addEventListener("click", function checkIt9() {checkAnswer3('B');});
ques_3_C.addEventListener("click", function checkIt10() {checkAnswer3('C');});
ques_3_D.addEventListener("click", function checkIt11() {checkAnswer3('D');});


// for question 4

function checkAnswer4(answer){
    if (answer === 'D'){
        console.log('Correct');
        score++;
        document.getElementById("heading4").innerHTML = "CORRECT"
    }
    else {
        console.log('Incorrect');
        document.getElementById("heading4").innerHTML = "INCORRECT"
    }
    explanationRender4()
}

function explanationRender4() {
    document.getElementById('buttons4').innerText = "This is the explanation of qus1";
    document.getElementById('buttons4').innerHTML += "</br></br><button onclick='scoreRender()'>Click Here To Check Score</button>"
}

function scoreRender(){
    document.getElementById('ques_body').style.display='none';
    document.getElementById('score_container').innerHTML =(score/4)*100 + '%<br><button id="globe">Go Back to Globe</button>'
}
ques_4_A.addEventListener("click", function checkIt12() {checkAnswer4('A')});
ques_4_B.addEventListener("click", function checkIt13() {checkAnswer4('B')});
ques_4_C.addEventListener("click", function checkIt14() {checkAnswer4('C')});
ques_4_D.addEventListener("click", function checkIt15() {checkAnswer4('D')});