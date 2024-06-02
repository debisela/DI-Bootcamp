/*
🌟 Exercise 2 : Work With Forms
Instructions
Copy the code below, into a structured HTML file:

<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="firstname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lastname"><br><br>
  <input type="submit" value="Submit" id="submit">
</form> 
<ul class="usersAnswer"></ul>


Retrieve the form and console.log it.

Retrieve the inputs by their id and console.log them.

Retrieve the inputs by their name attribute and console.log them.
*/
const form = document.forms[0];
console.log(form);

let input1 = form['fname'];
console.log(input1);
let input2 = form['lname'];
console.log(input2);

let input1name = form['firstname'];
console.log(input1name);
let input2name = form['lastname'];
console.log(input2name);

/*When the user submits the form (ie. submit event listener)
use event.preventDefault(), why ?

get the values of the input tags,
make sure that they are not empty,
create an li per input value,
then append them to a the <ul class="usersAnswer"></ul>, below the form.
The output should be :

<ul class="usersAnswer">
    <li>first name of the user</li>
    <li>last name of the user</li>
</ul>
*/

//add preventDefault in order to be able to add custom actions, such as validation, before sending form data to server
form.addEventListener('submit', function(e){
 e.preventDefault();
  let firstNameValue = input1name.value;
  let lastNameValue = input2name.value;
  console.log(firstNameValue,lastNameValue);
  
  if (firstNameValue == "" || lastNameValue == "" ){
    alert('please insert a name');
  }
  else{
    let liNewFirstName = document.createElement('li');
    let liNewFirstNameValue = document.createTextNode(firstNameValue);
    liNewFirstName.appendChild(liNewFirstNameValue);
    let liNewLastName = document.createElement('li');
    let liNewLastNameValue = document.createTextNode(lastNameValue);
    liNewLastName.appendChild(liNewLastNameValue);
    document.querySelector('ul').appendChild(liNewFirstName);
    document.querySelector('ul').appendChild(liNewLastName);
  }
});

