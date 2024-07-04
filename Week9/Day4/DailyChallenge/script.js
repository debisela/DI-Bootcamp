/*
Instructions
Create a form with two fields (name, last name) and a submit button.
When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
The output should be:*/


document.getElementById('myForm').addEventListener('submit', function(event){
event.preventDefault();

let name = document.getElementById('name');
//let mynameValue = myname. value;
let lastName = document.getElementById('lastname')
// mylastNameValue = mylastName.value;

let fullName = {name: name.value,lastName:lastName.value}


let fullNameString = JSON.stringify(fullName);
console.log(fullNameString);
let fullNamediv = document.getElementById('fullname');
fullNamediv.textContent = fullNameString;
});









