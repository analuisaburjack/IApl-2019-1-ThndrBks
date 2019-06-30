const userRepository = require('../repositories/user');
const libraryRepositories = require('../repositories/libraries');

module.exports.createUser = async function(user) {
    try {
        isValidUser(user)
        const newUser = await userRepository.create(user)
        const newLibrary = await libraryRepositories.create({ userId: newUser._id, books: [] })
        return { user: newUser, libraries: newLibrary}
    } catch (error) {
        if (error.code === 11000) throw { code: 303, message: `User already exists` }
        else throw error
    }
}

module.exports.getUser = async function(user) {
    try {
        const existentUser = await userRepository.getOne(user)
        if (!existentUser) throw { code: 404, message: "Incorrect email or password" }
        return existentUser
    } catch (error) {
        throw error
    }
}

function isValidUser({email, password, name}) {
    if(!name || !password || !email)
        throw { code: 400, message: `Missing name, password or email`}
}