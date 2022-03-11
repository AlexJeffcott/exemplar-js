# Exemplar JS

## Developer Guide

### Prerequisites

- git
- node >=16
- npm >=8

## Getting Started

```shell
npx degit git@github.com:AlexJeffcott/exemplar-js.git#main exemplar-js
cd exemplar-js
npm i
npx lerna bootstrap
npm run in-all-packages -- setup
npm run in-all-packages -- start
npm run in-all-packages -- test
npm run in-all-packages -- test:cov
npm run in-all-packages -- start:dev
```

## Creating a new package

```shell
mkdir PACKAGE_NAME && cd $_
npm set-script setup "printf \"NODE_ENV=DEVELOPMENT\" > .env"
npm set-script start "echo \"Add a start script for PACKAGE_NAME\""
npm set-script test "echo \"Add a test script for PACKAGE_NAME\""
npm set-script test:cov "echo \"Add a test:cov script for PACKAGE_NAME\""
npm set-script start:dev "echo \"Add a start:dev script for PACKAGE_NAME\""
```

## How the project was made

### Prerequisites

- git
- github cli
- node >=16
- npm >=8

### Bootstrapping

```shell
brew update && brew upgrade gh
mkdir exemplar-js && cd $_
git init -b main
printf "# Exemplar- JS\n\n\`\`\`shell\nbrew update && brew upgrade gh\nmkdir exemplar-js && cd \$_\ngit init\nnpm init -y\n\`\`\`" > README.md
npm init -y
git add .
git commit -m "initial commit"
gh repo create exemplar-js --source=. --private --disable-issues --disable-wiki --push
```

### It's a mono-repo

More can be found out at [lerna docs](https://github.com/lerna/lerna)

```shell
npm i -D lerna
printf "{\"packages\": [\"tsc-only-node\"],\"version\": \"0.0.0\"}" > lerna.json
npx prettier --write lerna.json
```

### Setting up git hooks with quality tooling

More can be found out at [husky docs](https://typicode.github.io/husky) and [commitlint docs](https://commitlint.js.org/#/reference-configuration)

```shell
npm i -D husky @commitlint/cli @commitlint/config-conventional
npx husky-init && npm install
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
npx husky add .husky/pre-commit "npx lerna run lint"
npx husky add .husky/pre-commit "npx lerna run test"
```

N.B. You'll need to remove the line `npm test` from `.husky/pre-commit`

To uninstall git hook stuff

```shell
npm uninstall husky @commitlint/cli @commitlint/config-conventional && git config --unset core.hooksPath
```

Enable CI with testing

```shell
mkdir -p .github/workflows
printf "# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node" > .github/workflows/workflow.yml
```

Using [GitHub Actions](https://github.com/features/actions), we can configure automatic testing via `.yml` files under [.github/workflows](.github/workflows).

## Further reading

https://2ality.com/2019/10/hybrid-npm-packages.html
https://www.sensedeep.com/blog/posts/2021/how-to-create-single-source-npm-module.html
