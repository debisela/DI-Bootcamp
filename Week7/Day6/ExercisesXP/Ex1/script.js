/*
🌟 Exercise 1 : Scope
Instructions
Analyse the code below, and predict what will be the value of a in all the following functions.
Write your prediction as comments in a js file. Explain your predictions.*/
// #1
/*function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}*/
//answer: if we run the function we should get alert :"inside the funcOne function 3"

// #1.1 - run in the console:
/*funcOne()*/
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
//answer: since const cannot be updated we will get an error

//#2
/*let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()*/
//answer: if we run funcThree() first, we get alert:0, after that we runf funcTwo() so we update a to 5 and when running funcTree() again we get 5.
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
//answer: we will get first alert of 0, when running funcTree() but then when running funcTwo() we get an error since a cannot be updated.


//#3
/*function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()//answer: this function sets a to "hello". since window is a global object, a will be assigned also outside of the function
funcFive()//anwser: we will see an alert "inside the funcFive function Hello"*/

//#4
/*let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()*/
//answer: since we declare a new a indside the function, we will see lert with the value of a declared inside the function -> "test"
// #4.2 What will happen if the variable is declared 
// with const instead of let ? answer: nothing will change

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console. answer: first alert we will see 5, since the alert is inside the block, where a =5, second alert we will see 2, since the alert conmmand is outside block, where a = 2.
// #5.2 What will happen if the variable is declared 
// with const instead of let ? answer: nothing will change */