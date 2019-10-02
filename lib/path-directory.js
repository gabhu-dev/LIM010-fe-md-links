"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verify = exports.extensions = exports.isFileOrDirectory = exports.isAbsoluteOrRelative = exports.existRoute = void 0;

const path = require('path');

const fs = require('fs');

const existRoute = route => {
  if (fs.existsSync(route)) {
    return true;
  }

  return false;
};

exports.existRoute = existRoute;

const isAbsoluteOrRelative = myRoute => {
  if (path.isAbsolute(myRoute)) {
    return myRoute;
  }

  return path.resolve(myRoute);
};

exports.isAbsoluteOrRelative = isAbsoluteOrRelative;

const isFileOrDirectory = myRoute => {
  if (fs.statSync(myRoute).isFile()) {
    return myRoute;
  }

  return false;
};

exports.isFileOrDirectory = isFileOrDirectory;

const extensions = myRoute => {
  if (path.extname(myRoute) === '.md') {
    return true;
  }

  return false;
};

exports.extensions = extensions;

const verify = route => {
  const routeAbsolute = isAbsoluteOrRelative(route);
  let arrayFiles = [];

  if (isFileOrDirectory(routeAbsolute)) {
    if (extensions(isFileOrDirectory(routeAbsolute))) {
      arrayFiles.push(routeAbsolute);
    }
  } else {
    const readDirectory = fs.readdirSync(routeAbsolute);
    readDirectory.forEach(file => {
      arrayFiles = arrayFiles.concat(verify(path.join(routeAbsolute, file)));
    });
  }

  return arrayFiles;
};

exports.verify = verify;