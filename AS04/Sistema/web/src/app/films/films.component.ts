import { Component, OnInit } from "@angular/core";
import { FilmService } from "../film.service";
import { LABELS } from "./../../film-language";
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: "app-films",
  templateUrl: "./films.component.html",
  styleUrls: ["./films.component.css"]
})
export class FilmsComponent implements OnInit {
  constructor(private filmsService: FilmService) {}

  films: any = [];
  labels = LABELS.pt;

  newFilmModal: any;
  editFilmModal: any;
  viewFilmModal: any;
  viewPersonModal: any;

  currentFilm: any;
  persons: any;

  directors: any;
  actors: any;
  actresses: any;

  personView: any;

  tabs: any;

  ngOnInit() {
    this.filmsService
      .getFilms()
      .subscribe(films => (this.films = films), error => console.log("erro"));
    this.filmsService.getPersons().subscribe(
      persons => {
        this.persons = persons;
        this.actors = this.persons.filter(person => {
          return person.job == "ACTOR_OR_ACTRESS" && person.gender == "MALE";
        });
        this.actresses = this.persons.filter(person => {
          return person.job == "ACTOR_OR_ACTRESS" && person.gender == "FEMALE";
        });
        this.directors = this.persons.filter(person => {
          return person.job == "DIRECTOR";
        });
      },
      error => console.log("erro")
    );

    this.viewFilmModal = document.getElementById("viewFilmModal");
    M.Modal.init(this.viewFilmModal);

    this.viewPersonModal = document.getElementById("viewPersonModal");
    M.Modal.init(this.viewPersonModal);
  }

  viewFilm(film) {
    this.currentFilm = film

    this.currentFilm.director = this.persons.find(person => {
      return film.idDirector == person.id
    })
    this.currentFilm.actor = this.persons.find(person => {
      return film.idActor == person.id
    })
    this.currentFilm.actress = this.persons.find(person => {
      return film.idActress == person.id
    })
  }

  setViewPerson(person) {
    this.personView = person
  }
}
