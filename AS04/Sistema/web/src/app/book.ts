import { Genre } from './genre';

export interface Book {
    title: string;
    isbn: string;
    author: string;
    release: Date;
    genre: Genre;
    cover: string;
}
