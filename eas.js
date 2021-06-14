/* Global variables to keep track of button and input color choice. */
let btnChoice = "black";
let colorChoice = "";

updateGrid(16);

/* Creates a square grid of div elements. */
function makeGrid(size) {
    const container = document.getElementById("container");
    container.style.setProperty("--grid-rows", size);
    container.style.setProperty("--grid-cols", size);
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.className = "grid-item";
            container.appendChild(cell);
        }
    }
}

/* Returns random number between min and max (inclusive). */
function randBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/* returns a random RGB color. */
function randomRGB(min, max) {
    if (min < 0 || max > 255) return;
    const r = randBetween(min, max);
    const g = randBetween(min, max);
    const b = randBetween(min, max);
    return `rgb(${r}, ${g}, ${b})`;
}

/* Gets the input of the color wheel. */
function getInputColor(e) {
    return e.target.value;
}

/* Changes color choice variable based on button input. */
function changeColorChoice(e) {
    switch (e.target.id) {
        case "black":
            btnChoice = "black";
            break;
        case "rainbow":
            btnChoice = "rainbow";
            break;
        case "erase":
            btnChoice = "erase";
            break;  
        case "input-color":
            btnChoice = getInputColor(e);    
            break;
    }
} 

/* Changes color of each div element based on color choice variable. */
function colorCell(e) {
    switch (btnChoice) {
        case "black":
            e.target.style.backgroundColor = "rgb(0, 0, 0)";
            break;
        case "rainbow":
            e.target.style.backgroundColor = randomRGB(0, 255);
            break;  
        case "erase":
            e.target.style.backgroundColor = "rgb(196, 196, 196)";
            break;
        default:
            e.target.style.backgroundColor = btnChoice;
            break;       
    }
}

/* Returns each div element to its default color. */
function clearGrid() {
    let elements = document.getElementsByClassName("grid-item");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "rgb(196, 196, 196)";
    }
}

/* Changes the grid size based on input. */
function changeGridSize() {
    let size = prompt("Enter new size (4-100): ");
    if (size === "") {
        size = 16;
    }
    else if (size > 100) {
        alert("Exceeds max size. Size changed to 100.");
        size = 100;
    }
    else if (size < 4) {
        alert("Subceeds min size. Size changed to 4.");
        size = 4;
    }
    clearGrid();
    updateGrid(size);
}

/* Sets actions for divs, buttons, and color input. */ 
function actions() {
    const cells = document.querySelectorAll(".grid-item");
    const clearBtn = document.querySelector("#clear");
    const sizeBtn = document.querySelector("#size");
    const rainbowBtn = document.querySelector("#rainbow");
    const blackBtn = document.querySelector("#black");
    const eraseBtn = document.querySelector("#erase");
    const inputClr = document.querySelector("#input-color");

    cells.forEach(div => div.addEventListener("mouseover", colorCell));
    clearBtn.addEventListener("click", clearGrid);
    sizeBtn.addEventListener("click", changeGridSize);
    rainbowBtn.addEventListener("click", changeColorChoice);
    blackBtn.addEventListener("click", changeColorChoice);
    eraseBtn.addEventListener("click", changeColorChoice);
    inputClr.addEventListener("input", changeColorChoice);
}

/* Updates and refreshes grid after size change. */
function updateGrid(size) {
    makeGrid(size);
    actions();
}

