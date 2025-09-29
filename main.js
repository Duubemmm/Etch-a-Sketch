const clearButton = document.querySelector(".clear-btn")
const chooseColor = document.querySelector(".color-picker-input")
const chooseRandomColor = document.querySelector(".rainbow-picker-input")
const gridSizeSlider = document.querySelector(".grid-size-slider")
const gridSizeDisplay = document.querySelector(".grid-size-display")

// Initialize variables
const DEFAULT_COLOR = "black"
const DEFAULT_GRID_SIZE = 16 
let userColor = DEFAULT_COLOR;
let currentMode = 'default'
let currentGridSize = DEFAULT_GRID_SIZE 

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
    currentMode = 'rainbow';
});

// Set up color picker event listener
chooseColor.addEventListener("input", (e) => {
    userColor = e.target.value;
    currentMode = 'colorPicker';
});

// Function to determine what color to use based on current mode
function getColorToPaint() {
    switch(currentMode) {
        case 'default':
            return DEFAULT_COLOR;
        case 'colorPicker':
            return userColor;
        case 'rainbow':
            return generateRandomRgbColor();
        default:
            return DEFAULT_COLOR;
    }
}

// Grid creation function
function createGridSquares(gridSize) {
    const containerDiv = document.getElementById("container-div");

    // Clear previous grid
    containerDiv.innerHTML = "";

    const totalSquares = gridSize * gridSize;
    containerDiv.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    containerDiv.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    gridSizeDisplay.textContent = `${gridSize} x ${gridSize}`;
    
    for(let i = 0; i < totalSquares; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-square");
        containerDiv.appendChild(div);
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = getColorToPaint();
        });
        div.addEventListener("click", () => {
            div.style.backgroundColor = getColorToPaint();
        });
    }
}

//slider event listener
    gridSizeSlider.addEventListener("input", (e) => {
        const newSize = parseInt(e.target.value);
        createGridSquares(newSize);
    });

// Initialize the grid with default size
createGridSquares(DEFAULT_GRID_SIZE);

// Clear button logic
clearButton.addEventListener("click", () => {
    const allSquares = document.querySelectorAll(".grid-square");
    allSquares.forEach(square => {
        square.style.backgroundColor = "white";
    });
});