const {db} = require('../config/data.js')

const getAllBooks = () =>{
    return db('books')
    .select('id', 'title', 'author', 'publishedyear')
}

const getOneBook = (bookId) =>{
    return db('books')
    .select('id', 'title', 'author', 'publishedyear')
    .where('id', bookId)
}

const addNewBook = (title, author, publishedyear) =>{
    return db('books')
    .insert({title, author, publishedyear})
}



module.exports = {
    getAllBooks,
    getOneBook,
    addNewBook,
}