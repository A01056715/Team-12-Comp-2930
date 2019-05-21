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
    return answer === 'A';
}

function validator1(bool) {
    if (bool === true) {
        score++;
        document.getElementById("heading1").innerHTML = "CORRECT";
    } else {
        document.getElementById("heading1").innerHTML = "INCORRECT";
    }
    explanationRender1()
}

function explanationRender1() {
    document.getElementById('buttons1').innerText = "This is the explanation of qus1"
}

// for question 2
function checkAnswer2(answer){
    return answer === 'B';
}

function validator2(bool) {
    if (bool === true){
        score++;
        document.getElementById( "heading2").innerHTML = "CORRECT";
    }
    else {
        document.getElementById("heading2").innerHTML = "INCORRECT";
    }
    explanationRender2()
}


function explanationRender2() {
    document.getElementById('buttons2').innerText = "This is the explanation of qus2"
}



// for question 3


function checkAnswer3(answer){
    return answer === 'B';
}

function validator3(bool) {
    if (bool === true){
        score++;
        document.getElementById( "heading3").innerHTML = "CORRECT";
    }
    else {
        document.getElementById("heading3").innerHTML = "INCORRECT";
    }
    explanationRender3()
}

function explanationRender3() {
    document.getElementById('buttons3').innerText = "This is the explanation of qus1"
}

// for question 4

function checkAnswer4(answer){
    return answer === 'B';
}

function validator4(bool) {
    if (bool === true){
        score++;
        document.getElementById( "heading4").innerHTML = "CORRECT";
    }
    else {
        document.getElementById("heading4").innerHTML = "INCORRECT";
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