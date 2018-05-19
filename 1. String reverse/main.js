
// 1. With built-in functions

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

/* 
2. With a for loop

function reverseString(str) {
  var newString = '';
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}

*/

/* 
3. With recursion

function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

*/

