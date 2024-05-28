/*
In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
We will provide the HTML page.
You only have to work with a JS file.

Create an array which value is the planets of the solar system.
For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
Finally append each div to the <section> in the HTML (presented below).
Bonus: Do the same process to create the moons.
Be careful, each planet has a certain amount of moons. How should you display them?
Should you still use an array for the planets ? Or an array of objects ?*/

let planets = ["Earth","Jupiter","Saturn","Neptune","Mercury","Venus","Mars","Uranus"];
let listPlanets = document.querySelector(".listPlanets");
let planetColors = ["green","orange","blue","yellow","red","purple","brown","lightgreen"]

    for (let i = 0; i < planets.length; i++) {
        let newdiv = document.createElement('div');
        newdiv.classList.add("planet");
        let planetName = document.createTextNode(planets[i])
        newdiv.appendChild(planetName);
        newdiv.style.backgroundColor = planetColors[i];
        console.log(newdiv);  
    }
 listPlanets.appendChild(newdiv);

    





