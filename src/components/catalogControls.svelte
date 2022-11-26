<script lang="ts">
  import { books, editMode } from "../stores";
  import { ImporterFactory } from "../importer";
  import { ExporterFactory } from "../exporter";
  import { FileFormat } from "../types/file_format";

  let importPath;

  async function handleImport() {
    try {
      const file = importPath.files[0];
      const importer = ImporterFactory.createImporter(file.type);
      await importer.import(file);
    } catch {
      alert("Importing error");
    }
  }

  function handleExport(format: FileFormat) {
    const exporter = ExporterFactory.createExporter(format);
    exporter.export($books);
  }
</script>
<div class="container">
  {#if (!$editMode)}
    <button on:click={_ => importPath.click()}>Import from file</button>
    {#if ($books)}
      <button on:click={_ => handleExport(FileFormat.JSON)}>Export JSON</button>
      <button on:click={_ => handleExport(FileFormat.XML)}>Export XML</button>
    {/if}
  {/if}
</div>

<input class="importPath" type="file" accept="text/xml, application/json" bind:this={importPath} on:change={handleImport} />

<style>
  .container {
    height: 100%;
    display: flex;
    justify-content: center;
  }

  button + button {
    margin-left: 5px;
  }

  .importPath {
    display: none;
  }
</style>
