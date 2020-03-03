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
```javascript
./capitalize/capitalize.js

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.substring(1);
}
```

2. reverseString(string) takes a string and returns it reversed.
```javascript
.reserveString/reverseString.js

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.substring(1);
}
```

3. A calculator object that contains the basic operations: add, subtract, divide, and multiply.
```javascript
.calculator/calculator.js

const calculator = {
	
  add(a, b)
  subtract(a, b)
  divide(a, b)
  multiply
};

```

4. Caesar Cipher. [Read about it on this website](http://practicalcryptography.com/ciphers/caesar-cipher/)

a. Don’t forget to test wrapping from z to a.
b. Don’t forget to test keeping the same case.
c. Don’t forget to test punctuation!
d. For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesar() function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

```javscript
./caesarCipher/caesarCipher.js

const caesarCipher = (string, move) => {
.
.
}
```

5. Array Analysis. Write a function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
```javascript
const object = analyze([1,8,3,4,2,6]);

object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};
```


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

Install the @babel/preset-env package;

```sh
$ npm i -D @babel/preset-env
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ @babel/preset-env@7.8.6
added 232 packages from 28 contributors, removed 108 packages, updated 589 packages and audited 1208996 packages in 54.596s

31 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

##### Run jest test

```

$ npm test

> testing-practice@1.0.0 test /mnt/d/Google_Drive/Microverse/5.Javascript/6.testing/testing-practice-js
> jest

 PASS  capitalize/capitalize.test.js
 PASS  reverseString/reverseString.test.js
 PASS  arrayAnalysis/arrayAnalysis.test.js
 PASS  calculator/calculator.test.js
 PASS  ceasarCipher/caesarCipher.test.js

Test Suites: 5 passed, 5 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        3.607s
Ran all test suites.
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

Create a .babelrc file in the project’s root with the following lines of code:
```javascript
{ "presets": ["@babel/preset-env"] }
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
