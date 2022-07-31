const container = document.getElementById('grid-container');
for (i=0; i<16*16; i++){
    const squareDiv = document.createElement("div");
    squareDiv.classList.add('grid-block');
    container.appendChild(squareDiv);
}

function changeColor(e){
    e.target.classList.toggle("block-active");
}

const divs = document.querySelectorAll(".grid-block");
divs.forEach(item => item.addEventListener('mouseover', changeColor))