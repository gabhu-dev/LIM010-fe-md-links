"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pathDirectory = require("./path-directory");

var _links = require("./links");

// se unen todas las funciones
// const path = require('path');
// export default (route, options) => new Promise((resolve) => {
//   if (existRoute(route) && options.validate === false || options.validate === undefined) {
//     resolve(extLinks(verify(route)));
//   } else {
//     validateLink(extLinks(verify(route)))
//       .then(res => resolve(res));
//   }
// });
var _default = (route, options) => new Promise(resolve => {
  if ((0, _pathDirectory.existRoute)(route)) {
    if (options.validate === false || options.validate === undefined) {
      resolve((0, _links.extLinks)((0, _pathDirectory.verify)(route)));
    } else {
      (0, _links.validateLink)((0, _links.extLinks)((0, _pathDirectory.verify)(route))).then(res => resolve(res));
    }
  } else {
    resolve('Route not found');
  }
}); // mdLinks(path.join((process.cwd())), '.readme.md', { validate: false })
//   .then(res => console.log(res));
// mdLinks('./readme.md', { validate: true })
//   .then(res => console.log(res));


exports.default = _default;