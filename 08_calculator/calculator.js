const add = function(a,b) {
  const result = a + b;
  return result;
};

const subtract = function(a,b) {
	const result = a - b;
  return result;
};

const sum = function(array) {
  const result = array.reduce((sum, item) => sum + item, 0);
  return +result;
};

const multiply = function(array) {
  const result = array.reduce((operation, item) => operation * item, 1)
  return result;
};

const power = function(a,b) {
  const result = a**b;
  return result;
};

const factorial = function(num) {
  let result = 1;
  while (num > 0) {
    result *= num;
    num--;
  }
  return result;
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
