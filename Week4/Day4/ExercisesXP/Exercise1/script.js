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

let list2 = document.getElementsByClassName('list')[1];
let Sarah = document.getElementsByClassName('list')[1].children[1];
list2.removeChild(Sarah);
console.log(list2);

/*
Change each first name of the two <ul>'s to your name. (Hint : use a loop)
*/

let lists = document.querySelectorAll('.list');
console.log(lists);
lists.forEach (list => {
    list.children[0].textContent = "Debi"
   
});






















