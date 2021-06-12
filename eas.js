let colorChoice = "black";
let colorInput = "";
main(16);

// Create 16x16 grid of square divs
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

function randBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomRGB(min, max) {
    const r = randBetween(min, max);
    const g = randBetween(min, max);
    const b = randBetween(min, max);
    return `rgb(${r}, ${g}, ${b})`;
}

function inputColor(e) {
    return e.target.value;
}

function changeColorChoice(e) {
    switch (e.target.id) {
        case "black":
            colorChoice = "black";
            break;
        case "rainbow":
            colorChoice = "rainbow";
            break;
        case "erase":
            colorChoice = "erase";
            break;  
        case "input-color":
            colorChoice = inputColor(e);    
            break;
    }
} 

function colorCell(e) {
    switch (colorChoice) {
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
            e.target.style.backgroundColor = colorChoice;
            break;       
    }
}

function clearGrid() {
    let elements = document.getElementsByClassName("grid-item");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "rgb(196, 196, 196)";
    }
}

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
    main(size);
}

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

function main(size) {
    makeGrid(size);
    actions();
}

