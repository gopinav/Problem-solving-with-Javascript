function removeFalsy(arr) {
  var filteredArr = arr.filter(function(element) {
    return element;
  });
  return filteredArr;
}

removeFalsy([7, "ate", "", false, 9]);