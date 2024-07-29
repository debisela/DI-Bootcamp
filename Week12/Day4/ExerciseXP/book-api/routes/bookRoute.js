const express = require('express')
const {_getAllBooks,
    _getOneBook,
    _addNewBook,
} = require('../controllers/bookController.js')

const router = express.Router()

router.get('/', _getAllBooks)
router.get('/:bookId', _getOneBook)
router.post('/', _addNewBook)


module.exports = router
