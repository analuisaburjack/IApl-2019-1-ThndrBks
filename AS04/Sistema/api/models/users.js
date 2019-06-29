const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    created: { type: Date, default: Date.now() },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    library: { type: mongoose.Schema.Types.ObjectId }
})

userSchema.index({ 'email': 1 }, { unique: true, name: 'emailUnique' });

module.exports = mongoose.model('User', userSchema)