const Book = require('../models/books')

module.exports.getAll = async function() {
    return await Book.find()
}

module.exports.getAllByUser = async function(booksIds) {
    return await Book.find({
        _id: {
            $in: booksIds
        }
    })
}

module.exports.getById = async function(bookId) {
    return await Book.findById(bookId)
}

module.exports.createOne = async function(book) {
    return await Book.create(book)
}

module.exports.updateOne = async function(id, book) {
    return await Book.findByIdAndUpdate(id, book, { new: true })
}

module.exports.removeOne = async function(bookId) {
    return await Book.findByIdAndRemove(bookId)
}