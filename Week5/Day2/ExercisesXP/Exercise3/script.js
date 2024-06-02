/*
🌟 Exercise 3 : Transform The Sentence
Instructions
Add this sentence to your HTML file then follow the steps :

<p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
<strong>end</strong> you <strong>will</strong> be great Developers!
<strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


In the JS file:

Declare a global variable named allBoldItems.

Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

Create a function called highlight() that changes the color of all the bold text to blue.

Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
*/
/* first try, long version:
let allBoldItems = 0;
function getBoldItems() {
for (i=0; i<6; i++){
allBoldItems = document.querySelectorAll('strong')[i];
//console.log(allBoldItems.textContent);
}
return;
}
getBoldItems()

function highlight(){
    
    for (i=0; i<6; i++){
        allBoldItems = document.querySelectorAll('strong')[i];
        allBoldItems.style.color = 'blue';
        //console.log(allBoldItems.textContent);
        }
}
highlight()

function returnItemsToDefault(){
    
    for (i=0; i<6; i++){
        allBoldItems = document.querySelectorAll('strong')[i];
        allBoldItems.style.color = 'black';
        console.log(allBoldItems.textContent);
        }
}
returnItemsToDefault()
let paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout',returnItemsToDefault)*/

//second try short version:
let allBoldItems;

function getBoldItems() {

allBoldItems = document.querySelectorAll('strong');
//console.log(allBoldItems.textContent);

}


function highlight(){
    getBoldItems()
    
    allBoldItems.forEach(element => {
        
        element.style.color = 'blue';
        })
}
//highlight()

function returnItemsToDefault(){
    getBoldItems()
    
    allBoldItems.forEach(element => {
        
        element.style.color = 'black';
        })
}
//returnItemsToDefault()

let paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout',returnItemsToDefault)




