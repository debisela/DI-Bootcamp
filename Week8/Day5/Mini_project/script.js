/*
Part 1 : Quote Generator
Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 3 ect…

Populate the array with a few quotes that you like.

When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
Important: When clicking on the button, make sure you don’t display the same quote twice in a row.*/

let quotes = [
    {id: 0, author: "John Lennon", quote: "Life is what happens when you're busy making other plans."},
    {id: 1, author: "Albert Einstein", quote: "Imagination is more important than knowledge."},
    {id: 2, author: "John Lennon", quote: "Reality leaves a lot to the imagination."},
    {id: 3, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving."},
    {id: 4, author: "Mahatma Gandhi", quote: "Be the change that you wish to see in the world."},
    {id: 5, author: "Maya Angelou", quote: "You will face many defeats in life, but never let yourself be defeated."},
    {id: 6, author: "John Lennon", quote: "A dream you dream alone is only a dream. A dream you dream together is reality."},
    {id: 7, author: "Albert Einstein", quote: "Try not to become a man of success, but rather try to become a man of value."},
    {id: 8, author: "Mark Twain", quote: "The secret of getting ahead is getting started."},
    {id: 9, author: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."}
]

let previousIdRandom = null;

document.querySelector('button').addEventListener("click", generateQuote);
function generateQuote(){
    let idRandom; 
    //make sure that a new number is generated as long as new randomID = old randomID:  
    do {
        idRandom = Math.floor(Math.random()*10);
    } while (idRandom === previousIdRandom);

    previousIdRandom = idRandom
    
    let chosenQuote = quotes[idRandom];
    console.log(chosenQuote);
    let quoteDiv = document.createElement('div');
    quoteDiv.id = "quote";
    let authorDiv = document.createElement('div');
    authorDiv.id = "author"
    document.querySelector('section').appendChild(quoteDiv);
    document.querySelector('section').appendChild(authorDiv);
    document.getElementById("quote").style.fontSize = '2em'; 
    document.getElementById("quote").style.color = 'pink';   
    document.getElementById("author").style.color = 'blue'; 
    document.getElementById("quote").innerHTML = chosenQuote.quote;
    document.getElementById("author").innerHTML = chosenQuote.author; 
}

/*
Part 2 : Add Buttons
In the HTML file, create a form with the inputs “Quote” and “Author” and a button. So when you click on the button, you can add a new quote to the array of object.
Important: Don’t forget to set the id of the new quotes

In the HTML file, under the displayed quote, create a few more buttons:
A button that gives the number of character inside each quote (space included)
A button that gives the number of character inside each quote (space NOT included)
A button that gives the number of words in each quote
A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.*/