let container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseover", changeColor);
    container.appendChild(div);
}
let random = "rgb("+ Math.floor(Math.random() * 256)+ "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";

function changeColor(e) {
    e.target.style.backgroundColor = "rgb("+ Math.floor(Math.random() * 256)+ "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
   // e.target.classList.add("change");
}

const newGrid = document.querySelector(".newGrid");
let newContainer = 0;
newGrid.addEventListener("click", changeGrid);
let userSize;
let boxSize;
function changeGrid() {
    do {
        userSize = prompt("Enter new grid size");
        if (userSize === null || userSize === "") {
            break;
        }
        if (userSize > 100 || isNaN(userSize)) {
            alert("Enter a number less than 100");
        }
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