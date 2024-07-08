/*
🌟 Exercise 1 : Comparison
Instructions
Create a function called compareToTen(num) that takes a number as an argument.
The function should return a Promise:
the promise resolves if the argument is less than or equal to 10
the promise rejects if argument is greater than 10.
Test:

//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))*/

 const compareToTen = (number) => {
    return new Promise((resolve, reject) => {
        if (number <= 10){
            resolve("correct");
        } else {
            reject("wrong");
        }
    
  });
};
compareToTen(11)
  .then(result => console.log(result))
  .catch(error => console.log(error))

/*
🌟 Exercise 2 : Promises
Instructions
Create a promise that resolves itself in 4 seconds and returns a “success” string.*/

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 4000);
});
promise.then((result => {
    console.log(result);
}))

/*
🌟 Exercise 3 : Resolve & Reject
Instructions
Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”*/

let resolvePromise = Promise.resolve(3);
let rejectPromise = Promise.reject("Boo!");

resolvePromise
.then(result => console.log(result))
.catch(error => console.log(error));

rejectPromise
.then(result => console.log(result))
.catch(error => console.log(error));


