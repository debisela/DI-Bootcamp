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

/*
🌟 Exercise 5 : Juice Bar
Instructions
You will use nested functions, to open a new juice bar.

Part I:
The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.*/

function makeJuice(size) {
    let ingredients = [];
function addIngredients(ingredient1,ingredient2,ingredient3){
    let newDiv = document.createElement('div');
let divText = document.createTextNode("The client wants a "+size+" size juice, containing "+ingredient1+", "+ingredient2+", "+ingredient3+".");
newDiv.appendChild(divText);
    document.body.appendChild(newDiv)
    ingredients.push(ingredient1,ingredient2,ingredient3)
    console.log(ingredients);
}
function displayJuice(){
    let newDiv = document.createElement('div');
let divText = document.createTextNode("The client wants a "+size+" size juice, containing "+(ingredients));
newDiv.appendChild(divText);
    document.body.appendChild(newDiv)
}
addIngredients("orange","apple","mango");
addIngredients("banana","strawberry","lemon")
displayJuice()
}
makeJuice("medium");

/*
Part II:
In the makeJuice function, create an empty array named ingredients.

The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.*/

