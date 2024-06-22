/*
🌟 Exercise 4 : Colors
Instructions
Using this array :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
Hint : Use the array methods taught in class. Look at the lesson Array Methods.*/
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
/*for (let i = 0; i < colors.length; i++){
console.log(`${i+1}# choice is ${colors[i]}`);
}*/

/*if (colors.includes("Violet")){
        console.log("Yeah")
    }
    else {
        console.log("No...")
    }*/

//with ternary operator:
const colorsInclude = colors.includes("Violet")?console.log("Yeah"):console.log("No...")





/*
🌟 Exercise 5 : Colors #2
Instructions
Using these arrays :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
Hint : Use the array methods taught in class and ternary operator.*/
const ordinal = ["th","st","nd","rd"];

/*for (let i = 0; i < colors.length; i++){
    if (i+1 === 1){
        console.log(`${i+1} ${ordinal[1]} choice is ${colors[i]}`)
}
else if (i+1 === 2){
    console.log(`${i+1} ${ordinal[2]} choice is ${colors[i]}`)
    }
    else if (i+1 === 3){
        console.log(`${i+1} ${ordinal[3]} choice is ${colors[i]}`)
        }
    else {
        console.log(`${i+1} ${ordinal[0]} choice is ${colors[i]}`)
    }
}*/
//with ternary operator:
for (let i = 0; i < colors.length; i++){
    const suffix = i+1 === 1?console.log(`${i+1} ${ordinal[1]} choice is ${colors[i]}`):
    i+1 === 2?console.log(`${i+1} ${ordinal[2]} choice is ${colors[i]}`):
    i+1 === 3?console.log(`${i+1} ${ordinal[3]} choice is ${colors[i]}`):
    console.log(`${i+1} ${ordinal[0]} choice is ${colors[i]}`)
    }