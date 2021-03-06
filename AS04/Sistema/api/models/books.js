const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    created: { type: Date, default: Date.now() },
    title: { type: String, required: true },
    isbn: { type: String, required: true },
    author: { type: String, required: true },
    cover: { type: String, required: false },
    release: Date,
    genre: { type: String, required: true }
})

module.exports = mongoose.model('Book', bookSchema)