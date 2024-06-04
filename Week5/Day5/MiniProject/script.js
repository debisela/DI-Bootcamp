
for (let i = 0; i < 21; i++) {
    let newColorDiv = document.createElement('div');
    newColorDiv.className = "color-fields";
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    newColorDiv.style.backgroundColor = randomColor;
    document.querySelector('.pallette').appendChild(newColorDiv)
    console.log(randomColor);
    console.log(newColorDiv.style.backgroundColor)
}

for (let i = 0; i <= 1791; i++) {
    let newDiv = document.createElement('div');
    newDiv.className = "drawing-fields"
    document.getElementById('main').appendChild(newDiv)
    
}
let colorFields = document.querySelectorAll('.color-fields');

colorFields.forEach(function(elem) {
    elem.addEventListener('click', chooseColor);
    function chooseColor(){
        let colorName = elem.style.backgroundColor
        console.log(colorName);
        return elem.style.backgroundColor;
    }
});

let drawingGrid = document.getElementById('main');
let drawingFields = document.querySelectorAll('.drawing-fields');
drawingFields.forEach(function(elem) {
    elem.addEventListener('mousedown', draw);
    function draw(){
        elem.style.backgroundColor = 'red'
    }
});





