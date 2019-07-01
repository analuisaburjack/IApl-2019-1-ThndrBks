const bookRepository = require('../repositories/books');
const Book = require('../models/books')
const librariesRepository = require('../repositories/libraries')

module.exports.getBooks = async function() {

    const books = await bookRepository.getAll()
    return books
}

module.exports.getBook = async function(bookId) {
    return await bookRepository.getById(bookId)
}

module.exports.createBook = async function(book, user) {
    book.release = new Date(book.release)
    isValid(book)
    const existentBook = await Book.findOne({ isbn: book.isbn })
    if(!existentBook)
        existentBook = await bookRepository.createOne(book)

    if(!existentBook)
        throw { code: 500, success: false, message: `Fail saving book`}
    
    if (user) {
        const userLibrary = await librariesRepository.getOne({ userId: user._id })
        await librariesRepository.addBook(user._id, existentBook._id)
        userLibrary.books.push(existentBook._id)
        await userLibrary.save()
    }
    return existentBook;
}

module.exports.updateBook = async function(id, book) {
    isValid(book)
    return await bookRepository.updateOne(id, book)
}

module.exports.removeBook = async function(bookId) {
    await bookRepository.removeOne(bookId)
    return await bookRepository.getAll()
}

function isValid({ title, isbn, author, genre }) {
    if (!title)
        throw { code: 400, message: `Invalid title` }
    if (!isbn)
        throw { code: 400, message: `Invalid isbn` }
    if (!author)
        throw { code: 400, message: `Invalid author` }
    if (!genre)
        throw { code: 400, message: `Invalid genre` }
    return true
}