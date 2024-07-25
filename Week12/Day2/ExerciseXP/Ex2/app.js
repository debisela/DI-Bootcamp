const express = require('express');
const router = require('./routes/todos.js')
console.log(router);


const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3000, ()=>{
    console.log('run on 3000');
})

app.use('/tasks', router);