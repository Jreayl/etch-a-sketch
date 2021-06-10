// Create 16x16 grid of square divs
const container = document.getElementById("container");

function makeGrid(size) {
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.className = "grid-item";
            container.appendChild(cell);
        }
    }
}


makeGrid(16);