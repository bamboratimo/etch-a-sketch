let container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseover", changeColor);
    container.appendChild(div);
}

function changeColor(e) {
    e.target.classList.add("change");
}

const newGrid = document.querySelector(".newGrid");
let newContainer = 0;
newGrid.addEventListener("click", changeGrid);
let userSize;
let boxSize;
function changeGrid() {
    do {
        userSize = prompt("Enter new grid size");
    } while (userSize > 100);
    boxSize = 100 / userSize;
    userSize = userSize * userSize;
    container.remove();
    container = document.createElement("div");
    document.body.appendChild(container);
    container.classList.add("container");
    for (let i = 0; i < userSize; i++) {
        let div = document.createElement("div");
        div.classList.add("square");
        div.style.width = boxSize + "%";
        div.style.height = boxSize + "%";
        div.addEventListener("mouseover", changeColor);
        container.appendChild(div);
    }
}