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
        div.addEventListener("mouseover", () => {
            if (div.style.backgroundColor === "" || div.style.backgroundColor === "rgb(0, 0, 0)"){
                div.style.backgroundColor = randomColor();
            } else {

                switch (div.style.filter) {
                    case "brightness(100%)":
                    case "":
                        div.style.filter = "brightness(90%)";
                        break;
                    case "brightness(90%)":
                        div.style.filter = "brightness(80%)";
                        break;
                    case "brightness(80%)":
                        div.style.filter = "brightness(70%)";
                        break;
                    case "brightness(70%)":
                        div.style.filter = "brightness(60%)";
                        break;
                    case "brightness(60%)":
                        div.style.filter = "brightness(50%)";
                        break;
                    case "brightness(50%)":
                        div.style.filter = "brightness(40%)";
                        break;
                    case "brightness(40%)":
                        div.style.filter = "brightness(30%)";
                        break;
                    case "brightness(30%)":
                        div.style.filter = "brightness(20%)";
                        break;  
                    case "brightness(20%)":
                        div.style.filter = "brightness(10%)";
                        break;    
                    case "brightness(10%)":
                        div.style.filter = "brightness(100%)";
                        div.style.backgroundColor = "rgb(0, 0, 0)";
                        break;    
                    
                    
                }
            }          
        });
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



