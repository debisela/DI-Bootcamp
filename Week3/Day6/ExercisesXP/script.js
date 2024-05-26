/*
🌟 Exercise 1 : List Of People
Instructions
const people = ["Greg", "Mary", "Devon", "James"];


Part I - Review About Arrays
Write code to remove “Greg” from the people array.

Write code to replace “James” to “Jason”.

Write code to add your name to the end of the people array.

Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

Write code to make a copy of the people array using the slice method.
The copy should NOT include “Mary” or your name.
Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
Hint: Check out the documentation for the slice method

Write code that gives the index of “Foo”. Why does it return -1 ?

Create a variable called last which value is the last element of the array.
Hint: What is the relationship between the index of the last element in the array and the length of the array?
*/
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people);
people.splice(2,1,"Jason");
console.log(people);
people.push("Debi");
console.log(people);
console.log(people.indexOf("Mary"))
let newPeople = people.slice(1)
console.log(newPeople)
console.log(people.indexOf("Foo"))
//The indexOf() method returns -1 if the value is not found.
let last = people.slice(people.indexOf("Debi"));
console.log(last)
console.log(people);

/*
Part II - Loops
Using a loop, iterate through the people array and console.log each person.

Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
Hint: take a look at the break statement in the lesson.
*/
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}

for (let i = 0; i <= people.indexOf("Devon"); i++) {
    console.log(people[i])
}

/*
 Exercise 2 : Your Favorite Colors
Instructions
Create an array called colors where the value is a list of your five favorite colors.
Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
Hint : create an array of suffixes to do the Bonus
*/
let colors = ["red","yellow","blue"]
for (let i = 0; i < colors.length; i++) {
    console.log("My number " + (i+1) +" is " +colors[i])
}
let colors2 = ["red","yellow","blue"]
for (let i = 0; i < colors2.length; i++) {
    let suffix = 0
    if (i<1){
        suffix = "st"
    }
    else {
        suffix = "nd"
    }
    console.log("My " + (i+1) + suffix + " choice is " +colors2[i])
}





