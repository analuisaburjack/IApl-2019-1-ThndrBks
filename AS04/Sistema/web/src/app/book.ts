import { Genre } from '../app/genre'

export interface Book {
    title: String
    isbn: String
    author: String
    release: Date
    genre: Genre
    cover: String
}