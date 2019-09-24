"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkFetch = exports.extLinks = exports.saveFiles = exports.extensions = exports.isFileOrDirectory = exports.isAbsoluteOrRelative = exports.existRoute = void 0;

// ------------COMENZANDO-----------------
const path = require('path');

const fs = require('fs');

const marked = require('marked');

const fetch = require('node-fetch'); // existe la ruta?


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
    return true;
  }

  return false;
};

exports.isFileOrDirectory = isFileOrDirectory;

const extensions = myRoute => {
  if (path.extname(myRoute) === '.md') {
    return path.extname(myRoute);
  }

  return 'no hay extensiones';
}; // guardar archivos en un array


exports.extensions = extensions;

const saveFiles = files => {
  const arrayExtensions = [];
  arrayExtensions.push(files);
  return arrayExtensions;
}; // export const readFiles = (files) => {
//   const read = fs.readFileSync(files, 'utf8');
//   return read;
// };
// preguntar si tiene links


exports.saveFiles = saveFiles;

const extLinks = files => {
  const readFile = fs.readFileSync(files, 'utf8');
  const arrayLinks = [];
  const render = new marked.Renderer();

  render.link = (href, title, text) => {
    arrayLinks.push({
      href,
      title,
      text
    });
  };

  marked(readFile, {
    renderer: render
  });
  return arrayLinks;
}; // console.log(extLinks('C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\pruebaREADME.md'));
// ver si los links estan correctos


exports.extLinks = extLinks;

const linkFetch = fileLink => {
  fetch(fileLink).then(response => {
    response.status();
  }).then(link => {
    console.log(link);
  }).catch(err => {
    console.log(err);
  });
};

exports.linkFetch = linkFetch;
console.log(linkFetch('https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch'));