const User = require('../models/users')

module.exports.getOneByEmail = async function(email) {
    return await User.findOne({ email: email })
}

module.exports.create = async function(newUser) {
    return await User.create(newUser)
}

module.exports.getOne = async function(user) {
    return await User.findOne({ email: user.email, password: user.password })
}