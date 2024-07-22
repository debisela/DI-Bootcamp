const express = require('express');
const cors = require('cors');

const app = express();

app.listen(5000, ()=>{
    console.log('run on 5000');
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

app.use('/', express.static(__dirname +'/public'));
//console.log(__dirname+'/public');

app.get("/home", (req, res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '⚽', name: 'Soccer Ball' },
    { emoji: '🎉', name: 'Party Popper' },
    { emoji: '📚', name: 'Books' },
    { emoji: '🏝️', name: 'Island' },
    { emoji: '🎵', name: 'Music Note' }
];

//get random number
let random = Math.floor(Math.random()*(emojis.length))
//select one random emoji

function getEmoji(array){
        return array[random]
    }

function getNameOptions(array){
    let options = [emojis[random].name];

    while (options.length<3) {
    let randomOption = array[Math.floor(Math.random()*(emojis.length))].name
    
    if (randomOption !== array[random].name && !options.includes(randomOption)){
        options.push(randomOption);
    }
}
    return options.sort();
}

app.get("/api/emoji", (req, res)=>{
    res.json(getEmoji(emojis));
    })

app.get("/api/emojis", (req,res)=>{
    res.json(getNameOptions(emojis))
})

