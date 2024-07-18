/*
Create a file named data.js.

Inside data.js, define an array of objects, each representing a person with properties like name, age, and location.

Export the array using the ES6 module syntax.

Create another file named app.js.

In app.js, import the array of person objects from the data.js module.

Write a function that calculates and prints the average age of all the persons in the array.

Use the imported array and the average age function in app.js.

Run app.js and confirm that the average age is correctly calculated and displayed.*/

export const people = [
    {
      name: "Alice Johnson",
      age: 30,
      location: "New York, NY"
    },
    {
      name: "Bob Smith",
      age: 25,
      location: "San Francisco, CA"
    },
    {
      name: "Charlie Davis",
      age: 35,
      location: "Chicago, IL"
    },
    {
      name: "Diana King",
      age: 28,
      location: "Austin, TX"
    },
    {
      name: "Edward Brown",
      age: 40,
      location: "Seattle, WA"
    }
  ];
  export function calcAvgAge(array){
    const sum = array.reduce(
        (accumulator, currenValue)=>accumulator+currenValue.age,0);
    console.log(sum/array.length);
    }