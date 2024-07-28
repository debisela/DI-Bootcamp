const express = require('express');
const cors = require('cors')
const router = require('./routes/quizRoutes.js')

const app = express();

app.listen(4000, ()=>{
    console.log('run on 4000');
})

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', express.static(__dirname+'/public'));
app.get("/home", (req, res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

app.use('/', router);

