#!/usr/bin/env node
// Grab provided args.
"use strict";

var _mdLinks = _interopRequireDefault(require("./md-links"));

var _links = require("./links");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const [,, ...args] = process.argv; // print hello world provided args.
// console.log(`Hello World ${args}`);
// console.log(`indice 0 ${args[0]}`);
// console.log(`indice 1 ${args[1]}`);

const first = args[0];
const second = args[1]; // const third = args[2];
// const capture = mdLinks(first, second);
// console.log(first, second);

const cli = (route, stats, validate) => {
  if (route !== undefined && validate === '--validate') {
    return (0, _mdLinks.default)(route, {
      validate: true
    });
  }

  if (route !== undefined && validate === undefined) {
    return (0, _mdLinks.default)(route, {
      validate: false
    });
  }

  if (route !== undefined && stats === '--stats') {
    return (0, _links.statsLink)((0, _mdLinks.default)(route, {
      validate: false
    }));
  } // verificar esto despues


  if (route !== undefined && stats === '--stats' && validate === '--validate') {
    return (0, _links.statsValidate)((0, _links.statsLink)((0, _mdLinks.default)(route, {
      validate: false
    })), (0, _mdLinks.default)(route, {
      validate: true
    }));
  }

  return console.log('Route not found');
}; // console.log(cli(first, second, third));
// mdLinks('readme.md', { validate: true })
//   .then(res => console.log(res));


(0, _mdLinks.default)(first, second).then(res => console.log(res));
console.log(first, second);