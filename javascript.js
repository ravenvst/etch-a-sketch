const container = document.querySelector(".container");
let number = 16;
let squareSize = 960 / number;
const button = document.querySelector("button");
button.addEventListener("click", requestNumber);  

createSketchpad();

function randomNumber () {
    return Math.floor(Math.random() * (256));
}

function randomColor () {
    return "rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";
}

function createSketchpad() {
    for (let i = 0; i < number*number; i++){
        addDiv();
    }
    function addDiv() {  
        const div = document.createElement("div");
        div.style.width = squareSize + "px";
        div.style.height = squareSize + "px";
        div.addEventListener("mouseover", () => div.style.backgroundColor = randomColor());
        container.appendChild(div);
    }
}


function requestNumber () {
    number = prompt("Please enter the number of squares per line (max 100)");
    let list = document.querySelectorAll("div");
    list.forEach(function(node){
        node.remove();
    })
    if (number >= 1 && number <= 100) {
        squareSize = 960 / number;
        createSketchpad();
    } else if (number > 100) {
        alert ("The number has to be 100 or less.");
    } else {
        alert ("ERROR");
    }
}



