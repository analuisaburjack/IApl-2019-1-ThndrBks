import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private usersApiUrl = `http://localhost:8080/api/login`
  user: any;

  signIn(user) {
    return this.http.post(`${this.usersApiUrl}/signin`, user);
  }

  signUp(user) {
    return this.http.post(`${this.usersApiUrl}/signup`, user);
  }

  setUser(user) {
    this.user = user
  }

  getUser() {
    return this.user
  }
}
