#!/usr/bin/env node
// Grab provided args.
"use strict";

var _mdLinks = _interopRequireDefault(require("./md-links"));

var _links = require("./links");

var _pathDirectory = require("./path-directory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const [,, ...args] = process.argv;
const first = args[0];
const second = args[1];
const third = args[2];

const cli = (route, optionOne, optionTwo) => {
  if (route !== undefined && optionOne === '--validate' && optionTwo !== '--stats') {
    (0, _mdLinks.default)(route, {
      validate: true
    }).then(res => console.log(res)); // se ejecuta opcion validate
  } else if (route !== undefined && optionOne !== '--validate' && optionOne !== '--stats') {
    console.log((0, _mdLinks.default)(route, {
      validate: false
    })); // extrae solo los links
  } else if (route !== undefined && optionOne === '--stats' && optionTwo === undefined) {
    console.log((0, _links.statsLink)((0, _links.extLinks)((0, _pathDirectory.verify)(route)))); // hace la funcion de stats -> total / uniques
  } else if (route !== undefined && optionOne === '--stats' && optionTwo === '--validate') {
    (0, _mdLinks.default)(route, {
      validate: true
    }).then(res => {
      const resultStats = (0, _links.statsLink)((0, _links.extLinks)((0, _pathDirectory.verify)(route)));
      const result = (0, _links.statsValidate)(res, resultStats);
      console.log(result);
    });
  } else if (route !== undefined && optionOne === '--validate' && optionTwo === '--stats') {
    console.log('Command invalidate');
  } else if ((0, _pathDirectory.existRoute)(route) === false) {
    console.log('Route not found');
  } else {
    // si todas son undefined
    console.log('Enter a route and option validate');
  }
};

cli(first, second, third);