const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, number) => sum += number, 0);
};

const multiply = function(arr) {
  return arr.reduce((result, number) => result *= number, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	if (number === 1 || number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
