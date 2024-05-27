/*
🌟 Exercise 2 : Users And Style
Instructions
<div>Users:</div>
<ul>
    <li>John</li>
    <li>Pete</li>
</ul>


Add the code above, to your HTML file

Using Javascript:
Add a “light blue” background color and some padding to the <div>.
Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
Change the font size of the whole body.

Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
*/
let divEl = document.querySelector('div');
divEl.style.backgroundColor = 'lightblue';
divEl.style.padding = '20px';
let uL = document.querySelector('ul');
let John = uL.children[0];
uL.removeChild(John);
let Pete = document.querySelector('ul').children[0];
Pete.style.border = '1px solid black';
document.body.style.fontFamily = 'Arial';