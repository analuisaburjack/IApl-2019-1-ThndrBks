import { Component, OnInit } from '@angular/core';
import { Book } from './../book';
import { BookService } from './../book.service'

@Component({
  selector: 'app-bookcase',
  templateUrl: './bookcase.component.html',
  styleUrls: ['./bookcase.component.css']
})
export class BookcaseComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks()
  }

  books: any[]

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => console.log(books))
  }

  getCover(coverUrl) {
    return `url('${coverUrl}')`
  }

}
