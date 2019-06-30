import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FilmService {
  private filmsApiUrl = `https://jns-filmes.herokuapp.com/api`;

  constructor(private http: HttpClient) {}

  getFilms() {
    console.log("Iniciando requisição");
    return this.http.get(`${this.filmsApiUrl}/films`);
  }

  getPersons() {
    console.log("Iniciando requisição");
    return this.http.get(`${this.filmsApiUrl}/persons`);
  }
}
