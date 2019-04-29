const fs = require('fs')
const xml2js = require('xml2js')

const parser = new xml2js.Parser()

fs.readFile('banco.xml', (err, data) => {
    parser.parseString(
        data,
        (err, result) => {
            console.dir(result)
            console.log('Read finishes')
        })
})