/*
Exercise 1 : Play A Guessing Game
Instructions
Create a new folder on your computer.
Clone or Download the index.html and style.css files from this github link.
Follow the steps written below


Steps
Explanation of the game : the point of the game is to guess the number that the computer has in “mind”.

First Part
Create a JS file and link it to the index.html file.

Take a look at your html file, you should have a button with an “onclick” event. This event is equal to the function playTheGame(). It means that when you will click on the button, the function playTheGame() will be called.
We will learn more about events next week ;)


Now let’s create the function:

In the JS file, create a function called playTheGame() that takes no parameter.
In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).

If the answer is false, alert “No problem, Goodbye”.

If his answer is true, follow these steps:
Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :

If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.
*/
function playTheGame() {
    let playGame = confirm("Would you like to play the game?");
    if (playGame == false) {
        alert("no problem");
    }
    else {
    let numberPrompt = prompt("Please enter a number between 0 and 10");
    
    if (typeof numberPrompt == 'string' && isNaN(numberPrompt)){
        alert("Sorry, not a number");
        return;
    }
    numberPrompt = Number(numberPrompt);
    if (numberPrompt < 0 || numberPrompt > 10) {
        alert("Sorry, it is not a good number");
        return;
    }
    let computerNumber = Math.floor(Math.random()*11);
    console.log(numberPrompt, computerNumber);
    compareNumbers(numberPrompt,computerNumber);     
    }   
    }

/*Second Part
Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber

The point of this function is to check if the userNumber is the same as the computerNumber:
If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

If the user guessed more than 3 times, alert “out of chances” and exit the function.
*/
function compareNumbers(numberPrompt, computerNumber) {
    let trials = 0;
    
    while (trials < 3){
    if (numberPrompt === computerNumber) {
        alert("WINNER");
        return;
    }
    else if (numberPrompt > computerNumber) {
        numberPrompt = Number(prompt("Your number is bigger then the computer's, guess again"));
        //compareNumbers(numberPrompt,computerNumber)
        //return;
        }
    
    else {
        numberPrompt = Number(prompt("Your number is smaller then the computer's, guess again"));
        compareNumbers(numberPrompt,computerNumber)
    }
    trials++;
}
alert("out of chances");
}
playTheGame();

