var score1 = 0;
var score2 = 0;
var name_one = localStorage.getItem("name_1");
var name_two = localStorage.getItem("name_2");
var answer = "player_two";
var question = "player_one";
function turn_display() {
    document.getElementById("question").innerHTML = "<h3>" + "Question turn: " + name_one + "</h3>";
    document.getElementById("answer").innerHTML = "<h3>" + "Answer turn: " + name_two + "</h3>";

}

function back() {
    window.location = "index.html";
}

function send() {
    num1 = document.getElementById("num_1").value;
    num2 = document.getElementById("num_2").value;
    label1 = "<label>" + num1 + "</label>";
    label2 = "<label> x </label>";
    label3 = "<label>" + num2 + "</label><br><br>";
    button = "<button id = 'outputButton' onclick = 'check()'>Check</button><br>";
    input = "<input id = 'value' type = 'text' placeholder='Answer...'><br><br>";
    document.getElementById("output").innerHTML = label1 + label2 + label3 + input + button;
}

function check() {
    answer = document.getElementById("value").value;
    score = 0;
    if (answer == num1 * num2) {
        if (answer = "player_two") {
        answer = "player_one";
        document.getElementById("score1").innerHTML = name_one + "'s score = " + score1 + 1;
        }
        //else  {
           // answer = "player_two";
           // document.getElementById("score2").innerHTML = name_two + "'s score = " + score2 + 1;
           // }
    }
    if (question == name_one) {
        question = name_two;
    }
    if (question == name_two) {
        question = name_one;
    }
    document.getElementById("output").innerHTML = "";
}
