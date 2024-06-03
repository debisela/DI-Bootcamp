/*
🌟 Exercise 1: Timer
Instructions
Using this HTML code:

<!DOCTYPE html>
    <html>
    <head>
        <style>
        p {
          background: yellow;
          color: red;
        }
        </style>
    </head>
    <body>
        <div id="container"></div>
        <button id="clear">Clear Interval</button>
    </body>
    </html>


Part I
In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will alert “Hello World”.
*/
/*function sayHello(){
    alert("Hello, World")
}
setTimeout(sayHello, 2000);
/*
Part II
In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">.*/

/*function newPar(){
    let cont = document.getElementById('container');
    let newP = document.createElement('p');
    let newPContent = document.createTextNode("Hello World");
    newP.appendChild(newPContent);
    cont.appendChild(newP);
}
setTimeout(newPar, 2000);

/*
Part III
In your Javascript file, using setInterval, call a function every 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
The interval will be cleared (ie. clearInterval), when the user will click on the button.
*/

/*function newPar(){
    let cont = document.getElementById('container');
    let newP = document.createElement('p');
    let newPContent = document.createTextNode("Hello World");
    newP.appendChild(newPContent);
    cont.appendChild(newP);
}*/

/*const myInterval = setInterval(newPar, 2000);
function stopInterval(){
    clearInterval(myInterval);
}

document.getElementById('clear').addEventListener('click', stopInterval);*/

//Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.


    
    const myInterval = setInterval(function() {
        let cont = document.getElementById('container');
        let newP = document.createElement('p');
        let newPContent = document.createTextNode("Hello World");
        newP.appendChild(newPContent);
        cont.appendChild(newP);
        if (cont.getElementsByTagName('p').length >= 5) {
            clearInterval(myInterval);
        }
    }, 2000);







