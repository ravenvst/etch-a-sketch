const container = document.querySelector(".container");
let number = 16;
const button = document.querySelector("button");
button.addEventListener("click", requestNumber);  // THIS WORKS

createSketchpad();

function createSketchpad() {
    for (let i = 0; i < number*number; i++){
        addDiv();
    }
    
    function addDiv() {  
        const div = document.createElement("div");
        container.appendChild(div);
    }
}




function requestNumber () {
 
    let list = document.querySelectorAll("div");
    list.forEach(function(node){
        node.remove();
    })
    number = prompt("Please enter the number of squares per line (max 100)");
    createSketchpad();
}



