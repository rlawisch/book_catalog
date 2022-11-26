import type Book from "./types/book";
import type { ExternalBook } from "./types/book";
import { FileFormat } from "./types/file_format";

interface Exporter {
  export(books: Book[]): void;
}

abstract class BaseExporter implements Exporter {
  export(books: Book[]): void {
    const sanitizedData = this.sanitizeData(books);
    const convertedData = this.convertToDestinationFormat(sanitizedData);
    this.saveToFile(convertedData, "book_catalog");
  }

  private sanitizeData(books: Book[]): ExternalBook[] {
    return books.map((obj) => {
      return {
        title: obj.title,
        author: obj.author,
        isbn: obj.isbn,
        publisher: obj.publisher,
        paperback: obj.paperback,
        coverUrl: obj.coverUrl,
        synopsys: obj.synopsys,
      };
    });
  }

  protected abstract convertToDestinationFormat(data: ExternalBook[]): string;
  protected abstract saveToFile(data: string, fileName: string): void;
}

class JsonExporter extends BaseExporter {
  protected convertToDestinationFormat(data: ExternalBook[]): string {
    return JSON.stringify(data, null, 4);
  }

  protected saveToFile(data: string, fileName: string): void {
    const a = document.createElement("a");
    const file = new Blob([data], { type: FileFormat.JSON });

    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();

    URL.revokeObjectURL(a.href);
  }
}

class XmlExporter extends BaseExporter {
  protected convertToDestinationFormat(data: ExternalBook[]): string {
    return (
      '<?xml version="1.0" encoding="UTF-8"?>' +
      "\n<catalog>" +
      `${data.reduce((str: string, obj: ExternalBook) => {
        return (
          `${str}\n\t<book>` +
          `\n\t\t<title>${encodeURIComponent(obj.title)}</title>` +
          `\n\t\t<author>${encodeURIComponent(obj.author)}</author>` +
          `\n\t\t<isbn>${encodeURIComponent(obj.isbn)}</isbn>` +
          `\n\t\t<publisher>${encodeURIComponent(obj.publisher)}</publisher>` +
          `\n\t\t<paperback>${obj.paperback}</paperback>` +
          `\n\t\t<coverUrl>${encodeURIComponent(obj.coverUrl)}</coverUrl>` +
          `\n\t\t<synopsys>${encodeURIComponent(obj.synopsys)}</synopsys>` +
          "\n\t</book>"
        );
      }, "")}` +
      "\n</catalog>"
    );
  }

  protected saveToFile(data: string, fileName: string): void {
    const a = document.createElement("a");
    const file = new Blob([data], { type: FileFormat.XML });

    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();

    URL.revokeObjectURL(a.href);
  }
}

export class ExporterFactory {
  static createExporter(format: FileFormat): Exporter {
    switch (format) {
      case FileFormat.JSON:
        return new JsonExporter();
      case FileFormat.XML:
        return new XmlExporter();
      default:
        throw new Error("Invalid exporting file format");
    }
  }
}
