import { Genre } from '../app/genre'

export interface Book {
    title: String
    isbn: String
    author: String
    genre: Genre
    cover: String
}