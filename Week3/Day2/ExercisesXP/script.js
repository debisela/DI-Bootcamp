// Exercise 1: Your Favorite Food
//Instructions
//Store your favorite food into a variable.
//Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
//Console.log I eat <favorite food> at every <favorite meal>

let favFood = "Pizza";
let favMeal = "Breakfast";
console.log("I eat " + favFood + " at every " + favMeal);

/*Exercise 2 : Series
Instructions
Part I
Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
For example : black mirror, money heist, and the big bang theory

Console.log a sentence using both of the variables created above
For example : I watched 3 series : black mirror, money heist, and the big bang theory*/
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"]
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);
let myWatchedSeriesSentence = myWatchedSeries.join(", ");
console.log("I watched 3 series: "+myWatchedSeriesSentence);

/*Part II
Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
Add, at the end of the array, the name of another series you watched.
Add, at the beginning of the array, the name of your favorite series.
Delete the series “black mirror”.
Console.log the third letter of the series “money heist”.
Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.*/
myWatchedSeries.splice(2,1,"friends");
myWatchedSeries.push("seinfeld");
myWatchedSeries.splice(0,0,"how I met your mother");
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);
/* Exercise 3 : The Temperature Converter
Instructions
Store a celsius temperature into a variable.

Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32*/
let celsius = (25);
console.log(celsius+"°C is "+((celsius/5*9)+25)+"°F");
/*Exercise 4 : Guess The Answers #1
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.*/

 let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: 55, because 34 and 21 are numbers and give 55 added
    // Actual:55


    a = 2;

    console.log(a+b) //second expression
    // Prediction: 23, because now a is 2, so 2+21 is 23
    // Actual:23
    /*
    What will be the outcome of a + b in the first expression ? 55
What will be the outcome of a + b in the second expression ? 23
What is the value of c? nothing defined

Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5');
outcome: 75, because 3,4 are numbers, so 3+4 is 7. 5 is a string so it will show 5
*/
/*
Exercise 5 : Guess The Answers #2
Instructions
For each expression, in a Javascript file in VS CODE, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
typeof(15)
// Prediction:
// Actual:

typeof(5.5)
// Prediction:
// Actual:

typeof(NaN)
// Prediction:
// Actual:

typeof("hello")
// Prediction:
// Actual:

typeof(true)
// Prediction:
// Actual:

typeof(1 != 2)
// Prediction:
// Actual:

"hamburger" + "s"
// Prediction:
// Actual:

"hamburgers" - "s"
// Prediction:
// Actual:

"1" + "3"
// Prediction:
// Actual:

"1" - "3"
// Prediction:
// Actual:

"johnny" + 5
// Prediction:
// Actual:

"johnny" - 5
// Prediction:
// Actual:

99 * "hello"
// Prediction:
// Actual:

1 != 1
// Prediction:
// Actual:

1 == "1"
// Prediction:
// Actual:

1 === "1"
// Prediction:
// Actual:

Exercise 6 : Guess The Answers #3
Instructions
For each expression, in a Javascript file in VS CODE, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
5 + "34"
// Prediction:
// Actual:

5 - "4"
// Prediction:
// Actual:

10 % 5
// Prediction:
// Actual:

5 % 10
// Prediction:
// Actual:

" " + " "
// Prediction:
// Actual:

" " + 0
// Prediction:
// Actual:

true + true
// Prediction:
// Actual:

true + false
// Prediction:
// Actual:

false + true
// Prediction:
// Actual:

false - true
// Prediction:
// Actual:

!true
// Prediction:
// Actual:

3 - 4
// Prediction:
// Actual:
    










