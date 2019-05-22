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


// for question 1

function checkAnswer1(answer){ // check if the question is correct or not
    return answer === 'A';
}
function validator1(bool) { // perform action according to the value of bool
    if (bool === true) {
        score++;
        document.getElementById("heading1").innerHTML = "CORRECT";
    } else {
        document.getElementById("heading1").innerHTML = "INCORRECT";
    }
    explanationRender1()
}
function explanationRender1() { // render the explanation of the current question
    document.getElementById('buttons1').innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
}


// for question 2

function checkAnswer2(answer){ // check if the question is correct or not
    return answer === 'A';
}
function validator2(bool) { // perform action according to the value of bool
    if (bool === true) {
        score++;
        document.getElementById("heading2").innerHTML = "CORRECT";
    } else {
        document.getElementById("heading2").innerHTML = "INCORRECT";
    }
    explanationRender2()
}
function explanationRender2() { // render the explanation of the current question
    document.getElementById('buttons2').innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
}


// for question 3

function checkAnswer3(answer){ // check if the question is correct or not
    return answer === 'A';
}
function validator3(bool) { // perform action according to the value of bool
    if (bool === true) {
        score++;
        document.getElementById("heading3").innerHTML = "CORRECT";
    } else {
        document.getElementById("heading3").innerHTML = "INCORRECT";
    }
    explanationRender3()
}
function explanationRender3() { // render the explanation of the current question
    document.getElementById('buttons3').innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
}


// for question 4

function checkAnswer4(answer){ // check if the question is correct or not
    return answer === 'A';
}
function validator4(bool) { // perform action according to the value of bool
    if (bool === true) {
        score++;
        document.getElementById("heading4").innerHTML = "CORRECT";
    } else {
        document.getElementById("heading4").innerHTML = "INCORRECT";
    }
    explanationRender4()
}
function explanationRender4() { // render the explanation of the current question
    document.getElementById('buttons4').innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
}


 // renders the score with appropriate message

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
