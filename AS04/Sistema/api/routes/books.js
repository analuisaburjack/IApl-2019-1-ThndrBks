const express = require('express'),
    router = express.Router(),
    bookController = require('../controllers/books'),
    userController = require('../controllers/user')

router.route('/books/')
    .post(getBooks)

router.route('/books/create')
    .post(createBook)

router.route('/books/update')
    .post(updateBook)

router.route('/books/remove/:id')
    .post(removeBook)

router.route('/books/remove/:id')
    .post(removeBook)

router.route('/login/signup/')
    .post(createUser)

router.route('/login/signin/')
    .post(login)

module.exports = router

async function getBooks(req, res) {
    try {
        const user = req.body
        const books = await bookController.getBooks(user)
        res.status(201).send(books)

    } catch (e) {
        res.status(500).send({ success: false, message: `Falha ao buscar livros: ${e.message}` })
    }
}

async function createBook(req, res) {
    try {
        const book = req.body.book
        const user = req.body.currentUser

        const response = await bookController.createBook(book, user)
        if (response) {
            res.status(201).send({ success: true, book: await bookController.createBook(book, user) })
        } else {
            res.status(500).send({ success: false, message: `Falha ao cadastrar livro: ${e.message}` })
        }
    } catch (e) {
        res.status(500).send({ success: false, message: `Falha ao cadastrar livro: ${e.message}` })
    }
}

async function getBook(req, res) {
    try {
        const bookId = req.params.id
        res.status(200).send({ success: true, book: await bookController.getBook(bookId) })
    } catch (e) {
        res.status(404).send({ success: false, message: `Livro ${req.params.id} não encontrado.` })
    }
}

async function updateBook(req, res) {
    try {
        const id = req.body._id
        const book = req.body
        delete book._id
        const updatedBook = await bookController.updateBook(id, book)
        res.status(201).send({ success: true, book: updatedBook })
    } catch (e) {
        res.status(500).send({ success: false, message: `Não foi possível atualizar o livro` })
    }
}

async function removeBook(req, res) {
    try {
        const bookId = req.params.id
        res.send({ success: true, books: await bookController.removeBook(bookId) })
    } catch (e) {
        res.status(500).send({ success: false, message: `Não foi possível remover o livro` })
    }
}

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