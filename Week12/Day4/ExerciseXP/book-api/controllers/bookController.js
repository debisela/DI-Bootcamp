const {getAllBooks,
    getOneBook,
    addNewBook,
} = require('../models/bookModel.js')

const _getAllBooks = async (req, res)=>{
    try {
        const result = await getAllBooks();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'something wrong'})
    }
}

const _getOneBook = async (req, res)=>{
    const {bookId} = req.params;
    try {
        const result = await getOneBook(bookId);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'book not found'})
    }
}

const _addNewBook = async (req, res)=>{
    const {title, author, publishedyear} = req.body;
    try {
        const result = await addNewBook(title, author, publishedyear);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'something wrong'})
    }
}


module.exports = {
    _getAllBooks,
    _getOneBook,
    _addNewBook
}