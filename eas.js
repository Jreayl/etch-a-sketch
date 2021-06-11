// Create 16x16 grid of square divs
function makeGrid(size) {
    const container = document.getElementById("container");
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.className = "grid-item";
            cell.id = "grid-item" + i + j;
            container.appendChild(cell);
        }
    }
}

function sketch() {}

function colorCell(e) {
    e.target.style.backgroundColor = "red";
}

function clearGrid() {
    let elements = document.getElementsByClassName("grid-item");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "black";
    }
}

makeGrid(16);

const cells = document.querySelectorAll(".grid-item");

cells.forEach(div => div.addEventListener("mouseover", colorCell));

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearGrid);
