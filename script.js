const button16 = document.getElementById("16");
const button32 = document.getElementById("32")
const button64 = document.getElementById("64");
const button128 = document.getElementById("128");

const pallette = document.getElementById("pallette");
const resetButton = document.getElementById("reset-button");

var radios = document.forms["size-selector"].elements["grid_size"];
for(radio in radios) {
    radios[radio].onclick = function() {
        renderPallette(this.value);
    }
}

button16.checked = true;
gridSize = document.querySelector('input:checked').value;

resetButton.addEventListener("click", () => {
    gridSize = document.querySelector('input:checked').value;    
    renderPallette(gridSize)
});

function renderPallette(size) {
    pallette.innerHTML = "";
    for (i = 0; i < (size * size); i++) {
        gridSquare = document.createElement("div");
        gridSquare.style = `height: ${512 / size}px; width: ${512 / size}px`;
        gridSquare.classList.add("grid-square");
        pallette.appendChild(gridSquare);
    }

    gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style = `height: ${512 / size}px; width: ${512 / size}px; background-color: rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
        })
    });
}

renderPallette(gridSize);