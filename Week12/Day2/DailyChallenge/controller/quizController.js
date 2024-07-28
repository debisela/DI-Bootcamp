const {questions} = require('../config/data.js')

//console.log(questions);

let random;

function getRandomquestion(array){
    random =  Math.floor(Math.random()*(array.length))
    return array[random];
}

console.log(getRandomquestion(questions));

const getQuestion = (req, res)=>{
    res.json(getRandomquestion(questions))
}

let score = 0;

const submitAnswer = (req, res)=>{
    const choice = req.body;
    //console.log(choice);
    if (choice.val === questions[random].correctAnswer){
        score++;
        res.send({answer:'correct!!!',score:score})
    }
    else {
        res.send({answer: 'wrong, try again',score:score})
    }
}

module.exports = {
    getQuestion,
    submitAnswer
}
