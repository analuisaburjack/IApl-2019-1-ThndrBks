import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { BOOKS } from './books_mock'
import { Book } from './book'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }

  private booksApiUrl = `http://localhost:8080/api/books`

  getBooks() {
    return this.http.get(this.booksApiUrl)
  }

  saveBook() {

  }

  deleteBook() {

  }
}
