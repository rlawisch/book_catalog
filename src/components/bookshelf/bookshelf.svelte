<script lang="ts">
  import {books} from "../../stores"
  import Book from "./book.svelte";
</script>

<div class="bookshelf">
  {#each $books as book}
    <div class="book">
      <Book {book} />
    </div>
  {/each}
</div>

<style>
  .bookshelf {
    width: 80%;
    height: 88vh;
    margin: 0 auto;
    border: 10px #A87328 solid;
    overflow: hidden;
    background-image: linear-gradient(#241909, #2b1d0b 220px, #b87e2c 220px, #b87e2c 222px, #A87328 222px, #A87328 228px, #986824 228px, #986824 230px);
    background-size: 10px 230px;
  }
</style>
