import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }

  private booksApiUrl = `http://localhost:8080/api/books`
  private libraryApiUrl = `http://localhost:8080/api/library`

  // getBooks() {
  //   return this.http.get(this.booksApiUrl);
  // }

  saveBook(book, currentUser) {
    const data = {book, currentUser}
    return this.http.post(`${this.booksApiUrl}/`, data);
  }

  getBooks(user) {
    return this.http.get(`${this.libraryApiUrl}/${user._id}`);
  }

  updateBook(book) {
    return this.http.post(`${this.booksApiUrl}/${book._id}/update`, book);
  }

  removeBook(user, book) {
    return this.http.put(`${this.libraryApiUrl}/${user._id}`, book);
  }
}
