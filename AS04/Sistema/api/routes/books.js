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
        // const books = await bookController.getBooks()

        const books = [{
                title: 'A Lagoa Azul',
                isbn: '123456-7',
                genre: 'Adventure',
                author: 'JK',
                release: new Date('11-20-1990'),
                cover: 'http://br.web.img2.acsta.net/c_215_290/pictures/14/03/18/21/05/254594.jpg'
            },
            {
                title: 'Harry Potter',
                isbn: '123456-7',
                genre: 'Fantasy',
                author: 'JK',
                release: new Date('11-20-1990'),
                cover: 'https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg'
            }, {
                title: 'A Lagoa Azul',
                isbn: '123456-7',
                genre: 'Adventure',
                author: 'JK',
                release: new Date('11-20-1990'),
                cover: 'http://catalogo.ftd.com.br.s3.amazonaws.com/280x400_aventuras-no-sitio.jpg'
            }
        ]

        res.status(201).send(books)

        //res.send({ success: true, books: books })
    } catch (e) {
        res.status(500).send({ success: false, message: `Falha ao buscar livros: ${e.message}` })
    }
}

async function createBook(req, res) {
    try {
        const book = req.body
        res.status(201).send({ success: true, book: bookController.createBook(book) })
    } catch (e) {
        res.status(500).send({ success: false, message: `Falha ao cadastrar livro: ${e.message}` })
    }
}

async function getBook(req, res) {
    try {
        const bookId = req.params.id
        res.status(200).send({ success: true, book: bookController.getBook(bookId) })
    } catch (e) {
        res.status(404).send({ success: false, message: `Livro ${req.params.id} não encontrado.` })
    }
}

async function updateBook(req, res) {
    try {
        const book = req.body
        res.status(201).send({ success: true, book: bookController.updateBook(book) })
    } catch (e) {
        res.status(500).send({ success: false, message: `Não foi possível atualizar o livro` })
    }
}

async function removeBook(req, res) {
    try {
        const bookId = req.params.id
        res.send({ success: true, books: bookController.removeBook(bookId) })
    } catch (e) {
        res.status(500).send({ success: false, message: `Não foi possível remover o livro` })
    }
}