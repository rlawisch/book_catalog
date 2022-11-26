<script lang="ts">
  import type Book from "../../types/book";
  import { selectedBook, books, editMode } from "../../stores";
  import Undoer from "../../undoer";

  function onSubmit(e) {
    const formData = new FormData(e.target) as unknown as Iterable<[Book, FormDataEntryValue]>;
    const book: Book = {
      ...$selectedBook,
      ...Object.fromEntries(formData)
    };

    Undoer.recordAction($selectedBook);

    const updatedBooks = $books.map(b => b.id === book.id ? book : b);
    books.set(updatedBooks);
    selectedBook.set(book);
    editMode.set(false);
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <div class="titleLabel">
    <label for="title">Title:</label>
  </div>
  <div class="titleInput">
    <input id="title" name="title" value={$selectedBook.title}/>
  </div>
  <div class="synopsysLabel">
    <label for="synopsys">Synopsys:</label>
  </div>
  <div class="synopsysInput">
    <textarea id="synopsys" name="synopsys" value={$selectedBook.synopsys}/>
  </div>
  <div class="authorLabel">
    <label for="author">Author:</label>
  </div>
  <div class="authorInput">
    <input id="author" name="author" value={$selectedBook.author}/>
  </div>
  <div class="isbnLabel">
    <label for="isbn">ISBN-13:</label>
  </div>
  <div class="isbnInput">
    <input id="isbn" name="isbn" value={$selectedBook.isbn}/>
  </div>
  <div class="publisherLabel">
    <label for="publisher">Publisher:</label>
  </div>
  <div class="publisherInput">
    <input id="publisher" name="publisher" value={$selectedBook.publisher}/>
  </div>
  <div class="paperbackLabel">
    <label for="paperback">Paperback:</label>
  </div>
  <div class="paperbackInput">
    <input id="paperback" name="paperback" value={$selectedBook.paperback}/>
  </div>
  <div class="coverUrlLabel">
    <label for="coverUrl">Cover URL:</label>
  </div>
  <div class="coverUrlInput">
    <input id="coverUrl" name="coverUrl" value={$selectedBook.coverUrl}/>
  </div>
  <div class="buttons">
    <button type="submit">Confirm</button>
    <button on:click={_ => editMode.set(false)}>Cancel</button>
  </div>
</form>

<style>
  form {
    display: grid;
    grid-template-columns: 85px 1fr;
    grid-template-rows: 30px 150px 30px 30px 30px 30px 30px 30px 40px;
    gap: 0px 10px;
    margin-top: 30px;
    width: 100%
  }

  .buttons {
    display: flex;
  }

  input, textarea {
    width: calc(100% - 5px);
  }

  textarea {
    resize: none;
    height: 130px;
  }

  button {
    height: 30px;
  }

  button + button {
    margin-left: 8px;
  }
</style>
