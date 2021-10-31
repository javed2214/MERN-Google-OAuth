const Todo = require('../models/TodoModel')

exports.addTodo = async (req, res) => {
    try {
        let { todo } = req.body
        let user = req.user
        todo = await Todo.create({ todo, user })
        return res.status(201).json({
            success: true,
            todo,
        })
    } catch(err) {
        return res.status(500).json({
            success: false,
            error: 'Internal Server Error'
        })
    }
}

exports.getTodos = async (req, res) => {
    try {
        const user = req.user
        if(!user) return res.redirect('/')
        const todos = await Todo.find({ user: user._id }).populate('user', 'name email')
        return res.status(200).json({
            success: true,
            todos
        })
    } catch(err) {
        return res.status(500).json({
            success: false,
            error: 'Internal Server Error'
        })
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id
        if(todoId == undefined) return res.json({ error: 'Invalid Request' })
        const isExist = await Todo.findById(todoId)
        if(!isExist) return res.json({ error: 'Invalid Request' })
        const todo = await Todo.findByIdAndRemove({ _id: todoId })
        res.status(200).json({
            success: true,
            message: 'Todo Deleted!'
        })
    } catch(err) {
        return res.status(500).json({
            success: false,
            error: 'Internal Server Error'
        })
    }
}