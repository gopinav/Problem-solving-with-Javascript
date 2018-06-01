function findAndRemove(arr) {
  var elementsArr = [];

  // Create an array of all elements to be removed
  for (var i = 1; i < arguments.length; i++)
    elementsArr.push(arguments[i]);
  // return elements that do not match (indexOf returns -1)
  return arr.filter(function(element) {
    return elementsArr.indexOf(element) < 0;
  });
}

console.log(findAndRemove([1, 2, 3, 1, 2, 3], 2, 3));
