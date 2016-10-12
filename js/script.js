console.clear();

// link buttons to an imput
// window.prompt ('');

var arr = []; //global

function userInput (value) {
  arr.push(value);
  console.log(arr);
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

// document.getElementById('').onclick = userInput;
