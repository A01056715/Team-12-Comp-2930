const explain = document.getElementById('explanation');
const question = document.getElementsByClassName('wrapper');
const ques_1_A = document.getElementById('1A');
const ques_1_B = document.getElementById('1B');
const ques_1_C = document.getElementById('1C');
const ques_1_D = document.getElementById('1D');

ques_1_A.addEventListener("click", checkAnswer1('A'));
ques_1_B.addEventListener("click", checkAnswer1('B'));
ques_1_C.addEventListener("click", checkAnswer1('C'));
ques_1_D.addEventListener("click", checkAnswer1('D'));

function checkAnswer1(answer){
  if (answer === 'A'){
    console.log('Correct')
  }
  else {
    console.log('Incorrect')
  }
}
'use strict';

(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerContain = document.getElementsByClassName('b-container')[0];
  var burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);
})();