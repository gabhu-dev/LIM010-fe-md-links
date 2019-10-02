#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cli = void 0;

var _mdLinks = _interopRequireDefault(require("./md-links"));

var _links = require("./links");

var _pathDirectory = require("./path-directory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const [,, ...args] = process.argv;
const first = args[0];
const second = args[1];
const third = args[2]; // eslint-disable-next-line import/prefer-default-export

const cli = (path, optionOne, optionTwo) => new Promise(resolve => {
  let out = '';

  if (path !== undefined && optionOne === '--validate' && optionTwo === undefined) {
    (0, _mdLinks.default)(path, {
      validate: true
    }).then(res => {
      res.forEach(element => {
        const vals = Object.values(element);
        out += `${vals[2]} ${vals[0]} ${vals[3]} ${vals[4]} ${vals[1].slice(0, 50)}\n`;
      });
      resolve(out);
    });
  } else if (path !== undefined && optionOne === undefined && optionTwo === undefined) {
    (0, _mdLinks.default)(path, {
      validate: false
    }).then(res => {
      res.forEach(element => {
        const vals = Object.values(element);
        out += `${vals[2]} ${vals[0]}  ${vals[1].slice(0, 50)}\n`;
      });
      resolve(out);
    }).catch(() => resolve('Route not found'));
  } else if (path !== undefined && optionOne === '--stats' && optionTwo === undefined) {
    resolve((0, _links.statsLink)((0, _links.extLinks)((0, _pathDirectory.verify)(path))));
  } else if (path !== undefined && optionOne === '--stats' && optionTwo === '--validate') {
    (0, _mdLinks.default)(path, {
      validate: true
    }).then(res => {
      const resultStats = (0, _links.statsLink)((0, _links.extLinks)((0, _pathDirectory.verify)(path)));
      resolve((0, _links.statsValidate)(res, resultStats));
    });
  } else if (path !== undefined && optionOne === '--validate' && optionTwo === '--stats') {
    resolve('Invalid command');
  } else {
    resolve('Enter a route and a valid option');
  }
});

exports.cli = cli;
cli(first, second, third).then(res => console.log(res));