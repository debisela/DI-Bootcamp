/*🌟 Exercice 4 : Volume Of A Sphere
Instructions
Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:*/


//Sphere V = (4/3)*pi*r3

const form = document.forms[0];
//console.log(form);

let inputRadius = form['radius'];
let inputVolume = form['volume'];
//console.log(input1);
form.addEventListener('submit', function(e){
    e.preventDefault();
    let inputRadiusvalue = inputRadius.value;
    console.log(inputRadiusvalue);
    let volumeValue = (4/3)*Math.PI*Math.pow(inputRadiusvalue,3);
    inputVolume.value = volumeValue;
})
