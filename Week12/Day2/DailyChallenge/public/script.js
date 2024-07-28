const startGame = async() =>{
    try {
        const res = await fetch('http://localhost:4000/quiz');
        const data = await res.json();
        //console.log(data);
    document.getElementById('root').innerHTML = `${data.question}`
    renderOptions(data.choices);
    } catch (error) {
        console.log(error);
    }
}
startGame();


function renderOptions(arr){
    let htmlOptions = arr.map((item,index)=>{
        return` <div>
                <input type="radio" id="option${index}" name="guess" value="${item}">
                <label for="option${index}">${item}</label>
            </div>`
    })
    document.getElementById('options').innerHTML=htmlOptions.join("");
}

const checkAnswer = (event)=>{
    event.preventDefault();
    document.getElementById('feedback').innerHTML = `${``}`
    const val = event.target.guess.value;
    //console.log({val});

fetch('http://localhost:4000/quiz', {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({val})
})
.then(res => res.json())
.then(data =>{
    document.getElementById('feedback').innerHTML = `<h3>${data.answer}</h3><h4>score: ${data.score}</h4>`
    if(data.answer === 'correct!!!'){
        startGame()
    }
})
.catch((error)=>{
    console.log(error);
})
}