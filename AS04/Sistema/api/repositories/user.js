const User = require('../models/users')

module.exports.getOneByEmail = function(email) {

    return null

    // return await User.find({ email: email })[0]
}

module.exports.create = async function(newUser) {
    return await User.create(newUser)
}

module.exports.getOne = async function(user) {

    return await User.findOne({ email: user.email, password: user.password })
}