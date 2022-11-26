<script lang="ts">
  import BookDetails from "./bookDetails.svelte";
  import BookEditor from "./bookEditor.svelte";
  import BookControls from "./bookControls.svelte";
  import { editMode, selectedBook } from "../../stores";
</script>

{#if ($selectedBook)}
  <div class="highlight">
    <div class="bookCover">
      {#if $selectedBook.coverUrl}
        <img class="coverImage" src={$selectedBook.coverUrl} alt="book cover" />
      {/if}
    </div>
    <div class="bookDetails">
      {#if (!$editMode)}
        <BookDetails/>
      {:else}
        <BookEditor/>
      {/if}
    </div>
    <div class="bookControls">
      <BookControls/>
    </div>
  </div>
{:else}
  <p class="unselected">Click on a book to know more</p>
{/if}

<style>
  .highlight {
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-template-rows: 1fr 30px;
    gap: 0px 20px;
    grid-template-areas:
      "bookCover bookDetails"
      "bookCover bookControls";
    height: 100%;
  }
  .bookCover {
    grid-area: bookCover;
    display: flex;
    place-items: center;
    justify-content: end;
    height: 100%;
  }
  .bookDetails { grid-area: bookDetails; }
  .bookControls { grid-area: bookControls; }

  .coverImage {
    max-height: 90vh;
  }
  .unselected {
    font-size: 1.2em;
    text-align: center;
  }
</style>
