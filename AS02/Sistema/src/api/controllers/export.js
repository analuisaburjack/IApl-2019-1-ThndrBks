const fs = require('fs');

const codLength = 7;
const titleLength = 30;
const editLength = 30;
const autorLength = 30;
const qtdLength = 4; 

module.exports.exportBooks = () => {
    let books = getBooks();

    let text = JSON.stringify(books);
    

    fs.writeFile('booksExport.json', text, 'utf8', function(err) {
        console.log('passing');
        if(err)
            console.error(err.message)

    })

    return books;
}

function getText(books) {
    let text = '';
    for(let book of books) {
        book.Cod = book.Cod.toString()
        book.Autor = book.Autor.toString()
        book.Titulo = book.Titulo.toString()
        book.Editora = book.Editora.toString()
        book.Qtd = book.Qtd.toString()
        if(book.Cod.length > codLength)
            book.Cod = book.cod.slice(0, codLength)
        
        text += book.Cod;

        for(let i = 0; i < book.Cod.length; i++){
            text += ' ';
        }

        if(book.Titulo.length > titleLength)
            book.Titulo = book.Titulo.slice(0, titleLength)
        
        text += book.Titulo;

        for(let i = 0; i < titleLength - book.Titulo.length; i++){
            text += ' ';
        }
        

        if(book.Editora.length > editLength)
            book.Editora = book.cod.slice(0, editLength)
        
        text += book.Editora;

        for(let i = 0; i < editLength - book.Editora.length; i++){
            text += ' ';
        }

        if(book.Autor.length > autorLength)
            book.Autor.length = book.Autor.slice(0, autorLength)
        
        text += book.Autor;

        for(let i = 0; i < autorLength - book.Autor.length; i++){
            text += ' ';
        }

        if(book.Qtd.length > qtdLength)
            book.Qtd = book.Qtd.slice(0, qtdLength)
        
        text += book.Qtd;

        for(let i = 0; i < qtdLength - book.Qtd.length; i++){
            text += ' ';
        }
        text += '\n'
    }
    return text;    
}

function getBooks() {
    let books = require('./books.json')
    return books
}