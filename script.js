gridWidth = 16;

for (i = 0; i < (gridWidth * gridWidth); i++) {
    const gridSquare = document.createElement("div");
    const container = document.querySelector('#container');
    const squareWidth = ((1/gridWidth)*600);
    gridSquare.style.cssText = `background-color: red; height: ${squareWidth}px; width: ${squareWidth}px; flex: 1 1 auto;`;
    container.appendChild(gridSquare);
}