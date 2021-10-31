const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 30
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Todo', TodoSchema)