const express = require('express');
require('dotenv').config()

const booksRouter = require('./routes/bookRoute.js')


const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`rund on ${PORT}`);
})

app.use('/api/books', booksRouter)