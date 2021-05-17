# Algorithms and Data Structures JavaScript Masterclass

- [Algorithms and Data Structures JavaScript Masterclass](#algorithms-and-data-structures-javascript-masterclass)
  - [Basic](#basic)
  - [JavaScript Unit Tests](#javascript-unit-tests)

**NOTE**: Stuff from [Colt Steele course on Udemy](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass). Project configuration and unit tests is my own work (the code on the video lessons is written directly on Chrome, no tests). It is one of my goals to TDD as much as possible in all things I do.

**NOTE**: The [Github repo](https://github.com/FernandoBasso/JavaScript-Algorithms-and-Data-Structures-Masterclass) is just a push mirror of the main [repo on Gitlab](https://gitlab.com/programming-studies/javascript-algorithms-data-structures-masterclass).

## Basic

**NOTE**: I am **intentionally not using any linting** in this project because I want to have some freedom with formatting and use of some cool tricks. Some presets try to prevent you from using bitwise operators, for example. There are legitimate cases where they are OK to use. I don't want to spend my time studying algorithms fighting the linter, disabling or tweaking rules, etc. And just to be clear, for a React, Vue.js, a Node + Express API, OK, I do use linters, but not in this algorithms and data structures study project.

Install [nvm](https://github.com/nvm-sh/nvm) and run these commands (just once):

```
nvm install --lts
npm install
```

## JavaScript Unit Tests

For all files:

```
npm run test
```

For a specific file under development or scrutiny:

```
npm run test path/to/file.spec.js
```

Can also use watch mode, and silence `console.log` to keep the output clean:

```
npm run test -- --watch --silent path/to/file.spec.js
```

Or, another nice one `--verbose` which shows a list of suite and passing tests (which would be suppressed otherwise):


```
npm run test -- --watch --silent
```

**NOTE**: Replace `--watch` with `--watchAll` if not inside a Git repo.

