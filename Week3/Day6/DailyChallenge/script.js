/*
Instructions
Write a JavaScript program that recreates the pattern below.
Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
Do this Daily Challenge by yourself, without looking at the answers on the internet.
*  
* *  
* * *  
* * * *  
* * * * *
* * * * * *
*/
let star = ["*", "**", "***", "****","*****","******"]
for (let i=0; i<star.length; i++){ 
    console.log(star[i]);
    }
//shorter version below:
let starNew = ["*"];
for (let i=0; i<6; i++){ 
    console.log("*".repeat(i+1));
    }

let starNew2 = ["*"];
for (let i=0; i<=6; i++){
    if (i !== 0) 
    console.log("*".repeat(i));
    }












