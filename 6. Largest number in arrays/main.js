// 1. With a for loop

function largestOfFour(arr) {
  var largestNumber = [0,0,0,0];
  for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
   for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
      if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {         
         largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
       }
   }
}
return largestNumber;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

/*

2. With map method

function largestOfFour(mainArray) {
  return mainArray.map(function (subArray){
    return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
      return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
    }, 0);
  });
}

3. With Math.max() method

function largestOfFour(mainArray) {
  return mainArray.map(function(subArray) {
    return Math.max.apply(null, subArray);
  });
}

*/
