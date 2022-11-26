import type Book from "./types/book";
import { FileFormat } from "./types/file_format";
import { books } from "./stores";

interface Importer {
  import(file: File): Promise<void>;
}

abstract class BaseImporter implements Importer {
  async import(file: File): Promise<void> {
    const fileContent = await file.text();
    const convertedData = this.convertFromInputFormat(fileContent);
    books.set(convertedData);
  }

  protected abstract convertFromInputFormat(data: string): Book[];
}

class JsonImporter extends BaseImporter {
  protected convertFromInputFormat(data: string): Book[] {
    return JSON.parse(data).map((obj, i) => {
      return {
        id: i,
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
}

class XmlImporter extends BaseImporter {
  protected convertFromInputFormat(data: string): Book[] {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(data, "text/xml");
    const bookElements = parsedDocument.getElementsByTagName("book");
    const convertedData = [];
    let i = 0;
    let element = bookElements.item(i);
    while (element) {
      convertedData.push({
        id: i,
        title: decodeURIComponent(
          element.getElementsByTagName("title").item(0).innerHTML
        ),
        author: decodeURIComponent(
          element.getElementsByTagName("author").item(0).innerHTML
        ),
        isbn: decodeURIComponent(
          element.getElementsByTagName("isbn").item(0).innerHTML
        ),
        publisher: decodeURIComponent(
          element.getElementsByTagName("publisher").item(0).innerHTML
        ),
        paperback: element.getElementsByTagName("paperback").item(0).innerHTML,
        coverUrl: decodeURIComponent(
          element.getElementsByTagName("coverUrl").item(0).innerHTML
        ),
        synopsys: decodeURIComponent(
          element.getElementsByTagName("synopsys").item(0).innerHTML
        ),
      });
      element = bookElements.item(++i);
    }
    return convertedData;
  }
}

export class ImporterFactory {
  static createImporter(format: FileFormat): Importer {
    switch (format) {
      case FileFormat.JSON:
        return new JsonImporter();
      case FileFormat.XML:
        return new XmlImporter();
      default:
        throw new Error("Invalid importing file format");
    }
  }
}
