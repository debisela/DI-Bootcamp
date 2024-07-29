const express = require('express')
const {_getAllPosts,
    _getOnePost,
    _addNewPost,
    _updateOnePost,
    _deleteOnePost
} = require('../controllers/blogController.js')

const router = express.Router()

router.get('/', _getAllPosts)
router.get('/:id', _getOnePost)
router.post('/', _addNewPost)
router.put('/:id', _updateOnePost)
router.delete('/:id', _deleteOnePost)


module.exports = router
