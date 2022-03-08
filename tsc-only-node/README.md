# A bare-minimum node project using javascript modules, env-vars, a dev-server, static analysis and unit testing with Typescript

## Prerequisites

- git
- github cli
- node >=16
- npm >=8

## Bootstrapping this package

```shell
printf ".code\n.idea\nnode_modules\nbuild\n.env" > .gitignore
npm init -y
```

## Requirements of the project

1. write and output modular javascript only (no common js for tests etc.).
2. import modules that use Node built-ins (`http`, `url` etc.).
3. import modules without specifying an extension.
4. source maps should be built alongside code in development.
5. development server
6. linting
7. env vars in code and config

## Meeting requirements

1. To ONLY use tsc as a TS compiler AND use modular javascript you need to:

   - Add `"type": "module"` to package.json, because [TypeScript can't generate files with the .mjs extension](https://github.com/microsoft/TypeScript/issues/18442#issuecomment-581738714).
   - In [`tsconfig.json`](tsconfig.json), set this in `compilerOptions`:
     ```json
      "target": "esnext",
      "module": "esnext",
     ```

2. Import modules that use Node built-ins (`http`, `url` etc.)

   - run `npm install --save-dev @types/node`
   - in `tsconfig.json` under `compilerOptions`set:
     - `"moduleResolution": "node"`, so `tsc` can find modules [when targeting ES6+](https://github.com/Microsoft/TypeScript/issues/8189)
     - `"types": ["node"]` to avoid errors related to Node built-in modules

3. Import your own modules without specifying an extension
   When transpiling, [TypeScript won't generate an extension for you](https://github.com/microsoft/TypeScript/issues/16577). Run Node with the [`node --experimental-specifier-resolution=node` parameter](https://nodejs.org/api/cli.html#cli_experimental_specifier_resolution_mode), otherwise, [node mandates that you specify the extension](https://nodejs.org/api/esm.html#esm_mandatory_file_extensions) in the `import` statement.
   `node --experimental-specifier-resolution=node ./src/__tests__`

4. Source maps
   If your script generates an error, you'll see the line numbers from the generated `.js` files, which is not helpful. We want to see the original paths and line numbers from the `.ts` files. To do that, we'll add `sourceMap: true` to `tsconfig.json`, install [`source-map-support`](https://www.npmjs.com/package/source-map-support) and run node with the `-r source-map-support/register` parameter.

5. Dev server
   The `nodemon` package can be used along with `concurrently` to provide a clean development experience.

6. Use lint with ESLint, with TypeScript support
   ```shell
   npm i -D eslint @types/eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier @types/prettier eslint-config-prettier
   ```
   To use a config file for `eslint`, we must create an `.eslintrc.cjs` file not `.js` because of `"type": "module"` in `package.json`.
   ```shell
   printf "module.exports = {root: true,parser: \"@typescript-eslint/parser\",parserOptions: { ecmaVersion: 2020,sourceType: \"module\",tsconfigRootDir: __dirname,project: [\"./tsconfig.json\"],},plugins: [\"@typescript-eslint\"],env: {es2020: true,node: true,},extends: [\"eslint:recommended\",\"plugin:@typescript-eslint/recommended\",\"plugin:@typescript-eslint/recommended-requiring-type-checking\",\"prettier\",],};" > .eslintrc.cjs
   printf "{\"useTabs\": true,\"singleQuote\": true,\"trailingComma\": \"none\",\"printWidth\": 100}" > .prettierrc
   npx prettier --write .eslintrc.cjs .prettierrc
   npm set-script
   npm set-script eslint "eslint --ignore-path .gitignore --ext .ts --fix ."
   npm set-script prettier "prettier --ignore-path .gitignore --write ."
   npm set-script lint "npm run prettier && npm run eslint"
   ```
7. Enable env vars in config files and code

   ```sh
   npm i -D dotenv
   npm set-script setup "printf \"NODE_ENV=DEVELOPMENT\" > .env"
   npm run setup
   ```

   add `import 'dotenv/config';` at the top of module entry points and `require('dotenv').config();` at the top of commonjs entry points

## Caveats and preferences

Here we are attempting to simplify the considerations surrounding consuming compiled code by putting js output in a build directory, typically `dist` or `build`. This is done using the `outDir` settings in `tsconfig.json`, but this sort of setup comes with an [annoying limitation](https://github.com/microsoft/TypeScript/issues/9858) of Typescript that [forbids importing files outside the `rootDir`](https://stackoverflow.com/questions/52121725/maintain-src-folder-structure-when-building-to-dist-folder-with-typescript-3). That can be a [problem with monorepos](https://github.com/microsoft/TypeScript/issues/17611).

Another way of compiling generates `js` and `js.map` files 'in place'. In other words, at the location of the TS files that they result from. While some IDEs conveniently hide these files, it may be considered undesirable.

## Creating the npm scripts

In light of this npm scripts would be as follows:

```shell
npm set-script //base_scripts "the building blocks of commandscripts go here"
npm set-script clean "rm -rf src/*.js src/**/*.js build"
npm set-script build "tsc"
npm set-script build:dev "npm run clean && tsc --watch"
npm set-script run:dev "nodemon --experimental-specifier-resolution=node -r source-map-support/register ./build"
npm set-script run "node --experimental-specifier-resolution=node -r source-map-support/register ./build"
npm set-script //command_scripts "the compositions of base_scripts go here"
npm set-script start "npm run build && npm run run"
npm set-script start:dev "concurrently \"npm:build:dev\" \"npm:run:dev\""
```

## More can be read about the topic below:

- https://stackoverflow.com/questions/37979489/how-to-watch-and-reload-ts-node-when-typescript-files-change
- https://github.com/dandv/typescript-modern-project
