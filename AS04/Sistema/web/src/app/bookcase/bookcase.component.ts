import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import * as M from 'materialize-css/dist/js/materialize';
import { LABELS } from './../../language';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-bookcase',
  templateUrl: './bookcase.component.html',
  styleUrls: ['./bookcase.component.css']
})
export class BookcaseComponent implements OnInit {

  constructor(private bookService: BookService, private loginService: LoginService) { }

  // tslint:disable-next-line:ban-types
  books: Object = [];
  newBookModal: any;
  editBookModal: any;
  labels: any = LABELS.pt;

  newBook: any = {
    title: '',
    isbn: '',
    release: new Date(),
    author: '',
    cover: ''
  };

  editedBook: any = {
    title: '',
    isbn: '',
    release: new Date(),
    author: '',
    cover: ''
  };

  currentUser: any;

  ngOnInit() {
    this.getBooks();
    this.newBookModal = document.getElementById('newBookModal');
    this.editBookModal = document.getElementById('editBookModal');
    M.Modal.init(this.newBookModal);
    M.Modal.init(this.editBookModal);

    this.currentUser = this.loginService.getUser()
    this.getBooks()
  }

  getBooks(): void {
    this.bookService.getBooks(this.loginService.getUser())
      .subscribe(books => {
        this.books = books;
        console.log(this.books);
      }, error => M.toast({html: 'Erro ao carregar livros'}));
  }

  setupEditBook(book) {
    this.editedBook = book;
  }

  saveBook() {
    this.bookService.saveBook(this.newBook, this.currentUser)
      .subscribe(response => {
        M.toast({html: this.labels.saveBookSuccess})
        this.getBooks()
      }, error =>   {
        M.toast({html: this.labels.saveBookFail});
      });
  }

  updateBook() {
    this.bookService.updateBook(this.editedBook)
      .subscribe(response => {
        M.toast({html: this.labels.updateBookSuccess});
      }, error =>   {
        console.log(error)
        M.toast({html: this.labels.updateBookFail});
      } );
  }

  removeBook(book) {
    this.bookService.removeBook(book)
      .subscribe(response => {
        M.toast({html: this.labels.removeBookSuccess});
      }, error =>   {
        M.toast({html: this.labels.removeBookFail});
      });
  }
  getCover(coverUrl) {
    return `url('${coverUrl}')`;
  }
  setPt() {
    this.labels = LABELS.pt;
  }
  setEn() {
    this.labels = LABELS.en;
  }
}
