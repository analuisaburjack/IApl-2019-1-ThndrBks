# Thinderbooks

## O projeto Thinderbooks foi criado contendo uma API e Frontend Web separados.

#### API
Disponível no através do endpoint: https://thinderbooks.herokuapp.com/api

Funcionalidades disponíveis:

Consultar lista com todos os livros: (GET) /books
response: [{
    _id: String, <br />
    created: Date, <br />
    title: String, <br />
    isbn: String, <br />
    author: String, <br />
    release: Date, <br />
    genre: ['Romance', 'Adventure', 'Fantasy', 'Thriller', 'Mistery'] //Uma dentre as opções <br />
}]


Criar um livro: (POST) /books
body request: {
    "title": String, <br />
    "isbn": String, <br />
    "author": String, <br />
    "release": "dd-mm-yyyy", <br />
    "genre": ['Romance', 'Adventure', 'Fantasy', 'Thriller', 'Mistery'] //Uma dentre as opçes <br />
}


Buscar um livro específico: (GET) /books/:id
:id corresponde ao parâmetro _id gerado automaticamente pelo mongodb.
response: {
    _id: String, <br />
    created: Date, <br /> 
    title: String, <br />
    isbn: String, <br />
    author: String, <br />
    release: Date, <br />
    genre: ['Romance', 'Adventure', 'Fantasy', 'Thriller', 'Mistery'] //Uma dentre as opções <br />
}

Atualizar um livro: (PUT) /books/:id
:id corresponde ao parâmetro _id gerado automaticamente pelo mongodb.
body request: { 
    "title": String, <br />
    "isbn": String, <br />
    "author": String, <br />
    "release": "dd-mm-yyyy", <br />
    "genre": ['Romance', 'Adventure', 'Fantasy', 'Thriller', 'Mistery'] //Uma dentre as opçes <br />
}
