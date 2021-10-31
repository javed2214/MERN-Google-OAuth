const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        default: 'https://i1.wp.com/researchictafrica.net/wp/wp-content/uploads/2016/10/default-profile-pic.jpg?ssl=1'
    }
})

module.exports = mongoose.model('User', UserSchema)