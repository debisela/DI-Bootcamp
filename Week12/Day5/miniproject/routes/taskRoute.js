const express = require('express')
const {_getAllTasks,
    _getOneTask,
    _addNewTask,
    _updateOneTask,
    _deleteOneTask
} = require('../controllers/taskController.js')

const router = express.Router()

router.get('/', _getAllTasks)
router.get('/:id', _getOneTask)
router.post('/', _addNewTask)
router.put('/:id', _updateOneTask)
router.delete('/:id', _deleteOneTask)


module.exports = router