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

function checkAnswer(answer, question) {
    if (question === 1) {
        return answer === 'A';
    }
    else if (question === 2){
        return answer === 'B'
    }
    else if (question === 3){
        return answer === 'C'
    }
    else{
        return answer === 'D'
    }
}

function validator(bool, question) {
    if (bool === true ) {
        if (question === 1) {
            score++;
            document.getElementById("heading1").innerHTML = "CORRECT";
        }
        else if (question === 2) {
            score++;
            document.getElementById("heading2").innerHTML = "CORRECT";
        }
        else if (question === 3) {
            score++;
            document.getElementById("heading3").innerHTML = "CORRECT";
        }
        else if (question === 4) {
            score++;
            document.getElementById("heading4").innerHTML = "CORRECT";
        }

    } else {
        if (question === 1) {
            document.getElementById("heading1").innerHTML = "INCORRECT";
        } else if (question === 2) {
            document.getElementById("heading2").innerHTML = "INCORRECT";
        } else if (question === 3) {
            document.getElementById("heading3").innerHTML = "INCORRECT";
        } else if (question === 4) {
            document.getElementById("heading4").innerHTML = "INCORRECT";
        }
    }
    explanationRender(question)
}

function explanationRender(question) {
    if (question===1){
        document.getElementById('buttons1').innerText = "This is the explanation of qus1"
    }
    else if (question === 2){
        document.getElementById('buttons2').innerText = "This is the explanation of qus2"
    }
    else if (question === 3){
        document.getElementById('buttons3').innerText = "This is the explanation of qus3"
    }
    else {
        document.getElementById('buttons4').innerText = "This is the explanation of qus4";
        document.getElementById('buttons4').innerHTML += "</br></br><button onclick='scoreRender()'>Click Here To Check Score</button>"


    }
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
    if (scorePercent === 0) {
      document.getElementById('buttons4').innerHTML += '<div id="score_message"><h1>Retreat! <br>Try Again...</h1><br></div>';
    } else if (scorePercent == 25) {
        document.getElementById('buttons4').innerHTML += '<div id="score_message"><h1>Nice try! <br>Maybe next time...</h1><br></div>';
    } else if (scorePercent == 50) {
        document.getElementById('buttons4').innerHTML += '<div id="score_message"><h1>Half way there!</h1><br></div>';
    } else if (scorePercent == 75) {
      document.getElementById('buttons4').innerHTML += '<div id="score_message"><h1>Almost! <br>That was so close!</h1><br></div>';
    } else {
      document.getElementById('buttons4').innerHTML += '<div id="score_message"><h1>Congratulations! <br>You made it!</h1><br></div>';
    }
    document.getElementById('buttons4').innerHTML += '<div id="link"><a href="https://conquez.herokuapp.com/home">Go Back</a></div>';
}
ques_4_A.addEventListener("click", function checkIt12() {checkAnswer4('A');});
ques_4_B.addEventListener("click", function checkIt13() {checkAnswer4('B');});
ques_4_C.addEventListener("click", function checkIt14() {checkAnswer4('C');});
ques_4_D.addEventListener("click", function checkIt15() {checkAnswer4('D');});
