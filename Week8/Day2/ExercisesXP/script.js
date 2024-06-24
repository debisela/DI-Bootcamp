/*
 Exercise 1 : Find The Sum
Instructions
Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.*/
/*regular:
function sum(a, b){
    return a+b;
}*/
//arrow:
/*const sum = (a, b) => a + b;
//check:
let result = sum(4, 5);
console.log(result);*/

/*
 Exercise 2 : Kg And Grams
Instructions
Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

First, use function declaration and invoke it.
Then, use function expression and invoke it.
Write in a one line comment, the difference between function declaration and function expression.
Finally, use a one line arrow function and invoke it.*/
//function declaration:
/*function weightConversion(kg){
    return kg*1000
}
weightConversion(10);
//check
let result = weightConversion(10);
console.log(result);*/
//function expression:
/*let convert = function (kg){
    return kg*1000
}
convert(10);
//check
let result = convert(10);
console.log(result);*/
//difference function declaration/ expression: function declaration is hoisted and can be invoked from everywhere in the script.

/*
 Exercise 3 : Fortune Teller
Instructions
Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."*/
/*(function (children, partner, location, job){
let newDiv = document.createElement('div');
let divText = document.createTextNode("You will be a "+job+" in " +location+" , and married to " + partner+" with "+children+" kids.");
newDiv.appendChild(divText);
    document.body.appendChild(newDiv)
})(3,"Tim","Israel","Doctor");*/

/*
 Exercise 4 : Welcome
Instructions
John has just signed in to your website and you want to welcome him.

Create a Bootstrap Navbar in your HTML file.
In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
The function should add a div in the nabvar, displaying the name of the user and his profile picture.*/


