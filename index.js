// Create an Etch-A-Sketch Game
const container = document.getElementById("container")
const gridItem = document.getElementsByClassName("grid-item")
let newGrid = document.getElementById("newGrid")




// Create 16x16 grid of square divs inside of another divs
function createGame(rowcol) {
    container.style.setProperty("--grid-rows", rowcol)
    container.style.setProperty("--grid-cols", rowcol)
    container.innerHTML = ""
    for (i = 0; i < (rowcol * rowcol); i++) {
        let cell = document.createElement("div")
        cell.addEventListener("mouseenter", newColor)
        container.appendChild(cell).className = "grid-item"
    }

    // newGrid.addEventListener("click", () => {
    //     container.style.backgroundColor = null
    // })

}

createGame(16)


// Set up a hover effect so teh divs change color when the mouse passes over them leaving a trail
// function newColor (e) {
//     e.target.style.backgroundColor = "blue"
// }


//Generate a random number between 0 and 255 to be used as RGB code.
function random (){return Math.round(Math.random() * 255)}

//Generates a new RGB color and paints with it the cell that generated the event (mouseover).
function newColor (square){
    square.target.style.backgroundColor = `rgb(${random()},${random()},${random()})`
}

// Slider to pick the size of the grid
const rangeSlider = document.getElementById("sliderRange")
let output = document.getElementById("sliderValue")
output.innerHTML = rangeSlider.value 

// Shows the value of the slider on the screen
rangeSlider.oninput = () => {
    output.textContent = rangeSlider.value
}

// When the user stops sliding, this changes the dimensions of the board
rangeSlider.onchange = () => {
    output.textContent = rangeSlider.value;
    console.log(rangeSlider.value)
    let size = rangeSlider.value
    createGame(size)
}

// Clears the board by reloading the window
function resetGame() {
    window.location.reload()
}


// Add a button to the top of the screen which will clear the current grid
newGrid.addEventListener("click", resetGame)
// Let the user clear the grid


// Set up a color pallette
// Add CSS