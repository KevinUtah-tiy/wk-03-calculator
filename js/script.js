console.clear();

// link buttons to an imput
// window.prompt ('');


// check if NaN

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

function calculate (x, y, cb) {
  // console.log (cb(x, y));
  return cb(x, y);
}
