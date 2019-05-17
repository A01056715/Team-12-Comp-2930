const explain = document.getElementById('explanation');
const question = document.getElementsByClassName('wrapper');
const ques_1_A = document.getElementById('1A');
const ques_1_B = document.getElementById('1B');
const ques_1_C = document.getElementById('1C');
const ques_1_D = document.getElementById('1D');

function checkAnswer1(answer){
    if (answer === 'A'){
        console.log('Correct?');
    }
    else {
        console.log('Incorrect?');
    }
}

ques_1_A.addEventListener("click", function checkIt() {checkAnswer1('A');});
ques_1_B.addEventListener("click", function checkIt() {checkAnswer1('B');});
ques_1_C.addEventListener("click", function checkIt() {checkAnswer1('C');});
ques_1_D.addEventListener("click", function checkIt() {checkAnswer1('D');});
