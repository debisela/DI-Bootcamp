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
let form = document.forms[0];
console.log(form);

let input1 = document.getElementById("fname");
let input2 = document.getElementById("lname");
let input3 = document.getElementById("submit");
console.log(input1,input2,input3);

let input1Name = form.elements.firstname[0];
let input2Name = form.elements.lastname;

console.log(input1Name,input2Name);

/*
When the user submits the form (ie. submit event listener)
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


//input3.addEventListener("submit", formSub());

function formSub(){
//event.preventDefault();
//alert('hii');
let firstName = input1.value;
let lastName = input2.value;
alert(firstName);
console.log(firstName,lastName);

}
