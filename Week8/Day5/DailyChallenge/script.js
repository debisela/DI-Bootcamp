/*
Create a function that returns true if all parameters are truthy, and false otherwise.

Examples
allTruthy(true, true, true) ➞ true

allTruthy(true, false, true) ➞ false

allTruthy(5, 4, 3, 2, 1, 0) ➞ false*/


//...args -> function can accept any number of arguments
function allTruthy(...args) {
    return args.every(arg => Boolean(arg));
  }
//every method: check if every element of array meets condition
//=> Boolean: convert every element into boolean value
  
let result = allTruthy(true, false, true);
console.log(result);
  