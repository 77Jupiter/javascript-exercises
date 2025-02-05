const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((accumulator, num) => accumulator + num, 0); 
};

const multiply = function(array) {
  return array.reduce((accumulator, num) => accumulator * num);
};

const power = function(num, power) {
	return Math.pow(num, power);
};

const factorial = function(num) {
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
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
