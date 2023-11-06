const container = document.querySelector(".container");

function addDiv() {  
    const div = document.createElement("div");
    container.appendChild(div);
}

for (let i = 0; i < 256; i++){
    addDiv();
}