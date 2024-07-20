//Part 1: Setting Up the Express Server
const express = require('express');
const {fetchPosts} = require ('./data/dataService');
//console.log(fetchPosts());

//fetchPosts('https://jsonplaceholder.typicode.com/posts')

const app = express();

app.listen(5000, ()=>{
    console.log('run on 5000');
})

app.get('/posts', async (req, res)=>{
    try {
        const posts = await fetchPosts();
        console.log('data successfully retrieved');
        res.json(posts);
        
    } catch (error) {
        res.status(404).json({error: 'posts not found'})
    }
});