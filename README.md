# Algorithms and Data Structures JavaScript Masterclass

**NOTE**: Stuff from [Colt Steele course on Udemy](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass). Project configuration and unit tests is my own work (the code on the video lessons is written directly on Chrome, no tests). It is one of my goals to TDD as much as possible in all things I do.

**NOTE**: The [Github repo](https://github.com/FernandoBasso/JavaScript-Algorithms-and-Data-Structures-Masterclass) is just a push mirror of the main [repo on Gitlab](https://gitlab.com/programming-studies/javascript-algorithms-data-structures-masterclass).

- [Algorithms and Data Structures JavaScript Masterclass](#algorithms-and-data-structures-javascript-masterclass)
  - [Basic](#basic)
  - [Unit Tests](#unit-tests)
  - [Run standalone files](#run-standalone-files)
  - [TODO](#todo)

## Basic

**NOTE**: I am **intentionally not using any linting** in this project because I want to have some freedom with formatting and use of some cool tricks. Some presets try to prevent you from using bitwise operators, for example. There are legitimate cases where they are OK to use. I don't want to spend my time studying algorithms fighting the linter, disabling or tweaking rules, etc. And just to be clear, for a React, Vue.js, a Node + Express API, OK, I do use linters, but not in this algorithms and data structures study project.

Install [nvm](https://github.com/nvm-sh/nvm) and run these commands (just once):

```
nvm install --lts
npm install
```

## Unit Tests

For all files:

```
npm run test
```

For a specific file under development or scrutiny:

```
npm run test path/to/file.spec.mjs
```

Can also use watch mode, and silence `console.log` to keep the output clean:

```
npm run test -- --watch --silent path/to/file.mjs
```

Or, another nice one `--verbose` which shows a list of suite and passing tests (which would be suppressed otherwise):


```
npm run test -- --watch --silent
```

**NOTE**: Replace `--watch` with `--watchAll` if not inside a Git repo.

## Run standalone files

To test and see outputs apart from tests, run the standalone files:

```
npm run file path/to/file.mjs
```

Generate/update docs:

```
jsdoc -c jsdoc-config.js --recurse .
```

## TODO

- [ ] There is always a `console.log` leaking in `./02-big-O/log-at-least-5.spec.mjs`. Even mocked, there are five logs at the terminal somehow.

