"use strict";
// 🌟 Exercise 1: Class with Access Modifiers
// What You Will Learn:
// How to use access modifiers (private, protected, and public) in a class.
// How to create methods that interact with private and protected properties.
// Instructions:
// Create a class Employee with the following properties:
// A private property name of type string.
// A private property salary of type number.
// A public property position of type string.
// A protected property department of type string.
// Also, include a constructor to initialize these properties. Create a public method getEmployeeInfo that returns the employee’s name and position.
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getEmployeeInfo() {
        return this.name, this.position;
    }
}
// 🌟 Exercise 2: Readonly Properties in a Class
// What You Will Learn:
// How to use the readonly modifier to make class properties immutable.
// How to prevent modifications to class properties after initialization.
// Instructions:
// Create a class Product with the following properties:
// A readonly property id of type number.
// A public property name of type string.
// A public property price of type number.
// Create a method getProductInfo that returns a string with the product’s name and price. Attempt to modify the id property after creating a new instance of the class and observe the result.
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getProductInfo() {
        return this.name, this.price;
    }
}
let product1 = new Product(1, "Computer", 1200);
console.log(product1);
product1.name = "Phone";
// product1.id = 2 Cannot change id, because read-only
// 🌟 Exercise 3: Class Inheritance
// What You Will Learn:
// How to create a base class and extend it using inheritance.
// How to reuse properties and methods from the base class.
// Instructions:
// Create a base class Animal with a public property name and a method makeSound that returns a string. Create a subclass Dog that extends Animal and overrides the makeSound method to return the sound a dog makes (“bark”). Create an instance of the Dog class and call the makeSound method.
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return "muuu";
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    makeSound() {
        return "bark";
    }
}
let dog = new Dog("Luna");
console.log(dog, dog.makeSound());
// 🌟 Exercise 4: Static Properties and Methods
// What You Will Learn:
// How to use static properties and methods in a class.
// How to access static members without creating an instance of the class.
// Instructions:
// Create a class Calculator with the following static methods:
// add(a: number, b: number): number – returns the sum of two numbers.
// subtract(a: number, b: number): number – returns the difference between two numbers.
// Call these methods without creating an instance of the class.
class Calculator {
    static add(a, b) {
        return a + b;
    }
    static minus(a, b) {
        return a - b;
    }
}
console.log(Calculator.add(5, 6));
console.log(Calculator.minus(5, 6));
function printUserDetails(user) {
    console.log(user.id);
    console.log(user.name);
    console.log(user.email);
    if (user.membershipLevel) {
        console.log(user.membershipLevel);
    }
    else {
        console.log("no membershiplevel");
    }
}
const user1 = {
    id: 2,
    name: "John",
    email: "john@john123",
    membershipLevel: 2
};
const user2 = {
    id: 4,
    name: "Jack",
    email: "jack@john123",
};
printUserDetails(user1);
printUserDetails(user2);
