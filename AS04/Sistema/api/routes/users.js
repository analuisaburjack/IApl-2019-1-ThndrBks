const express = require('express'),
    router = express.Router(),
    userController = require('../controllers/user')


router.route('/users/signup/')
    .post(createUser)

router.route('/users/signin/')
    .post(login)

module.exports = router


async function createUser(req, res) {
    try {
        const newUser = req.body
        const createdUser = await userController.createUser(newUser)
        res.status(201).send({ success: true, user: createdUser})
    } catch (e) {      
        res.status(e.code || 500).send({ success: false, message: e.message || `Internal Server Error`})
    }
}

async function login(req, res) {
    try {
        const user = req.body
        const existentUser = await userController.getUser(user)
        res.status(201).send({ sucess: true, user: existentUser})
    } catch (e) {
        res.status(e.code || 500).send({ success: false, message: `Credentials error` || `Internal Server Error` })
    }
}