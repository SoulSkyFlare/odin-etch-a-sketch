const container = document.getElementById('grid-container');

function createDivs(n)
for (i=0; i<n; i++){
    const squareDiv = document.createElement("div");
    squareDiv.classList.add('grid-block');
    container.appendChild(squareDiv);
}

function changeColor(e){
    e.target.classList.toggle("block-active");
}

const divs = document.querySelectorAll(".grid-block");
divs.forEach(item => item.addEventListener('mouseover', changeColor));

createDivs(16*16);