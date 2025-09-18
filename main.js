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

    containerDiv.appendChild(div)
}
}
gridSquares(256);
