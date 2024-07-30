const express = require('express');

const tasksRouter = require('./routes/taskRoute.js')

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(4400, ()=>{
    console.log(`run on 4400`);
})

app.use('/tasks', tasksRouter)