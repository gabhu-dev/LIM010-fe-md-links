"use strict";

var _pathDirectory = require("./path-directory");

var _links = require("./links");

// se unen todas las funciones
// const path = require('path');
const mdLinks = (route, options) => new Promise(resolve => {
  if ((0, _pathDirectory.existRoute)(route) && options.validate === false) {
    resolve((0, _links.extLinks)((0, _pathDirectory.verify)(route)));
  } else {
    (0, _links.validateLink)((0, _links.extLinks)((0, _pathDirectory.verify)(route))).then(res => resolve(res));
  }
}); // mdLinks(path.join((process.cwd())), '.readme.md', { validate: false })
//   .then(res => console.log(res));


mdLinks('./readme.md', {
  validate: true
}).then(res => console.log(res));