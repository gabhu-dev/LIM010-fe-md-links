"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pathDirectory = require("./path-directory");

var _links = require("./links");

var _default = (route, options) => new Promise(resolve => {
  if ((0, _pathDirectory.existRoute)(route) && options.validate === false) {
    resolve((0, _links.extLinks)((0, _pathDirectory.verify)(route)));
  } else {
    resolve((0, _links.validateLink)((0, _links.extLinks)((0, _pathDirectory.verify)(route))));
  }
});

exports.default = _default;