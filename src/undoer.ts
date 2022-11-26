import { get } from "svelte/store";
import { undoableCount, books, selectedBook } from "./stores";
import type Book from "./types/book";

const MAX_MEMENTOS_STACK_LENGTH = 10;

export default class Undoer {
  private static instance: Undoer;
  private mementos: Book[];

  private constructor() {
    this.mementos = [];
  }

  private static getInstance(): Undoer {
    if (!Undoer.instance) {
      Undoer.instance = new Undoer();
    }

    return Undoer.instance;
  }

  public static recordAction(state: Book): void {
    const undoer = Undoer.getInstance();

    undoer.mementos.push(state);

    if (undoer.mementos.length > MAX_MEMENTOS_STACK_LENGTH)
      undoer.mementos.shift();

    undoableCount.set(undoer.mementos.length);
  }

  public static undoLastAction(): void {
    const undoer = Undoer.getInstance();

    if (undoer.mementos) {
      const lastAction = undoer.mementos.pop();

      const updatedBooks = get(books).map((b) =>
        b.id === lastAction.id ? lastAction : b
      );
      books.set(updatedBooks);

      if (get(selectedBook).id === lastAction.id) selectedBook.set(lastAction);

      undoableCount.set(undoer.mementos.length);
    }
  }
}
