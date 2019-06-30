const Library = require('../models/libraries')

module.exports.create = async function(library) {
    return await Library.create(library)
}

module.exports.update = async function(userId, set) {
    return await Library.findOneAndUpdate({ userId: userId }, { $set: set })
}