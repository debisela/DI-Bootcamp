let score = 0;
const emoji = async()=>{
    try {
        const res = await fetch('http://localhost:5000/api/emoji');
        const data = await res.json()
        console.log(data);
        //render(data)
        document.getElementById('randomemoji').innerHTML = data.emoji;
    } catch (error) {
       console.log(error); 
    }
}
emoji();

const options = async()=>{
    try {
        const res = await fetch('http://localhost:5000/api/emojis')
        const data = await res.json()
        console.log(data);
        renderOptions(data)
    } catch (error) {
       console.log(error); 
    }
}
options();

function renderOptions(arr){
    let htmlOptions = arr.map((item,index)=>{
        return` <div>
                <input type="radio" id="option${index}" name="guess" value="${item}">
                <label for="option${index}">${item}</label>
            </div>`
    })
    document.getElementById('emojioptions').innerHTML=htmlOptions.join("");
}

const checkAnswer = (event)=>{
    event.preventDefault();
    document.getElementById('feedback').innerHTML = `${``}`
    const val = event.target.guess.value;
    console.log({val});
    fetch('http://localhost:5000/api/guess', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({val})
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data);
        document.getElementById('feedback').innerHTML = `${data.msg}`
        if (data.msg === 'correct'){
            score++;
        }
        document.getElementById('score').innerHTML = `${score}`
        emoji();
        options();

    })
    .catch((error)=>{
        console.log(error);
    })




}
