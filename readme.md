# Microverse Project Title - Testing Practice
[Collaborative  Project]
Javascript

### Snapshot

![]()

### Introduction.

This is the sixth project in the Javascript course. By this point, the student knows how to use Objects, Object Constructors, Factory Functions, the Module Pattern, Classes, ES6 notation, and Webpack. The lesson prior to this project is an introduction to the use of Jest.

You can find the original project specification at: https://www.theodinproject.com/courses/javascript/lessons/testing-practice

### Project Objectives

Write tests for the following functions, and then make the tests pass!

1. capitalize(string) takes a string and returns that string with the first character capitalized.

2. reverseString(string) takes a string and returns it reversed.

3. A calculator object that contains the basic operations: add, subtract, divide, and multiply.

4. Caesar Cipher. [Read about it on this website](http://practicalcryptography.com/ciphers/caesar-cipher/)

a. Don’t forget to test wrapping from z to a.
b. Don’t forget to test keeping the same case.
c. Don’t forget to test punctuation!
d. For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesar() function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

5. Array Analysis. Write a function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

### Linter Setup

Clone file [content](https://github.com/microverseinc/linters-config/tree/master/javascript) into root directory (except for readme.md)

Install ESLint on Linux environment using the following commands

Install Node Version Manager to update NodeJS + NPM.

```sh
$curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

$export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"

$[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Run the following command to verify installation;

```sh
$ command -v 
nvm
```

To download, compile, and install the latest release of node, do this.

```sh
nvm install node
```

Source [here](https://github.com/nvm-sh/nvm#installing-and-updating)

Go project folder using WSL environment and initiate NPM with following command

```sh
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (weather-app)
version: (1.0.0)
description: Weather Application
entry point: (webpack.config.js) src/index.js
test command:
git repository: (https://github.com/geraldgsh/weather-app.git)
keywords:
author: Gerald Goh
license: (ISC)
About to write to /mnt/d/Google_Drive/Microverse/5.Javascript/5.API/weather-app/package.json:

{
  "name": "weather-app",
  "version": "1.0.0",
  "description": "Weather Application",
  "main": "src/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/geraldgsh/weather-app.git"
  },
  "author": "Gerald Goh",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/geraldgsh/weather-app/issues"
  },
  "homepage": "https://github.com/geraldgsh/weather-app#readme"
}
```

Command above will generate a "package.json" file for ESlint work off from.

Install ESlint with following command

```sh
$ npm install eslint
npm notice created a lockfile as package-lock.json. You should commit this file.
+ eslint@6.8.0
added 123 packages from 83 contributors and audited 179 packages in 8.979s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Run the following to configure eslint in project root folder

```sh
$ eslint --init
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Does your project use TypeScript? No
? Where does your code run? Browser
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JSON
Checking peerDependencies of eslint-config-airbnb-base@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.1.0 eslint-plugin-import@^2.18.2
? Would you like to install them now with npm? Yes
Installing eslint-config-airbnb-base@latest, eslint@^5.16.0 || ^6.1.0, eslint-plugin-import@^2.18.2
npm notice save eslint is being moved from dependencies to devDependencies
+ eslint-config-airbnb-base@14.0.0
+ eslint@6.8.0
+ eslint-plugin-import@2.20.1
added 61 packages from 37 contributors, updated 1 package and audited 387 packages in 8.597s

16 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Successfully created .eslintrc.json file in 
/weather-app
ESLint was installed locally. We recommend using this local copy instead of your globally-installed copy.
```

with the following setup;

`? How would you like to use ESLint?` To check syntax, find problems, and enforce code style

`? What type of modules does your project use?` JavaScript modules (import/export)

`? Which framework does your project use?` None of these

`? Does your project use Typescript` No

`? Where does your code run?` Browser

`? How would you like to define a style for your project?` Use a popular style guide

`? Which style guide do you want to follow?` Airbnb

`? What format do you want your config file to be in?` JSON

`? The config that you've selected requires the following dependencies: Would you like to install them now with npm?` Yes

Start ESlint with this command.

```sh
eslint script.js
```

#### Setup Webpack watch

Install webpack;

```sh
$ npm install webpack webpack-cli --save-dev
npm WARN rollback Rolling back readable-stream@2.3.6 failed (this is probably harmless): EINVAL: invalid argument, lstat '/mnt/d/Google_Drive/Microverse/5.Javascript/4.oop/todo-list/node_modules/fsevents/node_modules'
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ webpack@4.41.6
+ webpack-cli@3.3.11
added 360 packages from 209 contributors, removed 10 packages and audited 5675 packages in 20.445s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Now we'll create the following directory structure, files and their contents:

Create;
./webpack.config.js

```javascript
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
```

Webpack can watch files and recompile whenever they change. Turn on watch mode. This means that after the initial build, webpack will continue to watch for changes in any of the resolved files.

```javascript
./package.json

{
  "name": "weather-app",
  "version": "1.0.0",
  "description": "Weather APP",
  "main": "src/index.js",
  "scripts": {
    "build": "webpack --mode development",
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --watch"
  },
  .
  .
```

Run "yarn build"

```javascript
$ yarn build
yarn run v1.21.1
$ webpack --mode development
Hash: 87bba94788336242806f
Version: webpack 4.41.6
Time: 102ms
Built at: 02/21/2020 5:33:18 AM
  Asset      Size  Chunks             Chunk Names
main.js  12.3 KiB    main  [emitted]  main
Entrypoint main = main.js
[./src/index.js] 1.23 KiB {main} [built]
[./src/modules/DOMControl.js] 3.12 KiB {main} [built]
[./src/modules/localControl.js] 1.6 KiB {main} [built]
Done in 2.67s.
```

Or run "yarn watch" to start.
```javascript
$ yarn watch

yarn run v1.21.1
$ webpack --watch

webpack is watching the files…

Hash: c1487def981e257fe947
Version: webpack 4.41.6
Time: 392ms
Built at: 02/21/2020 5:34:39 AM
  Asset      Size  Chunks             Chunk Names
main.js  1.55 KiB       0  [emitted]  main
Entrypoint main = main.js
[0] ./src/index.js + 2 modules 5.96 KiB {0} [built]
    | ./src/index.js 1.23 KiB [built]
    | ./src/modules/DOMControl.js 3.12 KiB [built]
    | ./src/modules/localControl.js 1.6 KiB [built]
```

#### Testing practice

This is a weather app built with babel & JS.

### Wiki

Checkout our [wikipage](https://github.com/geraldgsh/testing-practice-js/wiki) for more details. 

#### Live Demo
None

#### Getting Started
Clone repo and run index.html

#### Prerequisites
Web browser like Chrome, Mozilla or similar.

### Original Project Source
https://www.theodinproject.com/courses/javascript/lessons/testing-practice

### Github Repo
https://github.com/geraldgsh/testing-practice-js


👤 **Author**

Github: [geraldgsh](https://github.com/geraldgsh)

Twitter: [geraldgsh](https://github.com/geraldgsh)

Linkedin: [Gerald Goh](https://www.linkedin.com/geraldgsh)

## 🤝 Contributing
Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/geraldgsh/testing-practice-js/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](lic.url) licensed.
