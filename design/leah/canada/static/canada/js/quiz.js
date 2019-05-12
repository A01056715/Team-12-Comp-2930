let question = ["Why is Taj-Mahal turning yellow ?<br /><br />",
    "Which Letter Comes after B in ALPHABETS? <br /><br />",
    "What is 1 + 1?<br /><br />",
    "What is 2 + 2?<br /><br />",
    "Which is the heaviest 1kg of feathers or 1kg of iron?"];

let answer1 = ["<button class=buttons002 onclick=question1correct()>1</button> Due to reaction with SO2",
    "<button class=buttons002 onclick=q1Incorrect()>2</button>Pollution",
    "<button class=buttons002 onclick=q1Incorrect()>3</button>Friction",
    "<button class=buttons002 onclick=q1Incorrect()>4</button>I don't know"];

let answer2 = ["<button class=buttons002 onclick=question2correct()>A</button>",
    "<button class=buttons002 onclick=q2Incorrect()>C</button>",
    "<button class=buttons002 onclick=q2Incorrect()>F</button>",
    "<button class=buttons002 onclick=q2Incorrect()>I </button>"];

let correct = ["Correct!! Due to reaction with SO2 , Taj-Mahal turning yellow",
    "Correct, A comes before B", "Correct", "Correct"];
let incorrect = ["<button class=buttons002 onclick=begin001()> <- </button>Incorrect!!!! Try Agin",
    "Incorrect", "Incorrect", "Incorrect"];
//<div id = "submit"><button id = "submit-button">Submit</button></div>

let n = 0;
n++;
let s = 0;
s++;

function begin001() {
    disappear001.innerHTML = "";
    question1.innerHTML = question[0];
    option1.innerHTML = answer1[0];
    option2.innerHTML = answer1[1];
    option3.innerHTML = answer1[2];
    option4.innerHTML = answer1[3];
    answer.innerHTML = "";
    number1.innerHTML = n++;
}

function question1correct() {
    answer.innerHTML = "<div id=green001>" + correct[0] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
    score.innerHTML = s++;
}
function q1Incorrect() {
    answer.innerHTML = "<div id=red001>" + incorrect[0] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next1.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
}
// function question2correct() {
//     answer.innerHTML = "<div id=green001>" + correct[1] + "</div>";
//     option1.innerHTML = "";
//     option2.innerHTML = "";
//     option3.innerHTML = "";
//     option4.innerHTML = "";
//     next.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
//     score.innerHTML = s++;
// }
// function q2Incorrect() {
//     answer.innerHTML = "<div id=red001>" + incorrect[1] + "</div>";
//     option1.innerHTML = "";
//     option2.innerHTML = "";
//     option3.innerHTML = "";
//     option4.innerHTML = "";
//     next1.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
// }

