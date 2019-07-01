const Library = require('../models/libraries')
const Book = require('../models/books')

module.exports.create = async function(library) {
    return await Library.create(library)
}

module.exports.update = async function(userId, set) {
    return await Library.findOneAndUpdate({ userId: userId }, { $set: set })
}

module.exports.addBook = async function(userId, bookId) {
    return await Library.findOneAndUpdate({ userId: userId }, { $addToSet: { 'books': bookId } }, { new: true })
}

module.exports.delete = async function(userId, bookId) {
    return await Library.findOneAndUpdate({ userId: userId}, { $pull: { books: bookId } })
}

module.exports.getOne = async function(query) {
    return await Library.findOne(query)
}

module.exports.getBooks = async function(userId) {
    const library = await Library.findOne({ userId: userId })
    return await Book.find({ _id: { $in: library.books }})
}