const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const connectMongoDB = require('./config/db')
const cors = require('cors')
const cookieSession = require('cookie-session')
const passport = require('passport')

connectMongoDB()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_SECRET]
}))

// Passport Initialization
app.use(passport.initialize())
app.use(passport.session())

// Passport Middleware
require('./middleware/auth')

// Auth Route
app.use('/', require('./routes/authRoutes'))

// Todo Route
app.use('/todo', require('./routes/todoRoutes'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`))