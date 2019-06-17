import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-bookcase',
  templateUrl: './bookcase.component.html',
  styleUrls: ['./bookcase.component.css']
})
export class BookcaseComponent implements OnInit {

  constructor(private bookService: BookService) { }

  // tslint:disable-next-line:ban-types
  books: Object = [];
  modal: any;

  ngOnInit() {
    this.getBooks();
    this.modal = document.getElementById('modal1')
    M.Modal.init(this.modal);
  }


  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  deleteBook() {

  }

  saveBook() {

  }

  getCover(coverUrl) {
    return `url('${coverUrl}')`
  }

}
