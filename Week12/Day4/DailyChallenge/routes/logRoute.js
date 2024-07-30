const express = require('express')
const {_addUser,
    _logUser,
    _getUsers,
    _getUser,
    _updateUser
} = require('../controllers/logController.js')

const router = express.Router()

router.post('/register', _addUser)
router.post('/login', _logUser)
router.get('/users', _getUsers)
router.get('/users/:id', _getUser)
router.put('/users/:id', _updateUser)


module.exports = router
