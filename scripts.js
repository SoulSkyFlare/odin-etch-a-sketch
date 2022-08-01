const container = document.getElementById('grid-container');

function changeColor(e){
    e.target.classList.add("block-active");
}

function createDivs(n){
for (i=0; i<n**2; i++){
    const squareDiv = document.createElement("div");
    squareDiv.classList.add('grid-block');
    container.style.setProperty('grid-template-columns', `repeat(${n}, 1fr)`)
    container.appendChild(squareDiv);
    const divs = document.querySelectorAll(".grid-block");
    divs.forEach(item => item.addEventListener('mouseover', changeColor));
}
}



createDivs(16);

function setSquarePerSide(){
    let squares = prompt("Choose the squares you want per side");
    if(squares>100){
        alert("You can only choose up to 100 squares per side!")
    }
    else {
        while(container.firstChild){
            container.removeChild(container.lastChild)
        }
        createDivs(squares);
    }
}

const btn = document.querySelector(".btn")
btn.addEventListener("click", setSquarePerSide)
