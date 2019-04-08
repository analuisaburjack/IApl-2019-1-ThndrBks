const fs = require('fs');

module.exports.exportBooks = () => {
    let data = '' //buscar dados dos livros

    fs.writeFile('books.txt', 'teste\n teste', 'utf8', function(err) {
        console.log('passing');
        if(err)
            console.error(err.message);
        

    })
}