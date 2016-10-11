console.clear();

// console.log('Kevin sitting in class');

function addition (x, y) {
  // console.log(x + y);
  return x + y;
}

function calculate (x, y, cb) {
  console.log (cb(x, y) );
  return cb(x, y);
}
