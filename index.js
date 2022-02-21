// Create an Etch-A-Sketch Game
const container = document.getElementById("container")
let gridItem = document.getElementsByClassName("grid-item")

// Create 16x16 grid of square divs inside of another divs
function createGame(rowcol) {
    container.style.setProperty("--grid-rows", rowcol)
    container.style.setProperty("--grid-cols", rowcol)
    for (i = 0; i < (rowcol * rowcol); i++) {
        let cell = document.createElement("div")
        // cell.innerText = (i + 1)
        // console.log(cell)
        cell.addEventListener("mouseenter", newColor)
        container.appendChild(cell).className = "grid-item"
    }
}

createGame(16)
// Set up a hover effect so teh divs change color when the mouse passes over them leaving a trail
function newColor (e) {
    e.target.style.backgroundColor = "blue"
}


container.addEventListener("mouseover", newColor)

// Add a button to the top of the screen which will clear the current grid
// Let the user clear the grid