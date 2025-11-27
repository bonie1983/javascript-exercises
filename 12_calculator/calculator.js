const add = function(x , y) {
  return x + y;
};

const subtract = function(x , y) {
	return x - y;
};

const sum = function(x) {
  let total = 0;
	for (let i = 0; i < x.length; i++) {
    total += x[i];
  }
  return total;
};

const multiply = function(x) {
  let total = x[0];
  for (let i = 1; i < x.length; i++) {
    total *= x[i];
  }
  return total;
};

const power = function(x , y) {
	return x ** y;
};

const factorial = function(x) {
	let listNumbers = [];
  for (let i = 1; i <= x; i++) {
    listNumbers.push(i);
  }
  if (x === 0) {
    return 1;
  } else {
    return multiply(listNumbers);
  }
};
console.log();

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
