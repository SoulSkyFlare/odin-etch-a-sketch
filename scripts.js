const container = document.getElementById('grid-container');
for (i=0; i<16*16; i++){
    const squareDiv = document.createElement("div");
    squareDiv.classList.add('grid-block');
    container.appendChild(squareDiv);
}