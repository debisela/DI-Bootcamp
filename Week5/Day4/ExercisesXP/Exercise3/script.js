/*
Copy the code above, to a structured HTML file.
In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations
*/

let smallBox = document.getElementById('box');
let bigBox = document.getElementById('target');

smallBox.addEventListener('dragstart', dragStart)

function dragStart(event){
    event.dataTransfer.setData('text', event.target.id);
}
bigBox.addEventListener('dragover', dragOver)
bigBox.addEventListener('drop', drop)
bigBox.addEventListener('dragenter', dragEnter)
bigBox.addEventListener('dragleave', dragLeave)

function dragOver(event){
    event.prevenDefault();
}
function drop(event){
    event.prevenDefault();
    let smallBoxdata = event.dataTransfer.getData("text");
    
}