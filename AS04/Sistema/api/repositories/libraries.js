const Library = require('../models/libraries')

module.exports.create = function() {
    return Library.create()
}