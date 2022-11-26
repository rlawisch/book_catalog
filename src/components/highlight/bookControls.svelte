<script lang="ts">
  import Undoer from "../../undoer";
  import { editMode, undoableCount } from "../../stores";

  function handleUndo() {
    Undoer.undoLastAction();
  }
</script>

<div class="container">
  {#if (!$editMode)}
    <button on:click={_ => editMode.set(true)}>Edit</button>
    <button disabled={!$undoableCount} on:click={handleUndo}>Undo</button>
  {/if}
</div>

<style>
  .container {
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }

  button + button {
    margin-left: 5px;
  }
</style>
