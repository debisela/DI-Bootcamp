"use strict";
// Exercise 1: Hello, World! Program
// What You Will Learn:
// How to create a simple TypeScript program.
// How to define and log variables of different types.
// Instructions
// Create a TypeScript program that logs the message “Hello, World!” to the console.
let message = "Hello World";
console.log(message);
// Exercise 2: Type Annotations
// What You Will Learn:
// How to use type annotations in TypeScript.
// How to define and log variables with specified types.
// Instructions
// Define a variable age of type number and a variable name of type string, and log them to the console.
let age = 25;
let myname = "Debi";
console.log(`my name is ${myname} and I am ${age} years old`);
// Exercise 3: Union Types
// What You Will Learn:
// How to use union types in TypeScript.
// How to define variables that can hold either a string or a number.
// Description: Use union types to declare a variable that can hold either a string or a number.
// Instructions
// Use union types to declare a variable id that can be either a string or a number.
let id;
// Exercise 4: Control Flow with if...else
// What You Will Learn:
// How to use if...else statements to control program flow.
// How to handle different conditions using if...else statements.
// Instructions
// Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.
// Use if...else statements to control the flow of a program.
const takeNumber = (a) => {
    if (a > 0) {
        return "the number is positive";
    }
    else if (a === 0) {
        return "the number is 0";
    }
    return "the number is negative";
};
// Exercise 5: Tuple Types
// What You Will Learn:
// How to use tuple types in TypeScript.
// How to define functions that return multiple values of different types.
// Instructions
// Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
// The tuple should contain multiple values of different types
// // Call the function and log the tuple
// const details = getDetails("Alice", 25);
// // Expected output
// console.log(details); // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']
const getDetails = (name, age) => {
    let c = `Hello, ${name}! You are ${age} years old`;
    let mytuple = [name, age, c];
    return mytuple;
};
const createPerson = (name, age) => {
    return { name, age };
};
console.log(createPerson("John", 40));
// Exercise 7: Type Assertions
// What You Will Learn:
// How to use type assertions in TypeScript to cast an element to a specific type.
// How to access and manipulate properties of an HTML element after casting.
// Description:
// In this exercise, you’ll learn how to use type assertions to cast an HTML element to a specific type in TypeScript. This allows you to safely access and manipulate properties of the element.
// Instructions
// Get an Element from the DOM:
// Use document.getElementById() to retrieve an HTML element from the DOM.
// Use Type Assertion:
// Apply a type assertion to cast the element to a specific HTML element type, such as HTMLInputElement.
// Access the Element’s Properties:
// Once cast, use the properties of the specific element type, like setting the value of an input element.
// Test the Functionality:
// Ensure that you can successfully set or manipulate a property of the element.
// Additional Notes:
// Type assertions are a powerful way to let TypeScript know more about the type of an element when you’re certain of it. However, you should use them cautiously, as incorrect assertions can lead to runtime errors if the type is not as expected.
const div = document.getElementById("domelement");
div.textContent = "hello";
function greet(name) {
    if (name) {
        return `hello ${name}`;
    }
    else {
        return `hello you!`;
    }
}
