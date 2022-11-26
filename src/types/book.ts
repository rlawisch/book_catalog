export default interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  paperback: number;
  coverUrl?: string;
  synopsys?: string;
  color?: string;
}

export type ExternalBook = Omit<Book, "id" | "color">;
