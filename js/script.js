"use strict";

console.clear();

// link buttons to an imput
// window.prompt ('');

var arr = []; //global

function userInput (value) {
  arr.push(value);
  // document.getElementByClass('display').innerHTML = arr;
  console.log(arr);
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
  calculate(arr[0], arr[1], arr[2]);
}

function getGuess() {
  return document.querySelector('input').value;
}
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
