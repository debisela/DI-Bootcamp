"use strict";
// Description:
// Create a function handleData that processes an array of mixed types. The array can contain objects with different structures. Implement type guards to handle each type of object and perform specific operations based on their structure.
// 2. Create a function handleData that accepts an array of User | Product | Order. Implement type guards to:
// For User objects, return a greeting message with the user’s name and age.
// For Product objects, return a message with the product ID and its price.
// For Order objects, return a summary of the order with its ID and amount.
function handleData(arr) {
    return arr.map(item => {
        if (item.type === 'user') {
            return `Hello ${item.name}, you are ${item.age} years old`;
        }
        else if (item.type === 'product') {
            return `The product id is ${item.id} and the price is ${item.price}`;
        }
        else if (item.type === 'order') {
            return `you have ordered ${item.amount} of item ${item.orderId} `;
        }
        else {
            return 'Unknown';
        }
    });
}
const data = [
    { type: 'user', name: 'Alice', age: 30 },
    { type: 'product', id: 101, price: 29.99 },
    { type: 'order', orderId: 'ORD123', amount: 149.95 },
    // { type: 'unknown', value: 'test' }
];
console.log(handleData(data));
// 3. Ensure your function handles unexpected cases gracefully.
