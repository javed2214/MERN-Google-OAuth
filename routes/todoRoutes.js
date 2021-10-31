const express = require('express')
const router = express.Router()
const { addTodo, getTodos, deleteTodo } = require('../controllers/todoController')

router.route('/addtodo').post(addTodo)
router.route('/gettodos').get(getTodos)
router.route('/delete/:id').delete(deleteTodo)

module.exports = router
