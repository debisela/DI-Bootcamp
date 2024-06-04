
for (let i = 0; i < 21; i++) {
    let newColorDiv = document.createElement('div');
    newColorDiv.className = "color-fields";
  
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    newColorDiv.style.backgroundColor = randomColor;
    document.getElementById('sidebar').appendChild(newColorDiv)
    
}

for (let i = 0; i <= 1155; i++) {
    let newDiv = document.createElement('div');
    newDiv.className = "drawing-fields"
    document.getElementById('main').appendChild(newDiv)
    
}