# 📚 Book Catalog

This project was made to fulfill the requisites of the final coursework from Object-Oriented Programming II course of Universidade do Vale do Rio dos Sinos (UNISINOS), which are:

- **Use an oriented-object language:** ✔️ [TypeScript](https://www.typescriptlang.org/) provides all the bells and whistles that simplified the making of this project.
- **Have some kind of interface (terminal, web, GUI, etc):** ✔️ The web interface is done using the awesome [Svelte](https://svelte.dev/) framework.
- **Allow importing and exporting the catalog in different formats (at least XML and JSON):** ✔️ Import and export data in both specified formats, and more can be easily added.
- **Allow editing the book catalog:** ✔️ Books in catalog can be edited, altough the app currently doesn't have support for adding/removing books.
- **Allow undoing at least the last 10 actions:** ✔️ Supports 10 undos (hardcoded), which can be easily configured via `MAX_MEMENTOS_STACK_LENGTH` inside `undoer.ts`.
- **Use at least 3 of the studied design patterns:** ✔️ It uses factories for getting the correct importer/exporter for each file format, mementos for undoing actions and singletons explicitly as the undoer class or implicitly on the [Svelte stores](https://vercel.com/docs/beginner-sveltekit/svelte-stores).

## Installing and running

Just clone the repository, run the JS package installer of your choice ([PNPM](https://pnpm.io/) was used, but NPM and Yarn work just as fine) and run the `dev` script:

```npm
pnpm i
pnpm run dev
```

## Contributing

This project have lots of room for improvements, mostly cosmetic (which were lower-priority when the deadline approached), but you can use the best of your imagination here.
If you changed/fixed something you think was cool, don't hesitate to put up a PR, which I'll hapilly review.
