const mongoose = require('mongoose')

const librarySchema = mongoose.Schema({
    created: { type: Date, default: Date.now() },
    books: [{ type: mongoose.Schema.Types.ObjectId }]
})

module.exports = mongoose.model('Library', librarySchema)