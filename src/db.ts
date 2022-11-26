import exampleBooks from "../example_books.json";
import type Book from "./types/book";

const books: Book[] = exampleBooks.map((book) => book as Book);

export default {
  getBooks() {
    return books;
  },
};
