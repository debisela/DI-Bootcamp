/*
Exercise 4 : My Book List
Instructions
Take a look at this link for help.

The point of this challenge is to display a list of two books on your browser.

In the body of the HTML page, create an empty div:
<div class="listBooks"></div>
In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
title,
author,
image : a url,
alreadyRead : which is a boolean (true or false).

Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
Requirements : All the instructions below need to be coded in the js file:
Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
For each book :
You have to display the book’s title and the book’s author.
Example: HarryPotter written by JKRolling.
The width of the image has to be set to 100px.
If the book is already read. Set the color of the book’s details to red.
*/
let allBooks = [{
title: "Harry Potter",
author: "J.K. Rowling",
image: "https://m.media-amazon.com/images/I/71RVt35ZAbL._AC_UF1000,1000_QL80_.jpg",
alreadyRead:  true
},
{
    title: "Lord of the rings",
    author: "J.R.R. Tolkien",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
    alreadyRead:  false
}]


let listBooks = document.querySelector('listBooks');
let table = document.createElement('table');
let row = document.createElement('tr');
let book1 = document.createElement('td');
let book1Text = document.createTextNode(allBooks[0].title + " written by " + allBooks[0].author);
book1.appendChild(book1Text);
//if (allBooks[0].alreadyRead) {
  //  book1.style.color = "red";
//}
let book2 = document.createElement('td');
let book2Text = document.createTextNode(allBooks[1].title + " written by " + allBooks[1].author);
book2.appendChild(book2Text);
//if (allBooks[1].alreadyRead) {
  //  book2.style.color = "red";
//}
document.querySelector('div').appendChild(table).appendChild(row).appendChild(book1).append(book2);

//trying to color red the alreadyread, but since book1 and book 2 have same definitions both are being changed to red...
allBooks.forEach (alreadyRead => {
    if (alreadyRead) {
    book1.style.color = "red";
    }
});



