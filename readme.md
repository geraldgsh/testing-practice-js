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
package name: (testing-practice)
version: (1.0.0)
keywords:
author: Gerald Goh
license: (ISC)
About to write to /mnt/d/Google_Drive/Microverse/5.Javascript/6.testing/testing-practice-js/package.json:

{
  "name": "testing-practice",
  "version": "1.0.0",
  "description": "[Collaborative  Project]\r Javascript",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/geraldgsh/testing-practice-js.git"
  },
  "author": "Gerald Goh",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/geraldgsh/testing-practice-js/issues"
  },
  "homepage": "https://github.com/geraldgsh/testing-practice-js#readme"
}


Is this OK? (yes) yes
```

Command above will generate a "package.json" file for ESlint work off from.

##### Install ESlint

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
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.1.0 eslint-plugin-import@^2.18.2
? Would you like to install them now with npm? No
Successfully created .eslintrc.json file in /mnt/d/Google_Drive/Microverse/5.Javascript/6.testing/testing-practice-js
```

Run ESlint

```sh
eslint script.js
```

##### Install Jest

```javascript
$ npm install --save-dev jest
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ jest@25.1.0
added 537 packages from 248 contributors, removed 4 packages and audited 1204208 packages in 39.256s

29 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Finally, run yarn test or npm run test and Jest will print this message:

```sh
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```

##### Install Babel

To use Babel, install required dependencies via yarn:

```sh
$ yarn add --dev babel-jest @babel/core @babel/preset-env
yarn add v1.21.1
info No lockfile found.
warning package-lock.json found. Your project contains lock files generated by tools other than Yarn. It is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files. To clear this warning, remove package-lock.json.
[1/4] Resolving packages...
warning jest > @jest/core > jest-config > jest-environment-jsdom > jsdom > request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
[2/4] Fetching packages...
info fsevents@2.1.2: The platform "linux" is incompatible with this module.
info "fsevents@2.1.2" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
warning Your current version of Yarn is out of date. The latest version is "1.22.0", while you're on "1.21.1".
info To upgrade, run the following command:
$ sudo apt-get update && sudo apt-get install yarn
success Saved 394 new dependencies.
info Direct dependencies
├─ @babel/core@7.8.6
├─ @babel/preset-env@7.8.6
├─ babel-jest@25.1.0
.
.
```

Edit test;

```sh
./package.json

{
  "name": "testing-practice",
  "version": "1.0.0",
  "description": "[Collaborative  Project]\r Javascript",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
.
.
```

Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:

```sh
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
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
