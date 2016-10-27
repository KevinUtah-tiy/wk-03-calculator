"use strict";

console.clear();//clears the console/display for each use

var arr = []; //global

function reduceToOutput (arr) {
  return arr.reduce(function(previousValue, currentValue) {
    console.log(previousValue, currentValue);//shows up on the console what the two input numbers were
    previousValue = previousValue || "";//the previous value is the same as the previous value or else it is an empty string
    currentValue = previousValue + currentValue;
    return currentValue;//combining the previous value with the current value for the user to obtain an answer
  });
}

function display (value, append) {
  //append === true append value to the display
  //append !== true replace display with value
  var display = document.querySelector('.display');
  if (!append) {
    display.innerHTML = value;//beginning value once input by the user
  }
  else
  {
    display.innerHTML += value;//the resulting display after commands have been ran
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
