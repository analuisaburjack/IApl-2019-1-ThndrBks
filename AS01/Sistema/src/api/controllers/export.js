const fs = require('fs');
const XLS = require('xlsx')

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
    const xlsReader = require('xlsx')
    let xls = xlsReader.readFile('Book1.xlsx');
    let text = '';
    for(let book of books) {
        if(book.cod > codLength)
            book.cod = book.cod.slice(0, codLength)
        
        text += book.cod;

        if(book.cod < codLength) {
            for(let i = 0; i < codLength - book.cod; i++){
                text += ' ';
            }
        }

        if(book.title > titleLength)
            book.title = book.title.slice(0, titleLength)
        
        text += book.title;

        if(book.title < titleLength) {
            for(let i = 0; i < titleLength - book.title; i++){
                text += ' ';
            }
        }

        if(book.edit > editLength)
            book.edit = book.cod.slice(0, editLength)
        
        text += book.edit;

        if(book.edit < editLength) {
            for(let i = 0; i < editLength - book.edit; i++){
                text += ' ';
            }
        }

        if(book.autor > autorLength)
            book.autor = book.autor.slice(0, autorLength)
        
        text += book.autor;

        if(book.autor < autorLength) {
            for(let i = 0; i < autorLength - book.autor; i++){
                text += ' ';
            }
        }

        if(book.qtd > qtdLength)
            book.qtd = book.qtd.slice(0, qtdLength)
        
        text += book.qtd;

        if(book.qtd < qtdLength) {
            for(let i = 0; i < qtdLength - book.qtd; i++){
                text += ' ';
            }
        }
        text += '\n'
    }
    return text;    
}

function getBooks() {
    let books = XLS.readFile("Book1.xlsx");
    return books;
}