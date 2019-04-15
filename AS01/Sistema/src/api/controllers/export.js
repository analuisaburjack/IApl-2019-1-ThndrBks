const fs = require('fs');

const codLength = 7;
const titleLength = 30;
const editLength = 30;
const autorLength = 30;
const qtdLength = 4; 

module.exports.exportBooks = () => {
    let books = getBooks();

    let text = getText(books)
    

    fs.writeFile('books.txt', text, 'utf8', function(err) {
        console.log('passing');
        if(err)
            console.error(err.message)

    })
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

        if(book.Cod.length < codLength) {
            for(let i = 0; i < codLength - book.Cod; i++){
                text += ' ';
            }
        }

        if(book.Titulo.length > titleLength)
            book.Titulo = book.Titulo.slice(0, titleLength)
        
        text += book.Titulo;

        if(book.Titulo.length < titleLength) {
            for(let i = 0; i < titleLength - book.Titulo; i++){
                text += ' ';
            }
        }

        if(book.Editora.length > editLength)
            book.Editora = book.cod.slice(0, editLength)
        
        text += book.Editora;

        if(book.Editora.length < editLength) {
            for(let i = 0; i < editLength - book.Editora; i++){
                text += ' ';
            }
        }

        if(book.Autor.length > autorLength)
            book.Autor.length = book.Autor.slice(0, autorLength)
        
        text += book.Autor;

        if(book.Autor.length < autorLength) {
            for(let i = 0; i < autorLength - book.Autor; i++){
                text += ' ';
            }
        }

        if(book.Qtd.length > qtdLength)
            book.Qtd = book.Qtd.slice(0, qtdLength)
        
        text += book.Qtd;

        if(book.Qtd.length < qtdLength) {
            for(let i = 0; i < qtdLength - book.Qtd; i++){
                text += ' ';
            }
        }
        text += '\n'
    }
    return text;    
}

function getBooks() {
    let XLS = require('xlsx')
    let books = XLS.readFile("/home/vstillo/Documentos/ES/Integracao/IApl-2019-1-ThndrBks/AS01/Sistema/src/api/controllers/Book1.xlsx").Sheets
    books =  XLS.utils.sheet_to_json(books.Sheet1)
    return books
}