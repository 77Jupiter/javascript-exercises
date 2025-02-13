const fibonacci = function(number) {
  let firstValue = 1;
  let secondValue = 0;
  let sum = 0;
  if (number < 0) return 'OOPS';

  for (let i = 0; i < number; i++) {
    sum = firstValue + secondValue;
    firstValue = secondValue;
    secondValue = sum;
  }
  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
