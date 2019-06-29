const bookRepository = require('../repositories/books');
const Book = require('../models/books')
const Library = require('../models/libraries')

module.exports.getBooks = async function(user) {

    const library = await Library.findById(user.library)

    const books = await bookRepository.getAllByUser(library.books)
    return books
}
module.exports.getBook = async function(bookId) {
    return await bookRepository.getById(bookId)
}

module.exports.createBook = async function(book, user) {
    book.release = new Date(book.release)

    try {
        const existentBook = await Book.findOne({ isbn: book.isbn })
        if (existentBook) {
            const library = await Library.findById(user.library)
            library.books.push(existentBook._id)
            await library.save()
            return true
        } else if (isValid(book)) {
            const savedBook = await bookRepository.createOne(book)
            const userLibrary = await Library.findById(user.library)
            userLibrary.books.push(savedBook._id)
            await userLibrary.save()
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }


}

module.exports.updateBook = async function(id, book) {
    if (isValid(book)) {
        return await bookRepository.updateOne(id, book)
    }
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
    return true
}