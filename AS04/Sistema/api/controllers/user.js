const userRepository = require('../repositories/user');
const Library = require('../models/libraries');

module.exports.createUser = async function(newUser) {

    try {

        const newLibrary = await Library.create(new Library())
        newUser.library = newLibrary._id
        return await userRepository.create(newUser)
    } catch (error) {
        if (error.code === 11000) throw { code: 10, message: `User already exists` }
        else throw error
    }
}

module.exports.getUser = async function(user) {

    try {
        const existentUser = await userRepository.getOne(user)
        if (!existentUser) throw { type: "Not found user", code: 40, message: "Not found user" }

        return existentUser
    } catch (error) {
        throw error
    }
}