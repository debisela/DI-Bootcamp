const {books} = require('../config/data.js')

const getAllBooks = (req, res)=>{
    res.json(books);
}

const addNewBook = (req, res)=>{
    const newBook = {...req.body, id:books.length+1};
    books.push(newBook);
    res.json(books)
}

const updateBook = (req, res)=>{
    const {id} = req.params;
    const {title, author} = req.body;
    const index = books.findIndex(item => item.id ==id);
    if(index=== -1){
        return res.status(404).json({msg:'book not found'})
    }
    books[index] = {...books[index], title, author};
    res.json(books);
}

const deleteBook = (req, res)=>{
    const {id} = req.params;
    const index = books.findIndex(item => item.id ==id);
    if(index=== -1){
        return res.status(404).json({msg:'book not found'})
    }
    books.splice(index, 1);
    res.json(books);
}

module.exports = {
    getAllBooks,
    addNewBook,
    updateBook,
    deleteBook
}