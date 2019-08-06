var pile1Count = document.getElementById("pile1Count");
var pile1Input = document.getElementById("pile1Input");
var pile1Button = document.getElementById("pile1Button");

var pile2Count = document.getElementById("pile2Count");
var pile2Input = document.getElementById("pile2Input");
var pile2Button = document.getElementById("pile2Button");

var pile3Count = document.getElementById("pile3Count");
var pile3Input = document.getElementById("pile3Input");
var pile3Button = document.getElementById("pile3Button");

var turnDisplay = document.getElementById("turn");

var pile1 = 3;
var pile2 = 4;
var pile3 = 5;
var turn = "Player 1";

pile1Button.addEventListener("click", takePile1);
pile2Button.addEventListener("click", takePile2);
pile3Button.addEventListener("click", takePile3);

function takePile1() {
    if (pile1Input.value > 0 && pile1Input.value <= pile1 && pile1Input.value == parseInt(pile1Input.value, 10)) {
        pile1 = pile1 - pile1Input.value;
        pile1Count.innerHTML = "1st pile: " + pile1;

        pile1Input.value = "";
        pile1Input.setAttribute("max", pile1);

        if (pile1 == 0) {
            pile1Input.disabled = true;
            pile1Button.disabled = true;
        }

        switchTurn();
    }
}

function takePile2() {
    if (pile2Input.value > 0 && pile2Input.value <= pile2 && pile2Input.value == parseInt(pile2Input.value, 10)) {
        pile2 = pile2 - pile2Input.value;
        pile2Count.innerHTML = "2nd pile: " + pile2;

        pile2Input.value = "";
        pile2Input.setAttribute("max", pile2);

        if (pile2 == 0) {
            pile2Input.disabled = true;
            pile2Button.disabled = true;
        }

        switchTurn();
    }
}

function takePile3() {
    if (pile3Input.value > 0 && pile3Input.value <= pile3 && pile3Input.value == parseInt(pile3Input.value, 10)) {
        pile3 = pile3 - pile3Input.value;
        pile3Count.innerHTML = "3rd pile: " + pile3;

        pile3Input.value = "";
        pile3Input.setAttribute("max", pile3);

        if (pile3 == 0) {
            pile3Input.disabled = true;
            pile3Button.disabled = true;
        }

        switchTurn();
    }
}

function switchTurn() {
    if (pile1 == 0 && pile2 == 0 && pile3 == 0) {
        turnDisplay.style.color = "#ff4c00";
        turnDisplay.innerHTML = turn + " wins";
    }
    else {
        if (turn == "Player 1") {
            turn = "Player 2";
        }
        else if (turn == "Player 2") {
            turn = "Player 1";
        }

        turnDisplay.innerHTML = turn + "'s turn";
    }
}
