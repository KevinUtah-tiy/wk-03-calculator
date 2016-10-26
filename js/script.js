"use strict";

console.clear();

var arr = []; //global

function reduceToOutput (arr) {
  return arr.reduce(function(previousValue, currentValue) {
    console.log(previousValue, currentValue);
    previousValue = previousValue || "";
    currentValue = previousValue + currentValue;
    return currentValue;
  });
}

function display (value, append) {
  //append === true append value to the display
  //append !== true replace display with value
  var display = document.querySelector('.display');
  if (!append) {
    display.innerHTML = value;
  }
  else
  {
    display.innerHTML += value;
  }
}

function userInput (value) {

  arr.push(value);
  let output = reduceToOutput(arr)
  display(output, false);

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
  let result = cb(x, y);
  display(result, false);
}

function prepCalculate(arr) {
  let x = parseInt(arr[0]);
  let y = parseInt(arr[2]);

  if (arr[1] === "+") {
    console.log(calculate (x, addition, y));
  } else
  if (arr[1] === "-") {
      calculate(x, subtraction, y);
    } else
  if (arr[1] === "*") {
    console.log(calculate (x, multiplication, y));
      calculate(x, multiplication, y);
    } else
    if (arr[1] === "/") {
      calculate (x, division, y);
    } else
    if (arr[1] === "%") {
      calculate (x, remainder, y);
    }
}
