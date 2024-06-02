/*
Copy the code above, to a structured HTML file.
In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations
*/


let smallBox = document.getElementById('box');
let bigBox = document.getElementById('target');



function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.dataTransfer.effectAllowed = "move";
}

function onDragover(event) {
    event.preventDefault(); 
    event.dataTransfer.dropEffect = "move";
}

function onDrop(event) {
    event.preventDefault(); 
    var smallBoxdata = event.dataTransfer.getData("text/plain");
    
    event.target.appendChild(document.getElementById(smallBoxdata));
}
