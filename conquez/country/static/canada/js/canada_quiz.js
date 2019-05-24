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
        document.getElementById('buttons1').innerText = "Compared to 1986-2005, the average annual Canadian temperature is projected to increase between 1.8 °C - 6.3 °C."
    }
    else if (question === 2){
        document.getElementById('buttons2').innerText = "Climate change is caused by the increase in concentrations of greenhouse gases. "
    }
    else if (question === 3){
        document.getElementById('buttons3').innerText = "Only 11% of plastic is recycled in Canada; the rest is either incinerated or is dumped in our landfills, lakes, and parks."
    }
    else {
        document.getElementById('buttons4').innerText = "Plastic waste is damaging to ecosystems and is life-threatening to its inhabiting animals. ";
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
