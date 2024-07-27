const express = require('express');
const {
    getAllBooks,
    addNewBook,
    updateBook,
    deleteBook
} = require('../controller/bookController.js')

const router = express.Router();

router.get('/', getAllBooks);
router.post('/', addNewBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;



