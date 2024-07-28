const express = require('express');
const{
    getQuestion,
    submitAnswer,
} = require('../controller/quizController.js')

const router = express.Router();

router.get('/quiz', getQuestion);
router.post('/quiz', submitAnswer);

module.exports = router;