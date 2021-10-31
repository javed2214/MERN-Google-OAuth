const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

const connectMongoDB = () => {
    mongoose.connect(MONGO_URI, (err) => {
        if(err) console.log('Error in Connecting DB!')
        else console.log('DB Connected Successfully!')
    })
}

module.exports = connectMongoDB