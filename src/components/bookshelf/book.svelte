<script lang="ts">
  import type Book from "../../types/book";
  import { selectedBook } from "../../stores";

  export let book: Book;

  function getRandomColor() {
    const colors = ["green", "blue", "umber", "red", "purple", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function handleClick() {
    selectedBook.set(book);
  }
</script>

<div class={`book book-${book.color || getRandomColor()}`} on:click={handleClick}>
  <h1>{book.title}</h1>
</div>

<style>
  .book {
    height: 200px;
    width: 40px;
    float: left;
    color: white;
    font-size: 0.9em;
    font-family: Verdana, sans-serif;
    margin-bottom: 10px;
    margin-top: 20px;
    transition: transform 0.4s ease;
    box-shadow: inset -0.35rem 0 0.5rem rgba(0, 0, 0, 0.4),
      inset 0.35rem 0 0.5rem rgba(0, 0, 0, 0.4);
    border-top-style: solid;
    border-top-width: 1px;
    border-image: linear-gradient(
      to right,
      #333,
      #333 15%,
      antiquewhite 30%,
      antiquewhite 70%,
      #333 85%,
      #333
    );
    border-image-slice: 1;
  }

  .book:hover {
    transform: scale(1.05);
  }

  .book h1 {
    padding: 0;
    font-size: 1em;
    text-align: center;
    transform-origin: 0% 0%;
    transform: rotate(0.25turn) translateY(-35px);
    width: 170px;
  }

.book-green {
  background-color: #004000;
  border-left: 2px solid lighten(#004000, 4%);
  border-right: 2px solid darken(#004000, 4%);
}

.book-blue {
  background-color: #062052;
  border-left: 2px solid lighten(#062052, 4%);
  border-right: 2px solid darken(#062052, 4%);
}

.book-umber {
  background-color: #411d06;
  border-left: 2px solid lighten(#411d06, 4%);
  border-right: 2px solid darken(#411d06, 4%);
}

.book-red {
  background-color: #610000;
  border-left: 2px solid lighten(#610000, 4%);
  border-right: 2px solid darken(#610000, 4%);
}

.book-purple {
  background-color: #250044;
  border-left: 2px solid lighten(#250044, 4%);
  border-right: 2px solid darken(#250044, 4%);
}

.book-orange {
  background-color: #925300;
  border-left: 2px solid lighten(#925300, 4%);
  border-right: 2px solid darken(#925300, 4%);
}
</style>
