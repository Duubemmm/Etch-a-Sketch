const clearButton = document.querySelector(".clear-btn")
const chooseColor = document.querySelector(".choose-color")
// create the header
const headingDiv = document.querySelector(".h1-div")
const h1 = document.createElement("h1")
h1.innerHTML = "Etch-a-Sketch"
h1.classList.add("h1")
headingDiv.appendChild(h1)

// create the 16 by 16 grid
const containerDiv = document.getElementById("container-div")

function gridSquares(numberOfGrid){
for(let i = 0; i < numberOfGrid; i++){
    const div = document.createElement("div")
    div.classList.add("grid-square")

    containerDiv.appendChild(div);

div.addEventListener("mouseover", () => {
div.style.backgroundColor = "black"
    })


clearButton.addEventListener("click", () => {
    div.style.backgroundColor = "#abe4af"
})
}
}
gridSquares(256);
