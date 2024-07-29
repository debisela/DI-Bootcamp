const express = require('express');
require('dotenv').config()

const blogRouter = require('./routes/blogRoute.js')


const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`rund on ${PORT}`);
})

app.use('/posts', blogRouter)