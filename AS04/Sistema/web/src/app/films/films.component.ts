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
  deletableFilm: any;
  deleteFilmModal: HTMLElement;
  newFilm: any = {
    id: '',
    title: '',
    idActor: '',
    idDirector: '',
    idActress: '',
    genre: '',
    year: ''
  };

  constructor(private filmsService: FilmService) {}

  films: any = [];
  labels = LABELS.pt;

  newFilmModal: any;
  editFilmModal: any;
  viewFilmModal: any;
  viewPersonModal: any;

  editedFilm: any;
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

    this.newFilmModal = document.getElementById("newFilmModal");
    M.Modal.init(this.newFilmModal);

    this.deleteFilmModal = document.getElementById("deleteFilmModal");
    M.Modal.init(this.deleteFilmModal);

    this.editFilmModal = document.getElementById("editFilmModal");
    M.Modal.init(this.editFilmModal);

    this.viewPersonModal = document.getElementById("viewPersonModal");
    M.Modal.init(this.viewPersonModal);
  }

  viewFilm(film) {
    this.currentFilm = film;

    this.currentFilm.director = this.persons.find(person => {
      return film.idDirector == person.id;
    });
    this.currentFilm.actor = this.persons.find(person => {
      return film.idActor == person.id;
    });
    this.currentFilm.actress = this.persons.find(person => {
      return film.idActress == person.id;
    });
  }

  setViewPerson(person) {
    this.personView = person;
  }

  editFilm(film) {
    this.editedFilm = film;
  }

  addNewFilm() {
    this.filmsService
      .addFilm(this.newFilm)
      .subscribe(
        response => {
          M.toast({ html: `${this.labels.done}` });

        },
        error => {
          console.log(error)
          M.toast({ html: `${this.labels.error}` });
        }
      );
  }

  deleteFilm() {
    this.filmsService
      .deleteFilm(this.deletableFilm)
      .subscribe(
        response => {
          M.toast({ html: `${this.labels.done}` });

        },
        error => {
          M.toast({ html: `${this.labels.error}` });
        }
      );
  }

  updateFilm() {
    console.log(this.editedFilm)
    this.filmsService.updateFilm(this.editedFilm).subscribe(
      response => {
        M.toast({ html: `${this.labels.done}` });
      },
      error => M.toast({ html: `${this.labels.error}` })
    );
  }

  setDeletableFilm(film) {
    this.deletableFilm = film;
  }

  setPt() {
    this.labels = LABELS.pt;
  }
  setEn() {
    this.labels = LABELS.en;
  }
}
