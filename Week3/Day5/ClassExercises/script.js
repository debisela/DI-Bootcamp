/*
for (var temp = 0; temp < 5; temp++) {
    // Runs 5 times, with values of temp 0 through 4.
    console.log(temp + ": Institute!");
  }
  let arr = [1, 4, 7, 10]
    for (let i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
    */
   /*for (let numb = 0; numb <= 15; numb++) {
    if (numb % 2 == 0) {
        console.log(numb + " is even")
    } else {
        console.log(numb + " is odd")
    }
     }
*/
/*let i = 0;
do {
  console.log("The number is " + i)
  i++;
}
while (i < 10);
*/


/*let person = {fname:"John", lname:"Doe", age:25};
for (let x in person) {
  console.log(x) //fname lname age
  console.log(person[x]) // John Doe 25
}
*/
let namesA= ["john", "sarah", 23, "Rudolf",34]
for (let i = 0; i < names.length; i++) {
    if (typeof names[i] == 'number'); {
        continue;
    }
    console.log(names[i]);
}
let namesB = ["john", "sarah", 23, "Rudolf", 34];

for (let i = 0; i < names.length; i++) {
    let item = namesB[i];
    if (typeof item !== 'string') {
        break; // Exit the loop if item is not a string
    }
    console.log(item); // Display the string item
}

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
for (let x in details) {
  console.log(x) //fname lname age
  console.log(person[x]) // John Doe 25
}












