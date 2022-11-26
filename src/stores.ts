import { writable, type Writable } from "svelte/store";

import type Book from "./types/book";
import db from "./db";

export const books: Writable<Book[]> = writable(db.getBooks());

export const selectedBook: Writable<Book> = writable();

export const editMode: Writable<boolean> = writable(false);

export const undoableCount: Writable<number> = writable(0);
