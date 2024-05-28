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

/*
Exercise 3 : Repeat The Question
Instructions
Prompt the user for a number.
Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

While the number is smaller than 10 continue asking the user for a new number.
Tip : Which while loop is more relevant for this situation?
*/

/*let numberPrompt;
numberPrompt= prompt("Please insert a number");
numberPrompt = Number(numberPrompt);
if (typeof numberPrompt == 'number') {
do {
prompt("Please insert a number");
}
while (numberPrompt < 10);
break;
}
/*break;
else {
    alert("this is not a number");
}

/*
🌟 Exercise 4 : Building Management
Instructions:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


Review About Objects
Copy and paste the above object to your Javascript file.
*/
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

/*

Console.log the number of floors in the building.

Console.log how many apartments are on the floors 1 and 3.

Console.log the name of the second tenant and the number of rooms he has in his apartment.

Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.*/

console.log(building.numberOfFloors);
console.log("in floor 1 there are " + building.numberOfAptByFloor.firstFloor + " and in floor 3 there are " + building.numberOfAptByFloor.thirdFloor + " apartments");
console.log(building.nameOfTenants[1] + ' , ' + building.numberOfRoomsAndRent.dan[0]);
let sumSaDa = building.numberOfRoomsAndRent.sarah[1] +  building.numberOfRoomsAndRent.david[1];
console.log(sumSaDa);
if (sumSaDa > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log(building.numberOfRoomsAndRent.dan[1]);
}


/*
🌟 Exercise 5 : Family
Instructions
Create an object called family with a few key value pairs.
Using a for in loop, console.log the keys of the object.
Using a for in loop, console.log the values of the object.
*/
const family = {
    mother: "Sarah",
    father: "David",
    daugther: "Emily",
    son: "Jason"
}
for (const x in family) {
    console.log(x);
    }
for (const x in family) {
        console.log(family[x]);
        }


/*
Exercise 6 : Rudolf
Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
*/
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  }
let sentence = '';
  for (const x in details) {
    let sentence = x + " " + details[x] + " ";
    //sentence.concat(sentenceNext);
    console.log(sentence);
    //console.log(x.concat(details[x]));
    }   




/*
Exercise 7 : Secret Group
Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
Hint: a string is an array of letters
Console.log the name of their secret society. The output should be “ABJKPS”
*/
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

for (const x in names) {
    let firstLetter = names[x].charAt(0);
    //firstLetter.sort()
    console.log(firstLetter);
    }   
    








