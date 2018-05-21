// 1. with a While Loop

function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
console.log(repeatStringNumTimes("abc", 3));

/*

2. Using recursion

function repeatStringNumTimes(string, times) {
  if(times < 0) 
    return "";
  if(times === 1) 
    return string;
  else 
    return string + repeatStringNumTimes(string, times - 1);
}

3. Using ES6 repeat method

function repeatStringNumTimes(string, times) {
  return times > 0 ? string.repeat(times) : "";
}

*/