const librariesRepository = require('../repositories/libraries')

module.exports.removeBook = async function(userId, bookId) {
    return await librariesRepository.delete(userId, bookId);
}

module.exports.getBooks = async function(userId) {
    return await librariesRepository.getBooks(userId);
}