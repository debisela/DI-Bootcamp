/*
Instructions
Prompt the user for several words (separated by commas).
Put the words into an array.
Console.log the words one per line, in a rectangular frame as seen below.
Check out the Hints and Requirements below.
For example, if the user gives you:
Hello, World, in, a, frame
you will transform it to : ["Hello", "World", "in", "a", "frame"]
that will get displayed as:

stars and words
*/

   let input = prompt('enter several words separated by commas');
    let inputArray = input.split(',');
    let longestLength = Math.max(...inputArray.map(word => word.length));
    inputArray.unshift("*".repeat(longestLength));
    inputArray.push("*".repeat(longestLength));
    for (let i=0; i<inputArray.length; i++){ 
    console.log('*' + " " + inputArray[i] + " " + " ".repeat(longestLength - inputArray[i].length) + '*')
    }


