//1. With splice method

function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}
console.log(slasher([1, 2, 3], 2));

/* 
2. With slice method

function slasher(arr, howMany) {
  return arr.slice(howMany);
}

*/