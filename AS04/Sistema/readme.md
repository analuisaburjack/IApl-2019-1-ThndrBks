# Thinderbooks

## O projeto Thinderbooks foi criado contendo uma API e Frontend Web separados.

#### API
Disponível no através do endpoint: https://thinderbooks.herokuapp.com/api

Funcionalidades disponíveis: <br />

Consultar lista com todos os livros: (GET) /books <br />
response: [{ <br />
    _id: String, <br />
    created: Date, <br />
    title: String, <br />
    isbn: String, <br />
    author: String, <br />
    release: Date, <br />
    genre: ['Romance', 'Adventure', 'Fantasy', 'Thriller', 'Mistery'] //Uma dentre as opções <br />
}]


Criar um livro: (POST) /books <br />
body request: { <br />
    "title": String, <br />
    "isbn": String, <br />
    "author": String, <br />
    "release": "dd-mm-yyyy", <br />
    "genre": ['Romance', 'Adventure', 'Fantasy', 'Thriller', 'Mistery'] //Uma dentre as opçes <br />
}


Buscar um livro específico: (GET) /books/:id <br />
:id corresponde ao parâmetro _id gerado automaticamente pelo mongodb.
response: { <br />
    _id: String, <br />
    created: Date, <br /> 
    title: String, <br />
    isbn: String, <br />
    author: String, <br />
    release: Date, <br />
    genre: ['Romance', 'Adventure', 'Fantasy', 'Thriller', 'Mistery'] //Uma dentre as opções <br />
}

Atualizar um livro: (PUT) /books/:id <br />
:id corresponde ao parâmetro _id gerado automaticamente pelo mongodb. <br />
body request: { <br />
    "title": String, <br />
    "isbn": String, <br />
    "author": String, <br />
    "release": "dd-mm-yyyy", <br />
    "genre": ['Romance', 'Adventure', 'Fantasy', 'Thriller', 'Mistery'] //Uma dentre as opçes <br />
}
