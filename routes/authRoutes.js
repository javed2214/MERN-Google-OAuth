const express = require('express')
const router = express.Router()
const passport = require('passport')
const { redirect, logout, currentUser } = require('../controllers/authController')

router.get('/auth/google', passport.authenticate('google', {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ]
}))

router.route('/auth/google/redirect').get(passport.authenticate('google'), redirect)
router.route('/auth/logout').get(logout)
router.route('/auth/api/current_user').get(currentUser)

module.exports = router
