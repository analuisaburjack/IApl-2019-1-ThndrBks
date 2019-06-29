const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    created: { type: Date, default: Date.now() },
    title: { type: String, required: true },
    isbn: { type: String, required: true },
    author: { type: String, required: true },
    cover: { type: String, required: true },
    release: Date,
    genre: { type: String }
})

module.exports = mongoose.model('Book', bookSchema)