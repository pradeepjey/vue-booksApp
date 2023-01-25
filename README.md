# Vue 3 + TypeScript + Vite + Pinia + Tailwindcss

This Books appliation is build with vue3, vitejs, Pinia, Typescript and tailwindcss.


# Application Requirements

The application needs to be a minimum version of listed below.

1. Vue 3.x 
2. Node.js 18.x and npm 8.x

## Quick start

```bash
# select a repo from github

# download the example or clone the repo from github
git clone https://github.com/pradeepjey/vue-booksApp.git

# change directory
cd vue-booksApp

# install the repo with npm
npm install

# start the server
npm run dev

```

## Environment variable setup

- Create .env and .env.production file at project root level.
- create "VITE_BASE_URL" & "VITE_APP_VERSION" with base_url and app version 
- Save the changes and restart the server

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
