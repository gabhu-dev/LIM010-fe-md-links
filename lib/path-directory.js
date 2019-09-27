"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verify = exports.extensions = exports.isFileOrDirectory = exports.isAbsoluteOrRelative = exports.existRoute = void 0;

// ------------COMENZANDO-----------------
const path = require('path');

const fs = require('fs'); // existe la ruta?


const existRoute = route => {
  if (fs.existsSync(route)) {
    return true;
  }

  return false;
}; // Es absoluta ???


exports.existRoute = existRoute;

const isAbsoluteOrRelative = myRoute => {
  if (path.isAbsolute(myRoute)) {
    return myRoute;
  }

  return path.resolve(myRoute);
}; // hay archivos?


exports.isAbsoluteOrRelative = isAbsoluteOrRelative;

const isFileOrDirectory = myRoute => {
  if (fs.statSync(myRoute).isFile()) {
    return myRoute; // es archivo
  }

  return false; // es directorio
}; // en esta funcion seria mejor si retornara booleano


exports.isFileOrDirectory = isFileOrDirectory;

const extensions = myRoute => {
  if (path.extname(myRoute) === '.md') {
    return true;
  }

  return false;
}; // guardar archivos en un array
// export const saveFiles = (routes) => {
//   const arrayFiles = [];
//   arrayFiles.push(routes);
//   return arrayFiles;
// };
// export const readFiles = (files) => {
//   const read = fs.readFileSync(files, 'utf8');
//   return read;
// };
// recursion


exports.extensions = extensions;

const verify = route => {
  const routeAbsolute = isAbsoluteOrRelative(route); // ruta absoluta

  let arrayFiles = [];

  if (isFileOrDirectory(routeAbsolute)) {
    // es archivo
    if (extensions(isFileOrDirectory(routeAbsolute))) {
      // es .md
      arrayFiles.push(routeAbsolute);
    }
  } else {
    // es directorio
    const readDirectory = fs.readdirSync(routeAbsolute); // lee el archivo

    readDirectory.forEach(file => {
      arrayFiles = arrayFiles.concat(verify(path.join(routeAbsolute, file)));
    });
  }

  return arrayFiles;
}; // console.log(verify('./readme.md'));


exports.verify = verify;