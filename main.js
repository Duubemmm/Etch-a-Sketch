const clearButton = document.querySelector(".clear-btn")
const chooseColor = document.querySelector(".color-picker-input")
const chooseRandomColor = document.querySelector(".rainbow-picker-input") // NEW LINE: Selects the rainbow button from HTML

// Initialize variables
const DEFAULT_COLOR = "black"
let userColor = DEFAULT_COLOR; 
let currentMode = 'default'

// Create the header
const headingDiv = document.querySelector(".h1-div")
const h1 = document.createElement("h1")
h1.textContent = "Etch-a-Sketch"
h1.classList.add("h1")
headingDiv.appendChild(h1)

// Function for getting random color
function generateRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Set up rainbow button event listener
chooseRandomColor.addEventListener("click", () => {
    currentMode = 'rainbow'; // Switch to rainbow mode when button is clicked
});

// Set up color picker event listener
chooseColor.addEventListener("input", (e) => {
    userColor = e.target.value;
    currentMode = 'colorPicker'; // Switch to color picker mode when user picks a color
});

// Function to determine what color to use based on current mode
function getColorToPaint() {
    switch(currentMode) {
        case 'default':
            return DEFAULT_COLOR; // Always use the initialized default color
        case 'colorPicker':
            return userColor; // Use the color from color picker
        case 'rainbow':
            return generateRandomRgbColor(); // Generate random color each time
        default:
            return DEFAULT_COLOR;
    }
}

// Create the grid squares
const containerDiv = document.getElementById("container-div")

function gridSquares(numberOfGrid) {
    for(let i = 0; i < numberOfGrid; i++) {
        const div = document.createElement("div")
        div.classList.add("grid-square")
        containerDiv.appendChild(div);

        // Color logic: Uses getColorToPaint() which respects current mode
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = getColorToPaint();
        })
    }
}

gridSquares(256);

// Clear button logic (affects all squares)
clearButton.addEventListener("click", () => {
    const allSquares = document.querySelectorAll(".grid-square");
    allSquares.forEach(square => {
        square.style.backgroundColor = "white";
    });
    console.log("Grid cleared!");
});