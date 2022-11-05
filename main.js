let container = document.querySelector(".container");
const resetBtn = document.querySelector(".resetBtn");
const rgbBtn = document.querySelector(".rgbBtn");
const blackBtn = document.querySelector(".blackBtn");
let black = 0;


for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseover", changeColor);
    container.appendChild(div);
}
let squares = document.querySelectorAll(".square");


rgbBtn.addEventListener("click", useRgb);

// CALL changeColor FUNCTION FOR EVERY SQUARE

function useRgb() {
    squares.forEach((square) => {
        square.removeEventListener("mouseover", blacker);
        square.addEventListener("mouseover", changeColor);
    });
}

// CHANGE COLOR TO RANDOM RGB

function changeColor(e) {
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);
    let divideColor1 = color1 * 0.1;
    let divideColor2 = color2 * 0.1;
    let divideColor3 = color3 * 0.1;
    e.target.style.backgroundColor = "rgb("+ color1 + "," + color2 + "," + color3 + ")";
   /* e.target.removeEventListener("mouseover", changeColor);

    e.target.addEventListener("mouseover", () => {
        color1 = color1 - divideColor1;
        color2 = color2 - divideColor2;
        color3 = color3 - divideColor3;
        e.target.style.backgroundColor = "rgb("+ color1 + "," + color2 + "," + color3 + ")";
        console.log(e.target.style.backgroundColor);
    })*/
}
blackBtn.addEventListener("click", toBlack);
function toBlack() {
    squares.forEach((square) => {
        square.removeEventListener("mouseover", changeColor);
        square.addEventListener("mouseover", blacker);
    });
}

function blacker(e) {
    let opa = 0;
    let newOpa = opa + 0.1;
    e.target.style.backgroundColor = "rgba("+ 0 + "," + 0 + "," + 0 + ","  + newOpa + ")";
    e.target.removeEventListener("mouseover", blacker);

    e.target.addEventListener("mouseover", () => {
        newOpa = newOpa + 0.1;
        e.target.style.backgroundColor = "rgba("+ 0 + "," + 0 + "," + 0 + "," + newOpa + ")";
    });
}

//CREATE NEW GRID BASED ON INPUT

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
    squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.remove();
    })

    for (let i = 0; i < userSize; i++) {
        let div = document.createElement("div");
        div.classList.add("square");
        div.style.width = boxSize + "%";
        div.style.height = boxSize + "%";
        div.addEventListener("mouseover", changeColor);
        container.appendChild(div);
    }
    squares = document.querySelectorAll(".square");
    console.log(squares);
}
resetBtn.addEventListener("click", resetGrid);
function resetGrid() {
    //let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    })
}