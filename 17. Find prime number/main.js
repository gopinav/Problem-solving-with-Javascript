function findPrimeNumber(number) {
    var i, flag = true;

    for(i = 2; i <= number - 1; i++) {
        if(number % i == 0) {
            flag = false;
            break;
        }
    }

    if(flag == true)
        return number + " is prime";
    else
        return number + " is not prime";
}

console.log(findPrimeNumber(1));
console.log(findPrimeNumber(5));
console.log(findPrimeNumber(2));
console.log(findPrimeNumber(12));
console.log(findPrimeNumber(15));
