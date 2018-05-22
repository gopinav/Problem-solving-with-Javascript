function chunkArrayInGroups(arr, size) {
  var chunkyArray = [];
  var index = 0;
  
  while(index < arr.length) {
    chunkyArray.push(arr.slice(index, index+size));
    index+=size;
  }
  return chunkyArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));