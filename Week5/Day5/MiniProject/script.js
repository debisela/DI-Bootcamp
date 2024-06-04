//took array with 21 random colors

let colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D']


for (let i = 0; i < 21; i++) {
    let newColorDiv = document.createElement('div');
    newColorDiv.className = "color-fields";
    //tried first a version with random number generation but did not manage to save the color as variable
    /*let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);*/
    let randomColor = colors[i];
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
        elem.style.backgroundColor = 'black'
    }
});





