import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }

  private booksApiUrl = `http://localhost:8080/api/books`

  // getBooks() {
  //   return this.http.get(this.booksApiUrl);
  // }

  saveBook(book, currentUser) {
    const data = {book, currentUser}
    return this.http.post(`${this.booksApiUrl}/create`, data);
  }

  getBooks(user) {
    return this.http.post(this.booksApiUrl, user);
  }

  updateBook(book) {
    return this.http.post(`${this.booksApiUrl}/update`, book);
  }

  removeBook(book) {
    return this.http.post(`${this.booksApiUrl}/remove/${book._id}`, book);
  }
}
