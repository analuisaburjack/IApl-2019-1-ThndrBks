const express = require('express'),
    router = express.Router(),
    libraryController = require('../controllers/libraries')

router.route('/library/:id')
    .get(getBooks)
    .put(removeBook)

module.exports = router

async function getBooks(req, res) {
    try {
        const userId = req.params.id
        const books = await libraryController.getBooks(userId)
        res.send({ success:true, books: books })
    } catch(e) {
        res.status(e.code || 500).send({ success: false, message: e.message || "Internal Server Error" })
    }
}


async function removeBook(req, res) {
    try {
        const userId = req.params.id,
            bookId = req.body._id
        await libraryController.removeBook(userId, bookId)
        res.send({ success: true})
    } catch(e) {
        res.send({ success: false, message: 'Internal Server Error' })
    }
}