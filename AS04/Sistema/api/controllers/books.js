const bookRepository = require('../repositories/books');

module.exports.getBooks = async function() {
    return await bookRepository.getAll()
}

module.exports.getBook = async function(bookId) {
    return await bookRepository.getById(bookId)
}

module.exports.createBook = async function(book) {
    if(isValid(book)) {
        return await bookRepository.createOne(book)
    }
}

module.exports.updateBook = async function(book) {
    if(isValid(book)) {
        return await bookRepository.updateOne(book)
    }
}

module.exports.removeBook = async function(bookId) {
    await bookRepository.removeOne(bookId)
    return await bookRepository.getAll()
}

function isValid({title, isbn, author, genre}) {
    if(!title)
        throw { code: 400, message: `Invalid title`}
    if(!isbn)
        throw { code: 400, message: `Invalid isbn`}
    if(!author)
        throw { code: 400, message: `Invalid author`}
    if(!genre || (genre !== 'Romance' && genre !==  'Adventure' && genre !==  'Fantasy' && 
        genre !==  'Thriller' && genre !==  'Mistery'))
        throw { code: 400, message: `Invalid genre`}
    return true
}