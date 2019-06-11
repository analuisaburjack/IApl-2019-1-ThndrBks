const Book = require('../models/books')

module.exports.getAll = async function() {
    return await Book.find()
}

module.exports.getById = async function(bookId) {
    return await Book.findById(bookId)
}

module.exports.createOne = async function(book) {
    return await Book.create(book)
}

module.exports.updateOne = async function(book) {
    return await Book.updateOne({ _id: book._id, book })
}

module.exports.removeOne = async function(bookId) {
    return await Book.findByIdAndRemove(bookId)
}