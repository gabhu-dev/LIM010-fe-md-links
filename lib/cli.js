#!/usr/bin/env node
// Grab provided args.
"use strict";

var _mdLinks = _interopRequireDefault(require("./md-links"));

var _links = require("./links");

var _pathDirectory = require("./path-directory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const [,, ...args] = process.argv; // print hello world provided args.
// console.log(`Hello World ${args}`);
// console.log(`indice 0 ${args[0]}`);
// console.log(`indice 1 ${args[1]}`);

const first = args[0];
const second = args[1];
const third = args[2]; // const capture = mdLinks(first, second);
// console.log(first, second);

const cli = (route, validate, stats) => {
  if (route !== undefined && validate === '--validate' && stats === undefined) {
    (0, _mdLinks.default)(route, {
      validate: true
    }).then(res => console.log(res));
  }

  if (route !== undefined && validate === undefined && stats === undefined) {
    (0, _mdLinks.default)(route, {
      validate: false
    }).then(res => console.log(res));
  }

  if (route !== undefined && validate === '--stats' && stats === undefined) {
    console.log((0, _links.statsLink)((0, _links.extLinks)((0, _pathDirectory.verify)(route))));
  } // verificar esto despues


  if (route !== undefined && validate === '--stats' && stats === '--validate') {
    const resultValidate = (0, _mdLinks.default)(route, {
      validate: true
    }).then(res => {
      const resultStats = (0, _links.statsLink)((0, _links.extLinks)((0, _pathDirectory.verify)(route)));
      const result = (0, _links.statsValidate)(res, resultStats);
      console.log(result);
    });
  }

  if (route === undefined && validate === undefined && stats === undefined) {
    console.log('Enter a path');
  }

  if (route !== undefined && validate !== '--validate' && stats !== '--stats') {
    console.log('Enter a validate command ');
  }
};

cli(first, second, third); // mdLinks('readme.md', { validate: true })
//   .then(res => console.log(res));
// mdLinks(first, second)
//   .then(res => console.log(res));
// console.log(first, second);