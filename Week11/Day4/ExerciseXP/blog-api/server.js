const express = require('express');

const blogPosts = [
    {
      id: 1,
      title: "Introduction to JavaScript",
      content: "JavaScript is a versatile language used for both front-end and back-end development..."
    },
    {
      id: 2,
      title: "Understanding Node.js",
      content: "Node.js is a runtime environment that allows you to run JavaScript on the server..."
    },
    {
      id: 3,
      title: "Getting Started with React",
      content: "React is a popular library for building user interfaces. It helps you create interactive UIs easily..."
    },
    {
      id: 4,
      title: "Mastering CSS Grid",
      content: "CSS Grid Layout is a two-dimensional layout system for the web. It lets you layout items in rows and columns..."
    },
    {
      id: 5,
      title: "Exploring Async/Await in JavaScript",
      content: "Async/Await is a modern way to handle asynchronous operations in JavaScript. It makes your code easier to read and write..."
    }
  ];
  

const app = express();
app.listen(5002, ()=>{
    console.log('run on 5002');
})
app.get("/api/posts", (req, res)=>{
    res.json(blogPosts)
})

app.get("/api/posts/:id", (req, res)=>{
    const {id} = req.params;
    const myPost = blogPosts.find(item =>item.id==id)
    if (!myPost) return res.status(404).json({error:'post not found'})
    res.json(myPost);
})
