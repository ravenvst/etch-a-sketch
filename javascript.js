const container = document.querySelector(".container");

for (let i = 0; i < 256; i++){
    addDiv();
}

function addDiv() {  
    const div = document.createElement("div");
    container.appendChild(div);
}

function requestNumber () {
    let number = prompt("Please enter the number of squares");
}



