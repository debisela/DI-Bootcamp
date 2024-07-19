const express = require('express');

const app = express();

const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: 1925
    },
    {
      id: 4,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publishedYear: 1951
    },
    {
      id: 5,
      title: "Moby-Dick",
      author: "Herman Melville",
      publishedYear: 1851
    }
  ];

  app.listen(5000, ()=>{
    console.log('run on 5000');
})

app.get("/api/books", (req, res)=>{
    
    res.json(books);
})

///api/books/:bookId
app.get("/api/books/:bookId", (req, res)=>{
    const {bookId} = req.params;
    const myBook = books.find(item =>item.id==bookId)
    if (!myBook) return res.status(404).json({error:'book not found'})
    res.status(200).json(myBook);
})