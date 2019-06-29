const express = require('express'),
    router = express.Router(),
    loginController = require('../controllers/user')


router.route('login/signin/')
    .post(createUser)


module.exports = router

async function createUser(req, res) {
    try {

        console.log(req.body)

        // const books = await bookController.getBooks()
        // res.status(201).send(books)

        //res.send({ success: true, books: books })
    } catch (e) {
        res.status(500).send({ success: false, message: `Falha ao buscar livros: ${e.message}` })
    }
}

async function signUp(req, res) {
    try {
        const books = await bookController.getBooks()
        res.status(201).send(books)

        //res.send({ success: true, books: books })
    } catch (e) {
        res.status(500).send({ success: false, message: `Falha ao buscar livros: ${e.message}` })
    }
}