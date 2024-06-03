/*
Daily Challenge : Show Only The Letters
Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

Hint: use one of the following events to remove any character that is not a letter

keyup event
or keypress event
or keydown event
or input event

Hint : Check out keycodes in Javascript or Regular Expressions
*/

const form = document.forms[0];

let input = form['input'];

form.addEventListener('submit', function(e){
    e.preventDefault();
    let inputValue = input.value;
    ///^[a-zA-Z]+$ returns true if it is a letter and false if not
    let x = /^[a-zA-Z]+$/;

    if (x.test(inputValue) == false){
        alert('please insert a letter');
    }
    else{
        console.log(inputValue);
    
    }
})