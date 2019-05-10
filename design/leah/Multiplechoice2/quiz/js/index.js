let question = ["Why is Taj-Mahal turning yellow ?<br /><br />",
    "Which Letter Comes after B in ALPHABETS? <br /><br />",
    "What is 1 + 1?<br /><br />",
    "What is 2 + 2?<br /><br />",
    "Which is the heaviest 1kg of feathers or 1kg of iron?"];

let answer1 = ["<button class=buttons002 onclick=question1correct()>Due to reaction with SO2</button>",
    "<button class=buttons002 onclick=q1Incorrect()>Pollution</button>",
    "<button class=buttons002 onclick=q1Incorrect()>Friction</button>",
    "<button class=buttons002 onclick=q1Incorrect()>I don't know</button>"];

let correct = ["Correct!! Due to reaction with SO2 , Taj-Mahal turning yellow",
    "Correct", "Correct", "Correct"];
let incorrect = ["<button class=buttons002 onclick=begin001()>Incorrect!!!! Try Agin",
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
