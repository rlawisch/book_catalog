<script lang="ts">
  import Bookshelf from "./components/bookshelf/bookshelf.svelte";
  import CatalogControls from "./components/catalogControls.svelte";
  import Highlight from "./components/highlight/highlight.svelte";
</script>

<main>
  <div class="highlight">
    <Highlight/>
  </div>
  <div class="catalogControls">
    <CatalogControls/>
  </div>
  <div class="bookshelf">
    <Bookshelf/>
  </div>
</main>

<style>
  main {
    height: 100%;
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr 30px;
    gap: 0px 20px;
    grid-template-areas:
      "bookshelf highlight"
      "catalogControls highlight";
  }
  .bookshelf {
    grid-area: bookshelf;
    overflow: auto;
  }
  .highlight {
    grid-area: highlight;
  }
  .catalogControls {
    grid-area: catalogControls;
  }
</style>
