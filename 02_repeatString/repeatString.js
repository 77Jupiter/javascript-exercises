const repeatString = function(string, repeatValue) {
  if (repeatValue < 0) {
    return 'ERROR';
  }
  return string.repeat(repeatValue);
};
 
// Do not edit below this line
module.exports = repeatString;
