"use strict";

console.clear();

// link buttons to an input
// window.prompt ('');

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




  // document.querySelector('.display').innerHTML = arr;
  // function reduceToOutput (arr) {
  //   return arr.reduce(function(previousValue, currentValue) {
  //     console.log(previousValue, currentValue);
  //     previousValue = previousValue || "";
  //     currentValue = previousValue + currentValue;
  //     return currentValue;
  //   });
  // }

  arr.push(value);
  let output = reduceToOutput(arr)
  display(output, false);

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
  let result = cb(x, y);
  display(result, false);
}



function prepCalculate(arr) {
  let x = parseInt(arr[0]);
  let y = parseInt(arr[2]);

  if (arr[1] === "+") {
    // display (calculate(x, addition, y));
    console.log(calculate (x, addition, y));
    // document.querySelector('.display').innerHTML = calculate (x, addition, y);
  } else
  if (arr[1] === "-") {
    // display(calculate (x, addition, y));
      calculate(x, subtraction, y);
      // console.log(calculate (x, subtraction, y));
      // document.querySelector('.display').innerHTML = calculate (x, subtraction, y);
    } else
  if (arr[1] === "*") {
    console.log(calculate (x, multiplication, y));
      calculate(x, multiplication, y);
      // console.log(calculate (x, multiplication, y));
      // document.querySelector('.display').innerHTML = calculate (x, multiplication, y);
    } else
    if (arr[1] === "/") {
      // console.log(calculate (x, division, y));
      calculate (x, division, y);
      // document.querySelector('.display').innerHTML = calculate (x, division, y);
    } else
    if (arr[1] === "%") {
      // console.log(calculate(x, remainder, y));
      calculate (x, remainder, y);
      // document.querySelector('.display').innerHTML = calculate (x, remainder, y);
    }
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
