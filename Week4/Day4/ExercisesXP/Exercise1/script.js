/*
🌟 Exercise 1 : Users
Instructions
<div id="container">Users:</div>
<ul class="list">
    <li>John</li>
    <li>Pete</li>
</ul>
<ul class="list">
    <li>David</li>
    <li>Sarah</li>
    <li>Dan</li>
</ul>


Add the code above, to your HTML file

Using Javascript:
Retrieve the div and console.log it
*/
console.log(document.getElementById('container').textContent);
/*
Change the name “Pete” to “Richard”.
*/
//let Pete = document.querySelectorAll('.list')[0].lastElementChild;
let Pete = document.getElementsByClassName('list')[0].lastElementChild;
Pete.textContent = 'Richard';
console.log(Pete.textContent);
/*
Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
*/
let Sarah = document.getElementsByClassName('list')[1].children[1];
console.log(document.removeChild(Sarah));


/*
Change each first name of the two <ul>'s to your name. (Hint : use a loop)

Bonus - Using Javascript:
Add a class called student_list to both of the <ul>'s.
Add the classes university and attendance to the first <ul>.
*/























