const removeFromArray = function(array, ...argument) {
  return array.filter(value => !argument.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
