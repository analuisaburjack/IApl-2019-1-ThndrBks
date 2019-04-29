import { Component, OnInit } from '@angular/core';
import { Book } from './../book';
import { Genre } from './../genre';

@Component({
  selector: 'app-bookcase',
  templateUrl: './bookcase.component.html',
  styleUrls: ['./bookcase.component.css']
})
export class BookcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  books: Book[] = [{
    title: 'A Lagoa Azul',
    isbn: '123456-7',
    genre: Genre.Adventure,
    author: 'JK',
    cover: 'http://br.web.img2.acsta.net/c_215_290/pictures/14/03/18/21/05/254594.jpg'
  },
  {
    title: 'Harry Potter',
    isbn: '123456-7',
    genre: Genre.Fantasy,
    author: 'JK',
    cover: 'https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg'
  },{
    title: 'A Lagoa Azul',
    isbn: '123456-7',
    genre: Genre.Adventure,
    author: 'JK',
    cover: 'http://catalogo.ftd.com.br.s3.amazonaws.com/280x400_aventuras-no-sitio.jpg'
  },
  {
    title: 'Harry Potter',
    isbn: '123456-7',
    genre: Genre.Fantasy,
    author: 'JK',
    cover: 'https://culturamaniac.files.wordpress.com/2013/10/8810f-monteirolobato1.jpg?w=350&h=486'
  },{
    title: 'A Lagoa Azul',
    isbn: '123456-7',
    genre: Genre.Adventure,
    author: 'JK',
    cover: 'https://livrarialoyola-img.f1cdn.com.br/resizer/view/400/700/false/true/dicionario-da-turma-do-sitio-do-picapau-amarelo-1-editora-globo-9788525036469-265465.jpg'
  },
  {
    title: 'Harry Potter',
    isbn: '123456-7',
    genre: Genre.Fantasy,
    author: 'JK',
    cover: 'http://statics.livrariacultura.net.br/products/capas_lg/168/2574168.jpg'
  },{
    title: 'A Lagoa Azul',
    isbn: '123456-7',
    genre: Genre.Adventure,
    author: 'JK',
    cover: 'https://containercultura.com.br/imgs/produtos/50133/images/50133.jpg'
  },
  {
    title: 'Harry Potter',
    isbn: '123456-7',
    genre: Genre.Fantasy,
    author: 'JK',
    cover: 'https://image.slidesharecdn.com/slidestdopicapauamarelo-130621221538-phpapp01/95/stio-do-pica-pau-amarelo-livro-virtual-1-638.jpg?cb=1371853181'
  },{
    title: 'A Lagoa Azul',
    isbn: '123456-7',
    genre: Genre.Adventure,
    author: 'JK',
    cover: 'http://br.web.img2.acsta.net/c_215_290/pictures/14/03/18/21/05/254594.jpg'
  },
  {
    title: 'Harry Potter',
    isbn: '123456-7',
    genre: Genre.Fantasy,
    author: 'JK',
    cover: 'https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg'
  },{
    title: 'A Lagoa Azul',
    isbn: '123456-7',
    genre: Genre.Adventure,
    author: 'JK',
    cover: 'http://catalogo.ftd.com.br.s3.amazonaws.com/280x400_aventuras-no-sitio.jpg'
  },
  {
    title: 'Harry Potter',
    isbn: '123456-7',
    genre: Genre.Fantasy,
    author: 'JK',
    cover: 'https://culturamaniac.files.wordpress.com/2013/10/8810f-monteirolobato1.jpg?w=350&h=486'
  },{
    title: 'A Lagoa Azul',
    isbn: '123456-7',
    genre: Genre.Adventure,
    author: 'JK',
    cover: 'https://livrarialoyola-img.f1cdn.com.br/resizer/view/400/700/false/true/dicionario-da-turma-do-sitio-do-picapau-amarelo-1-editora-globo-9788525036469-265465.jpg'
  },
  {
    title: 'Harry Potter',
    isbn: '123456-7',
    genre: Genre.Fantasy,
    author: 'JK',
    cover: 'https://image.slidesharecdn.com/slidestdopicapauamarelo-130621221538-phpapp01/95/stio-do-pica-pau-amarelo-livro-virtual-1-638.jpg?cb=1371853181'
  }]

  getCover(coverUrl) {
    return `url('${coverUrl}')`
  }

}
