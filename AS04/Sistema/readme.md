# Thinderbooks

## O projeto Thinderbooks foi criado contendo uma API e Frontend Web separados.

#### API
Disponível no através do endpoint: https://thinderbooks.herokuapp.com/api

Funcionalidades disponíveis:

Consultar lista com todos os livros: (GET) /books
response: [{
    _id: String,
    created: Date,
    title: String,
    isbn: String,
    author: String,
    release: Date,
    genre: ['Romance', 'Adventure', 'Fantasy', 'Thriller', 'Mistery'] //Uma dentre as opções
}]


Criar um livro: (POST) /books
body request: {
    "title": { type: String, required: true },
    "isbn": { type: String, required: true },
    "author": { type: String, required: true },
    "release": "dd-mm-yyyy",
    "genre": ['Romance', 'Adventure', 'Fantasy', 'Thriller', 'Mistery'] //Uma dentre as opçes
}


Buscar um livro específico: (GET) /books/:id
:id corresponde ao parâmetro _id gerado automaticamente pelo mongodb.
response: {
    _id: String,
    created: Date,
    title: String,
    isbn: String,
    author: String,
    release: Date,
    genre: ['Romance', 'Adventure', 'Fantasy', 'Thriller', 'Mistery'] //Uma dentre as opções
}

Atualizar um livro: (PUT) /books/:id
:id corresponde ao parâmetro _id gerado automaticamente pelo mongodb.
body request: { 
    "title": { type: String, required: true },
    "isbn": { type: String, required: true },
    "author": { type: String, required: true },
    "release": "dd-mm-yyyy",
    "genre": ['Romance', 'Adventure', 'Fantasy', 'Thriller', 'Mistery'] //Uma dentre as opçes
}
