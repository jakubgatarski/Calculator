const btnAC = document.getElementById("btn-AC");
let screen = document.getElementById("screen");
const btnPlus = document.getElementById("btn-+");
const btnMinus = document.getElementById("btn--");
const btnMultiply = document.getElementById("btn-*");
const btnDivide = document.getElementById("btn-/");
const btnEqual = document.getElementById("btn-=");
let a = 0;
let b = 0;
let flagPlus = false;
let flagMinus = false;
let flagMultiply = false;
let flagDivide = false;

//add number <0;9> to screen
document.addEventListener('click', function (e) {
    for (let i = 0; i < 10; i++) {
        if (e.target && e.target.id == 'btn-' + i) {

            if (screen.innerText == '0') {
                screen.innerText = i;
            } else {
                screen.innerText += i;

            }
        }
    }
});
//reset calculator values
btnAC.addEventListener("click",function (){
    a = 0;
    b = 0;
    screen.innerText = 0;
})
//addition function changes changes 1 flag to true so we can remember the state
btnPlus.addEventListener("click", function () {
    flagPlus = true;
    flagMinus = false;
    flagMultiply = false;
    flagDivide = false;
    //saves previous value and parses it to int type
    if (screen.innerText !== '0') {
        a = parseInt(screen.innerText);
        screen.innerText = '0';
    }
});
//substracion function
btnMinus.addEventListener("click", function () {
    flagPlus = false;
    flagMinus = true;
    flagMultiply = false;
    flagDivide = false;
    if (screen.innerText !== '0') {
        a = parseInt(screen.innerText);
        screen.innerText = '0';
    }
});
//multiplication function
btnMultiply.addEventListener("click", function () {
    flagPlus = false;
    flagMinus = false;
    flagMultiply = true;
    flagDivide = false;
    if (screen.innerText !== '0') {
        a = parseInt(screen.innerText);
        screen.innerText = '0';
    }
});
//divide function
btnDivide.addEventListener("click", function () {
    flagPlus = false;
    flagMinus = false;
    flagMultiply = false;
    flagDivide = true;
    if (screen.innerText !== '0') {
        a = parseInt(screen.innerText);
        screen.innerText = '0';
    }
});
//if we clikc on = btn function checks witch flag is true and performs good action
btnEqual.addEventListener("click", function () {
    b = parseInt(screen.innerText)
    parseInt(a);
    if (flagPlus == true) {
        screen.innerText = a + b;
    } else if (flagMinus == true) {
        screen.innerText = a - b;
    } else if (flagMultiply == true) {
        screen.innerText = a * b;
    } else if (flagDivide == true) {
        screen.innerText = a / b;
    }
});
