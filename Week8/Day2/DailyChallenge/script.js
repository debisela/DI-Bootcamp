/*
Using this object :

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

Create another arrow function named cloneGroceries.
In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
answer: no, we assign a new value to client, but user still has the same value as before which was "John".
In the function, create a variable named shopping that is equal to the groceries variable.
Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
answer: yes, because it is an object and passed by reference, meaning that shopping points to the reference groceries, so we will see the change in both.
Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?
answer: yes also the nested object is referencing to the groceries object.

Invoke the cloneGroceries function.*/
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
groceries.fruits.forEach(element => {
    console.log(element);    
})
}

const cloneGroceries = () => {
    let user = client;
    client = "Betty";
    console.log(client);
    console.log(user);
    const shopping = groceries;
    groceries.totalPrice = "35$"
    groceries.other.paid = false;
    console.log(shopping.totalPrice);
    console.log(groceries.totalPrice);
    console.log(shopping.other);
    console.log(groceries.other);
}
cloneGroceries();

