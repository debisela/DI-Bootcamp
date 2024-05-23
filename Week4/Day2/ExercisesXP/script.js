/*
 Exercise 1 : Information
Instructions
Part I : function with no parameters

Create a function called infoAboutMe() that takes no parameter.
The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
Call the function.
*/
function infoAboutMe(){
    console.log("My name is Debi");
}
infoAboutMe();

/*
Part II : function with three parameters

Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")
*/
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("your name is " + personName + ", you are " + personAge + " years old and your favourite color is " + personFavoriteColor);
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

/*
Exercise 2 : Tips
Instructions
John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

Create a function named calculateTip() that takes no parameter.

Inside the function, use prompt to ask John for the amount of the bill.

Here are the rules
If the bill is less than $50, tip 20%.
If the bill is between $50 and $200, tip 15%.
If the bill is more than $200, tip 10%.

Console.log the tip amount and the final bill (bill + tip).

Call the calculateTip() function.
*/
function calculateTip(){
    let billAmount = prompt("amount of bill");
    if (billAmount<50) {
        console.log(billAmount + " + 20%")
    }
    else if (billAmount<200) {
        console.log(billAmount + " + 15%")
    }
    else {
        console.log(billAmount + " + 10%")
    }
}
calculateTip();

/*
Exercise 3 : Find The Numbers Divisible By 23
Instructions
Create a function call isDivisible() that takes no parameter.

In the function, loop through numbers 0 to 500.

Console.log all the numbers divisible by 23.

At the end, console.log the sum of all numbers that are divisible by 23.

Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
391 414 437 460 483
Sum : 5313


Bonus: Add a parameter divisor to the function.

isDivisible(divisor)

Example:
isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
isDivisible(45) : Console.log all the numbers divisible by 45, and their sum
*/

