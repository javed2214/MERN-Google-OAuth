const User = require('../models/UserModel')

exports.redirect = (req, res) => {
    res.redirect('/profile')
}

exports.logout = (req, res) => {
    console.log('Logout')
    req.logout()
    req.session = null
    res.redirect('/')
}

exports.currentUser = (req, res) => {
    console.log(req.user)
    res.send(req.user)
}