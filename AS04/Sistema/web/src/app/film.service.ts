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

  updateFilm(film) {
    console.log(film)
    return this.http.put(`${this.filmsApiUrl}/film/{id}?id=${film.id}&title=${film.title}&genre=${film.genre}&idActor=${film.idActor}&idActress=${film.idActress}&idDirector=${film.idDirector}&year=${film.year}`, {});
  }

  deleteFilm(film) {
    return this.http.delete(`${this.filmsApiUrl}/film/{id}?id=${film.id}`, {});
  }

  addFilm(film) {
    console.log(film)
    return this.http.post(`${this.filmsApiUrl}/film/?id=${film.id}&title=${film.title}&genre=${film.genre}&idActor=${film.idActor}&idActress=${film.idActress}&idDirector=${film.idDirector}&year=${film.year}`, {});
  }
}
