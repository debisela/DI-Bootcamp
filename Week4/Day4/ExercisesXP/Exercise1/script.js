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
//let x = 0;
//let y = 0
//let John = document.getElementsByClassName('list').children[0];
//John.array.forEach(element => {
    console.log(document.querySelectorAll('ul.list')[0].children[0]);
//});
//array.forEach(element => {
    
//}); (let x = 0; x <= 2; i++) {
   // if (i == 0) {
     //   John.textContent = "Debi";
   // }
//}
//John.textContent = "Debi";
let listAll = [document.getElementsByClassName('list')];
listAll.forEach(list => {
    listAll.children[0].textContent = "Debi"   
});
//console.log(David);
//David.textContent = "Debi";

/*
function isDivisible(){
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i%23==0) {
            console.log(i);
            sum += i;
        }
    }
    console.log(sum);
}
isDivisible();
Bonus - Using Javascript:
Add a class called student_list to both of the <ul>'s.
Add the classes university and attendance to the first <ul>.
*/























