const express = require('express');

const router = require('./routes/bookRoute.js')

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3200, ()=>{
    console.log('run on 3200');
})

app.use('/', router);