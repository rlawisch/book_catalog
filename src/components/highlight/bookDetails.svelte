<script lang="ts">
  import { selectedBook } from "../../stores"

</script>

<div class="container">
  <h1>{$selectedBook.title}</h1>
  {#if $selectedBook.synopsys}
    <p>{$selectedBook.synopsys}</p>
  {/if}
  <ul>
    <li>Author: {$selectedBook.author}</li>
    <li>ISBN: {$selectedBook.isbn}</li>
    <li>Publisher: {$selectedBook.publisher}</li>
    <li>Paperback: {$selectedBook.paperback}p</li>
  </ul>
</div>

<style>
  .container {
    float: left;
    flex-flow: column;
    align-items: flex-start;
    align-content: flex-start;
  }
  h1 {
    font-size: 2em;
    margin-bottom: 8px;
  }
  p {
    font-size: 0.8em;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
    font-size: 0.9em;
  }
  li + li {
    margin-top: 5px;
  }
</style>
