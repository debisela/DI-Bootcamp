const express = require('express');
const {
    getAllItems,
        addItems,
        updateItem,
        deleteItem
} = require("../controller/taskController.js")

  
const router = express.Router();

router.get("/", getAllItems)
router.post("/", addItems)
router.put("/:id", updateItem)
router.delete("/:id", deleteItem)

module.exports = router;