const express = require('express'),
    router = express.Router(),
    bookController = require('../controllers/books')


router.route('/books/')
    .get(getBooks)
    .post(createBook)

router.route('/books/:id')
    .get(getBook)
    .put(updateBook)

router.route('/books/remove/:id')
    .post(removeBook)

module.exports = router

async function getBooks(req, res) {
    try {
        const books = await bookController.getBooks()
        res.send({ success: true, books: books })
    } catch(e) {
        res.status(500).send({ success: false, message: `Falha ao buscar livros: ${e.message}`})
    }
}

async function createBook(req, res) {
    try {
        const book = req.body
        res.status(201).send({ success: true, book: await bookController.createBook(book) })
    } catch(e) {
        res.status(500).send({ success: false, message: `Falha ao cadastrar livro: ${e.message}`})
    }
}

async function getBook(req, res) {
    try {
        const bookId = req.params.id
        res.status(200).send({ success: true, book: await bookController.getBook(bookId) })
    } catch (e) {
        res.status(404).send({ success: false, message: `Livro ${req.params.id} não encontrado.`})
    }
}

async function updateBook(req, res) {
    try {
        const book = req.body
        res.status(201).send({ success: true, book: await bookController.updateBook(book) })
    } catch(e) {
        res.status(500).send({ success: false, message: `Não foi possível atualizar o livro` })
    }
}

async function removeBook(req, res) {
    try {
        const bookId = req.params.id
        res.send({ success: true, books: await bookController.removeBook(bookId) })
    } catch(e) {
        res.status(500).send({ success: false, message: `Não foi possível remover o livro` })
    }
}