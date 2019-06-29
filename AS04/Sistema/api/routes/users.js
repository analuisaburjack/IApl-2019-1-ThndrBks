const express = require('express'),
    router = express.Router(),
    userController = require('../controllers/user')


router.route('/login/signup/')
    .post(createUser)

router.route('/login/signin/')
    .post(login)

module.exports = router


async function createUser(req, res) {
    try {
        const newUser = req.body
        const createdUser = await userController.createUser(newUser)
        res.status(201).send(createdUser)
    } catch (e) {
        if (e.code == 10) {
            res.status(400).send(e)
        } else res.status(500)
    }
}

async function login(req, res) {
    try {
        const user = req.body
        const existentUser = await userController.getUser(user)
        res.status(201).send(existentUser)
    } catch (e) {
        if (e.code == 40) {
            res.status(400).send({ code: 40, message: `Credentials error` })
        } else res.status(500)
    }
}