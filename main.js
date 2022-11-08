let container = document.querySelector(".container");
const resetBtn = document.querySelector(".resetBtn");
const rgbBtn = document.querySelector(".rgbBtn");
const blackBtn = document.querySelector(".blackBtn");

// CHANGE VALUE BASED ON COLOR SELECT
let clicked = false;

// CREATE STARTING GRID AND MAKE IT USE RGB COLORS
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
    clicked = false;
    squares = document.querySelectorAll(".square");
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
    e.target.style.backgroundColor = "rgb("+ color1 + "," + color2 + "," + color3 + ")";
    e.target.classList.add("hei");
   

}

blackBtn.addEventListener("click", toBlack);

// RUN blacker FUNCTION WHEN CLICK BUTTON
function toBlack() {
    if (clicked === true) {
        return;
    }
    clicked = true;
    squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.removeEventListener("mouseover", changeColor);
        square.addEventListener("mouseover", blacker);
    });
}
let opa = 0;
// COLOR BOARD INCREMENTALLY MORE BLACK
function blacker(e) {
    /*if (e.target.classList.contains("hei")) {
        e.target.style.backgroundColor = "";
        e.target.classList.remove("hei");
        return;
    }
    let blackNow = e.target.style.backgroundColor;
    console.log(blackNow);
    let blackPercent = blackNow.slice(-4, -1);
    console.log(blackPercent);
    blackPercent = Number(blackPercent);
    console.log(blackPercent);
    if (blackPercent == 0 || blackPercent < 1) {
    e.target.style.backgroundColor = "rgba("+ 0 + ", " + 0 + ", " + 0 + ", " + (blackPercent + 0.1) + ")";
    } else if (blackPercent == 1) {*/

    let opa = 0;
    opa = opa + 0.1;
    let newOpa = opa + 0.1;
    console.log(newOpa);
    e.target.style.backgroundColor = "rgba("+ 0 + "," + 0 + "," + 0 + ","  + 0.1 + ")";
    e.target.removeEventListener("mouseover", blacker);

    e.target.addEventListener("mouseover", () => {
        opa = opa + 0.1;
        e.target.style.backgroundColor = "rgba("+ 0 + "," + 0 + "," + 0 + "," + opa + ")";
    });
//}
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
    });
    for (let i = 0; i < userSize; i++) {
        let div = document.createElement("div");
        div.classList.add("square");
        div.style.backgroundColor = "";
        div.style.width = boxSize + "%";
        div.style.height = boxSize + "%";
        if (clicked === false) {
            div.addEventListener("mouseover", changeColor);
        } else if (clicked === true ) {
            div.addEventListener("mouseover", blacker);
        }
        container.appendChild(div);
    }
}
// RESET GRID IF CLICK RESET BUTTON
resetBtn.addEventListener("click", resetGrid);

function resetGrid() {
    console.log(clicked);
    squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        if (clicked === false) {
            square.addEventListener("mouseover", changeColor);
        } else if (clicked === true ) {
        square.addEventListener("mouseover", blacker);
        }
        square.style.backgroundColor = "";

    })
}