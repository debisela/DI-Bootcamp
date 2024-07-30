const express = require('express');
require('dotenv').config()

const logRouter = require('./routes/logRoute.js')


const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const PORT = process.env.PORT || 3300
app.listen(PORT, ()=>{
    console.log(`rund on ${PORT}`);
})

app.use('/', logRouter)