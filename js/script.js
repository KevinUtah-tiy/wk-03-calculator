"use strict";

console.clear();

// link buttons to an imput
// window.prompt ('');

var arr = []; //global

function userInput (value) {
  arr.push(value);

document.querySelector('.display').innerHTML = arr;

  console.log(arr);
  // return arr;
  console.log(arr[1]);
}


/* ----  DO NOTHING TO THESE FUNCTIONS ------- */
function addition (x, y) {
  return x + y;
}

function subtraction (x, y) {
  return x - y;
}

function multiplication (x, y) {
  return x * y;
}

function division (x, y) {
  return x / y;
}

function remainder (x, y) {
  return x % y;
}

function calculate (x, cb, y) {
  // console.log (cb(x, y));
  return cb(x, y);
}



function prepCalculate(arr) {
  let x = parseInt(arr[0]);
  let y = parseInt(arr[2]);

  if (arr[1] === "+") {
    calculate(x, addition, y);
    // console.log(calculate (x, addition, y));
    document.querySelector('.display').innerHTML = calculate (x, addition, y);
  } else
  if (arr[1] === "-") {
    console.log(calculate (x, addition, y));
      calculate(x, subtraction, y);
      console.log(calculate (x, subtraction, y));
      document.querySelector('.display').innerHTML = calculate (x, subtraction, y);
    } else
  if (arr[1] === "*") {
    console.log(calculate (x, multiplication, y));
      calculate(x, multiplication, y);
      console.log(calculate (x, multiplication, y));
      document.querySelector('.display').innerHTML = calculate (x, multiplication, y);
    } else
    if (arr[1] === "/") {
      console.log(calculate (x, division, y));
      document.querySelector('.display').innerHTML = calculate (x, division, y);
    } 
}

// function getGuess() {
//   return document.querySelector('input').value;
// }
/*
equalFunction() {
("...") --->xyz
ans = calculate (x, y, z)
display(answ)
}
*/

// function onPageLoad() {
//   clearGuess();
//
// }

// document.querySelector('button').onclick = onGuessCheck;
// window.onLoad = onPageLoad;
