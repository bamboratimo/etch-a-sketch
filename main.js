let container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseover", changeColor);
    container.appendChild(div);
}
let random = "rgb("+ Math.floor(Math.random() * 256)+ "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";

function changeColor(e) {
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);
    let divideColor1 = color1 * 0.1;
    let divideColor2 = color2 * 0.1;
    let divideColor3 = color3 * 0.1;
    e.target.style.backgroundColor = "rgb("+ color1 + "," + color2 + "," + color3 + ")";
    e.target.removeEventListener("mouseover", changeColor);

    e.target.addEventListener("mouseover", () => {
        color1 = color1 - divideColor1;
        color2 = color2 - divideColor2;
        color3 = color3 - divideColor3;
        e.target.style.backgroundColor = "rgb("+ color1 + "," + color2 + "," + color3 + ")";
        console.log(e.target.style.backgroundColor);
    })
}

const newGridBtn = document.querySelector(".newGridBtn");
let newContainer = 0;
newGridBtn.addEventListener("click", changeGrid);
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