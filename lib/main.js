"use strict";

var _pathDirectory = require("./path-directory.js");

// se unen todas las funciones
const mdLinks = (route, options) => {
  if ((0, _pathDirectory.existRoute)(route) === true) {
    if ((0, _pathDirectory.isAbsoluteOrRelative)(route) === true) {
      if ((0, _pathDirectory.isFileOrDirectory)(route) === true) {
        if ((0, _pathDirectory.extensions)(route) === true) {}
      }
    }
  }
};