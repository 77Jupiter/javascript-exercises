const palindromes = function (string) {
  // const stringArray = string.split('');
  // const comparisonString = stringArray
  //   .slice()
  //   .filter((char) => char !== ' ' && char !== ',')
  //   .join('');
  // const punctuation = stringArray
  // .filter((char) => char === '!' || char === '.');
  // const reverseString = stringArray
  // .filter((char) => char !== '!' && char !== '.' && char !== ' ' && char !== ',')
  // .reverse();
  // if (string.charAt(0) === string.charAt(0).toUpperCase()) {
  //   reverseString.splice(0, 1, reverseString[0].toUpperCase());
  //   const lastIndex = reverseString.length - 1; 
  //   reverseString.splice(lastIndex, 1, reverseString[lastIndex].toLowerCase());
  // }     
  // const joinString = reverseString.concat(punctuation).join('');    
  // return joinString === comparisonString? true : false;
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

  // Create a new reversed string for comparison
  const reversedString = cleanedString.split('').reverse().join('');

  // Return the outcome of the comparison which will either be true or false
  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
