const express = require('express');
const router = require('./routes/index.js')

const app = express();

app.listen(3000, ()=>{
    console.log('run on 3000');
})